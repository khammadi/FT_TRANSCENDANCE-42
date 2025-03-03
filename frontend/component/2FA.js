import { changeLanguage } from "./language.js";
import Router from "../router.js";

export class TwoFAPage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.getElementById("twofa-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    this.querySelector("#validate-two-factor-authentication-btn").addEventListener("click", (e) => {
      e.preventDefault();
      this.verify2FACode();
    });
  }
  async verify2FACode() {
    const code = [
      this.querySelector('#one').value,
      this.querySelector('#two').value,
      this.querySelector('#three').value,
      this.querySelector('#four').value,
      this.querySelector('#five').value,
      this.querySelector('#six').value,
    ].join('');
    try {
      const response = await fetch('http://localhost:8000/api/users/login/2fa/verify/', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: code }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Verification failed");
      }
  
      Router.go("/home");
    } catch (error) {
      this.showVerificationMessage(error.message, true);
    }
  }
  showVerificationMessage(message, isError) {
    const messageElement = this.querySelector("#verification-message");
    if (!messageElement) {
      const newMessageElement = document.createElement("div");
      newMessageElement.id = "verification-message";
      this.appendChild(newMessageElement);
    }

    const messageElementFinal = this.querySelector("#verification-message");
    messageElementFinal.textContent = message;
    messageElementFinal.style.color = isError ? "red" : "green";
  }
}

customElements.define("twofa-page", TwoFAPage);
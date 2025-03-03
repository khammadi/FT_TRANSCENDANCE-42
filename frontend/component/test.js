import Router from '../router.js';
import { changeLanguage } from './language.js';
import { checkAuth } from "./login.js";

function displayRequestStatus(type, message) {
  const error = document.createElement("div");
  error.classList.add("error", type);
  error.innerHTML = `
        <span class="message-error">${message}</span>
        <span class="close-btn">&times;</span>
    `;
  const errorManager = document.getElementById("setting");
  errorManager.appendChild(error);

  setTimeout(() => {
    error.classList.add("show");
  }, 100);

  setTimeout(() => {
    removeError(error);
  }, 5000);

  error.querySelector(".close-btn").addEventListener("click", () => {
    removeError(error);
  });
}

function removeError(error) {
  error.classList.remove("show");
  setTimeout(() => {
    error.remove();
  }, 500);
}
export class SettingPage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.getElementById("setting-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
    checkAuth().then(isAuthenticated => {
        if (!isAuthenticated) {
          Router.go("/login");
        }
      });
      this.querySelectorAll('a[data-lang]').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const language = link.getAttribute('data-lang');
          window.localStorage.setItem('selectedLanguage', language);
          changeLanguage();
        });
      });
    changeLanguage();
  }
}
customElements.define("setting-page", SettingPage);
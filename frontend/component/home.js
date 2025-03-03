import Router from "../router.js";
import { checkAuth } from "./login.js";
import { changeLanguage } from "./language.js";

export function displayRequestStatus(type, message) {
  const error = document.createElement("div");
  error.classList.add("error", type);
  error.innerHTML = `
        <span class="message-error">${message}</span>
        <span class="close-btn">&times;</span>
    `;

  const errorManager = document.getElementById("home");
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

export class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById("home-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    // Redirect to login if not authenticated
    checkAuth().then(isAuthenticated => {
      if (!isAuthenticated) {
        Router.go("/login");
      }
    });

    this.logOut();
    changeLanguage();
  }

   logOut() {
    const LogOutBtn = this.querySelector(".logOut");
    LogOutBtn.addEventListener("click", async () => {
      try {
        const response = await fetch("http://localhost:8000/api/users/logout/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include', // Include cookies
        });

        const data = await response.json(); // Parse the JSON response

        if (response.status === 200) {
          displayRequestStatus("success", "LogOut successful");
          Router.go("/login");
        } else {
          displayRequestStatus("error", data.message || "Failed to logOut");
        }
      } catch (error) {
        console.error("Logout error:", error);
        displayRequestStatus("error", "An error occurred during logout.");
      }
    });
  }
}

customElements.define("home-page", HomePage);


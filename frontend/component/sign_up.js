import Router from "../router.js";
function displayRequestStatus(type, message) {
  const error = document.createElement("div");
  error.classList.add("error", type);
  error.innerHTML = `
        <span class="message-error">${message}</span>
        <span class="close-btn">&times;</span>
    `;
  const errorManager = document.getElementById("sign_up");
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
export class SignUpPage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.getElementById("signup-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
    this.register();
  }
  register() {
    const registerForm = this.querySelector(".sign_Upform");
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const username = event.target.querySelector("input[placeholder='Enter Username']");
      const nickname = event.target.querySelector("input[placeholder='Enter Nickname']");
      const password = event.target.querySelector("input[placeholder='Enter Password']");
      const email = event.target.querySelector("input[placeholder='Enter Email']");
      if (!username.value || !nickname.value || !password.value || !email.value) {
        displayRequestStatus("error", "All fields are required.");
        return;
      }
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email.value)) {
        displayRequestStatus("error", "Please enter a valid email address.");
        return;
      }
      const message = {
        username: username.value,
        password: password.value,
        email: email.value,
      };

      try {
        const response = await fetch("http://localhost:8000/api/users/register/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(message),
          credentials: "include",
        });

        if (response.status === 201) {
          displayRequestStatus("success", "Account created successfully. Redirecting...");
          setTimeout(() => {
            Router.go("/login");
          }, 3000);
        } else {
          const responseData = await response.json();
          password.value = "";
          if (responseData.detail) {
            displayRequestStatus("error", responseData.detail);
          } else {
            for (let field in responseData) {
              for (let error of responseData[field]) {
                displayRequestStatus("error", `${field}: ${error}`);
              }
            }
          }
        }
      } catch (error) {
        console.error("Error during registration:", error);
        displayRequestStatus("error", "An error occurred during registration.");
      }
    });
  }
}

customElements.define("signup-page", SignUpPage);
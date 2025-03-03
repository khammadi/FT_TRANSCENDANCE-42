import Router from "../router.js";

function displayRequestStatus(type, message) {
  const error = document.createElement("div");
  error.classList.add("error", type);
  error.innerHTML = `
        <span class="message-error">${message}</span>
        <span class="close-btn">&times;</span>
    `;
  const errorManager = document.getElementById("login");
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

export async function checkAuth() {
  try {
    const response = await fetch('http://localhost:8000/api/users/check-auth/', {
      credentials: 'include', // Include cookies
    });
    const data = await response.json();
    return data.is_authenticated;
  } catch (error) {
    console.error('Auth check failed:', error);
    return false;
  }
}

class LoginPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById("login-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
    this.login();
    checkAuth().then(isAuthenticated => {
      if (isAuthenticated) {
        Router.go("/home");
      }
    });
    this.switchToSignUpPage();
    this.Oauth42Login();
    this.handleOAuthCallback();
  }

  async login() {
    const form = this.querySelector(".formSignIn");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const username = event.target.querySelector("input[placeholder='Enter Username']").value;
        const password = event.target.querySelector("input[placeholder='Enter Password']").value;

        if (!username || !password) {
            displayRequestStatus("error", "Both username and password are required.");
            return;
        }

        const message = { username, password };

        try {
            const response = await fetch("http://localhost:8000/api/users/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(message),
            });
            if (response.ok) {
                const data = await response.json();
                if (data.user?.is_2fa_enabled) {
                    displayRequestStatus("success", "Login successful. Redirecting to 2FA...");
                    Router.go("/twofa");
                } else {
                    displayRequestStatus("success", "Login successful. Redirecting to home...");
                    Router.go("/home");
                }
            } else {
                const errorData = await response.json();
                displayRequestStatus("error", errorData.detail || "Username or password is incorrect.");
            }
        } catch (error) {
            displayRequestStatus("error", "An error occurred during login.");
        }
    });
}
  switchToSignUpPage() {
    const signUpButton = this.querySelector(".sign_up");
    signUpButton.addEventListener("click", (event) => {
      event.preventDefault();
      Router.go("/signup");
    });
  }

  Oauth42Login() {
    const oauth42Button = this.querySelector(".oauth42");

    oauth42Button.addEventListener("click", (event) => {
      event.preventDefault();
      fetch("http://localhost:8000/api/users/auth/42/login/", {
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.auth_url) {
            console.log("Redirecting to OAuth URL:", data.auth_url);
            window.location.replace(data.auth_url); // Redirect to OAuth URL
          } else {
            displayRequestStatus("error", "Failed to initiate OAuth login");
          }
        })
        .catch((error) => {
          console.error("Error during OAuth login:", error);
          displayRequestStatus("error", "An error occurred during OAuth login.");
        });
    });
  }
  handleOAuthCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      console.log("Received OAuth code:", code);

      fetch(`http://localhost:8000/api/users/auth/42/callback?code=${code}`, {
        method: "GET",
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token && data.refresh_token) {
            console.log("OAuth login successful");

            displayRequestStatus("success", "Login successful");
            Router.go("/home");
          } else {
            displayRequestStatus("error", "OAuth authentication failed.");
          }
        })
        .catch((error) => {
          console.error("Error during OAuth callback:", error);
          displayRequestStatus("error", "An error occurred during OAuth callback.");
        });
    }
  }
}

customElements.define("login-page", LoginPage);
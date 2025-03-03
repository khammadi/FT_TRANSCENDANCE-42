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
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const language = link.getAttribute('data-lang');
    
            try {
                const response = await fetch('http://localhost:8000/api/users/user/language/', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ language }),
                    credentials: 'include',
                });
                if (response.ok) {
                    changeLanguage();
                } else {
                    console.error('Failed to update language');
                }
            } catch (error) {
                console.error('Error updating language:', error);
            }
        });
    });    
    changeLanguage();
    this.initComponents();
    this.loadUserData();
    this.fetch2FAStatus();
    this.logOut();
  }
  async loadUserData() {
    try {
      const response = await fetch("http://localhost:8000/api/users/me/", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await response.json();
      const usernameInput = this.querySelector('input[name="Username"]');
      const emailInput = this.querySelector('input[name="Email"]');
      const nicknameInput = this.querySelector('input[name="Nickname"]');
      const passwordInput = this.querySelector('input[name="Password"]');
      if (usernameInput) {
        usernameInput.placeholder = userData.username || 'Enter Username';
      }
      if (emailInput) {
        emailInput.placeholder = userData.email || 'Enter Email';
      }
      if (nicknameInput) {
        nicknameInput.placeholder = userData.nickname || 'Enter Nickname';
      }
      if (passwordInput) {
        passwordInput.placeholder = 'Enter New Password';
      }
    } catch (error) {
      console.error("Error loading user data:", error);
      displayRequestStatus("error", "Failed to load user data. Please try again.");
    }
  }
  initComponents() {
    this.querySelector("#save_information")?.addEventListener("click", () => this.updateUserInfo());    
    this.init2FAHandlers();
    this.querySelector("#showPasswordForm").addEventListener("click", () => this.togglePasswordForm());
    this.querySelector("#submitPasswordChange").addEventListener("click", () => this.changePassword());
  }
  togglePasswordForm() {
    const form = this.querySelector("#passwordChangeForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
}
 resetFormPlaceholders(form) {
  if (!form) {
      console.error("Form not found!");
      return;
  }
  const currentPasswordInput = form.querySelector("#currentPassword");
  const newPasswordInput = form.querySelector("#newPassword");
  const confirmPasswordInput = form.querySelector("#confirmPassword");
  if (!currentPasswordInput || !newPasswordInput || !confirmPasswordInput) {
      displayRequestStatus("error", "Some input fields are missing in the form");
      return;
  }
  currentPasswordInput.value = '';
  newPasswordInput.value = '';
  confirmPasswordInput.value = '';

  // Reset placeholders
  currentPasswordInput.setAttribute("placeholder", "Current Password");
  newPasswordInput.setAttribute("placeholder", "New Password");
  confirmPasswordInput.setAttribute("placeholder", "Confirm Password");
}


async changePassword() {
    const currentPassword = this.querySelector("#currentPassword").value;
    const newPassword = this.querySelector("#newPassword").value;
    const confirmPassword = this.querySelector("#confirmPassword").value;
    const messageElement = this.querySelector("#passwordChangeMessage");
    const form = this.querySelector("#passwordChangeForm");  

    if (!currentPassword || !newPassword || !confirmPassword) {
      displayRequestStatus("error", "ALl filled required");
      this.resetFormPlaceholders(form);
      return;
    }

    if (newPassword !== confirmPassword) {
      displayRequestStatus("error", "NewPass!= ConfirmedPass");
      this.resetFormPlaceholders(form);
      return;
    }

    try {
        const response = await fetch("http://localhost:8000/api/users/password/change/", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                old_password: currentPassword,
                new_password: newPassword,
            }),
        });

        const data = await response.json();
        if (response.ok) {
          displayRequestStatus("Success", "Password update Successfully.");
          this.resetFormPlaceholders(form);
        } else {
          displayRequestStatus("error", "Password update failed.");
          this.resetFormPlaceholders(form);
        }
        messageElement.style.display = "block";
    } catch (error) {
        displayRequestStatus("error", "Error updating password.");
        this.resetFormPlaceholders(form);
    }
}

  init2FAHandlers() {
    this.querySelector('.enable-2fa-button')?.addEventListener('click', () => this.show2FASetup());
    this.querySelector('.verify-button')?.addEventListener('click', () => this.verify2FACode());
    this.querySelector('.cancel-button')?.addEventListener('click', () => this.reset2FAState());
    this.querySelector('.disable-2fa-button')?.addEventListener('click', () => this.disable2FA());
  }
  async fetch2FAStatus() {
    try {
        const response = await fetch("http://localhost:8000/api/users/2fa/status/", {
            method: "GET",
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch 2FA status.");
        }

        const data = await response.json();
        const is2FAEnabled = data.is_2fa_enabled;

        if (is2FAEnabled) {
            this.querySelector('.disable-2fa-button').style.display = 'block';
            this.querySelector('.enable-2fa-button').style.display = 'none';
            this.querySelector('.qr-content').style.display = 'none';
        } else {
            this.querySelector('.disable-2fa-button').style.display = 'none';
            this.querySelector('.enable-2fa-button').style.display = 'block';
            this.querySelector('.qr-content').style.display = 'none';
        }
    } catch (error) {
        console.error("Error fetching 2FA status:", error);
        displayRequestStatus("error", "Failed to fetch 2FA status. Please try again.");
    }
}
  async show2FASetup() {
    try {
      const response =     await fetch('http://localhost:8000/api/users/2fa/enable/', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    })
      if (!response.ok) throw new Error('Failed to enable 2FA');
      const { qr_code, secret } = await response.json();
      this.querySelector('.qr-image').src = `data:image/png;base64,${qr_code}`;
      this.querySelector('.secret-key').textContent = `Secret: ${secret}`;
      this.querySelector('.secret-key').style.display = 'none';
      this.querySelector('.enable-2fa-button').style.display = 'none';
      this.querySelector('.qr-content').style.display = 'block';
    } catch (error) {
      this.showVerificationMessage(error.message, true);
    }
  }
  async verify2FACode() {
    const code = this.querySelector('.verify-input').value;
    try {
      const response = await fetch('http://localhost:8000/api/users/2fa/verify/', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: code })
      });
      if (!response.ok) throw new Error('Verification failed');
      this.querySelector('.qr-content').style.display = 'none';
      this.querySelector('.disable-2fa-button').style.display = 'block';
      this.showVerificationMessage('2FA enabled successfully!', false);
    } catch (error) {
      this.showVerificationMessage(error.message, true);
    }
  }
  async disable2FA() {
    try {
      const response = await fetch('http://localhost:8000/api/users/2fa/disable/', {
        method: 'POST',
        credentials: 'include'
      });

      if (!response.ok) throw new Error('Failed to disable 2FA');
      
      this.querySelector('.disable-2fa-button').style.display = 'none';
      this.querySelector('.enable-2fa-button').style.display = 'block';
      this.showVerificationMessage('2FA disabled successfully!', false);
    } catch (error) {
      this.showVerificationMessage(error.message, true);
    }
  }
  reset2FAState() {
    this.querySelector('.enable-2fa-button').style.display = 'block';
    this.querySelector('.qr-content').style.display = 'none';
    this.querySelector('.verification-message').textContent = '';
  }
  async updateUserInfo() {
    const username = this.querySelector("#username").value;
    const email = this.querySelector("#email").value;
    if (!username && !email) {
        displayRequestStatus("error", "Please enter a username or email to update.");
        return;
    }
    const data = {};
    if (username) data.username = username;
    if (email) data.email = email;
    try {
        const response = await fetch("http://localhost:8000/api/users/update/", {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || "Failed to update user information.");
        }
        const result = await response.json();
        displayRequestStatus("success", "User information updated successfully!");
    } catch (error) {
        displayRequestStatus("error", error.message || "Failed to update user information. Please try again.");
    }
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
          credentials: 'include',
        });
        const data = await response.json();
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
  showVerificationMessage(message, isError) {
    const messageEl = this.querySelector('.verification-message');
    messageEl.textContent = message;
    messageEl.style.color = isError ? '#ff4444' : '#4fff52';
    messageEl.style.textShadow = isError ? 
      '0 0 5px #ff0000' : '0 0 5px #00ff00';
  }
}
customElements.define("setting-page", SettingPage);
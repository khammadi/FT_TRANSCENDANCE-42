import { changeLanguage } from "./language.js";
import Router from "../router.js";
import { checkAuth } from "./login.js";

export class GamePage extends HTMLElement {
  constructor() {
    super();
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

  handleQueryParams(queryParams) {
    const mode = queryParams.get("mode");
    const player1 = queryParams.get("player1");
    const player2 = queryParams.get("player2");
    console.log(`Mode: ${mode}, Player 1: ${player1}, Player 2: ${player2}`);
  }

  connectedCallback() {
    const template = document.getElementById("game-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    checkAuth().then(isAuthenticated => {
      if (!isAuthenticated) {
        Router.go("/login");
      }
    });

    // Set the current user's name in the player1 placeholder for all game modes
    this.setPlayer1Placeholder();

    // Add form event listeners
    this.addFormListeners();

    changeLanguage();
    this.logOut();
  }

  setPlayer1Placeholder() {
    // Assuming player1 is present in multiple forms
    const player1Fields = [
      document.getElementById("player1"),
      document.getElementById("player1AI"),
      document.getElementById("player1star"),
      document.getElementById("player1Multiple")
    ];

    // Fetch the current user's name from the backend
    fetch('http://localhost:8000/api/users/me/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
      if (data.username) {
        player1Fields.forEach(field => {
          if (field) {
            field.value = data.username;
            field.setAttribute("readonly", true);
          }
        });
      }
    })
    .catch(error => {
      console.error("Error fetching user data:", error);
    });
  }

  addFormListeners() {
    // Handle 1v1 form submission
    document.getElementById("playerForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const player1 = this.getPlayerValue("player1");
      const player2 = this.getPlayerValue("player2");
      Router.go(`/gameT?mode=1v1&player1=${encodeURIComponent(player1)}&player2=${encodeURIComponent(player2)}`);
    });

    // Handle AI form submission
    document.getElementById("playerFormAI").addEventListener("submit", (event) => {
      event.preventDefault();
      const player1AI = this.getPlayerValue("player1");
      const player2AI = this.getPlayerValue("player2") || 'AI';
      Router.go(`/gameT?mode=ai&player1=${encodeURIComponent(player1AI)}&player2=${encodeURIComponent(player2AI)}`);
    });

    // Handle Star form submission
    document.getElementById("playerFormStar").addEventListener("submit", (event) => {
      event.preventDefault();
      const player1star = this.getPlayerValue("player1star");
      const player2star = this.getPlayerValue("player2star");
      const player3star = this.getPlayerValue("player3star");
      const player4star = this.getPlayerValue("player4star");

      Router.go(`/gameT?mode=star&player1=${encodeURIComponent(player1star)}&player2=${encodeURIComponent(player2star)}&player3=${encodeURIComponent(player3star)}&player4=${encodeURIComponent(player4star)}`);
    });

    // Handle Multiple form submission
    document.getElementById("playerMultiple").addEventListener("submit", (event) => {
      event.preventDefault();
      const player1Multiple = this.getPlayerValue("player1Multiple");
      const player2Multiple = this.getPlayerValue("player2Multiple");
      const player3Multiple = this.getPlayerValue("player3Multiple");

      Router.go(`/gameT?mode=multi&player1=${encodeURIComponent(player1Multiple)}&player2=${encodeURIComponent(player2Multiple)}&player3=${encodeURIComponent(player3Multiple)}`);
    });
  }
  getPlayerValue(playerId) {
    const playerField = document.getElementById(playerId);
    return playerField ? playerField.value : "";
  }
}
customElements.define("game-page", GamePage);
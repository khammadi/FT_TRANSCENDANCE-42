import Router from "../router.js";

export class GameSecondPage extends HTMLElement {
  constructor() {
    super();
  }

  async fetchCurrentUser() {
    try {
      const response = await fetch('http://localhost:8000/api/users/me/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();
      return data.username || null;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  }

  async connectedCallback() {
    const template = document.getElementById("gameSecond-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    const player1Field = document.getElementById("player1");
    if (player1Field) {
      const currentUser = await this.fetchCurrentUser();
      if (currentUser) {
        player1Field.value = currentUser;
        player1Field.setAttribute("readonly", true);
      }
    }

    document.getElementById("playerForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const player1 = player1Field.value;
      const player2 = document.getElementById("player2").value;
      Router.go(`/gameS?mode=1v1&player1=${encodeURIComponent(player1)}&player2=${encodeURIComponent(player2)}`);
    });
  }
}

customElements.define("secondgame-page", GameSecondPage);
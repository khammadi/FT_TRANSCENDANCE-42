import Router from "../router.js";
import { checkAuth } from "./login.js";
import { changeLanguage } from "./language.js";
function displayRequestStatus(type, message) {
  const error = document.createElement("div");
  error.classList.add("error", type);
  error.innerHTML = `
        <span class="message-error">${message}</span>
        <span class="close-btn">&times;</span>
    `;
  const errorManager = document.getElementById("profile");
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

class ProfilePage extends HTMLElement {
  constructor() {
    super();
    this.users = [];
    this.sentRequests = new Set(JSON.parse(localStorage.getItem("sentRequests") || "[]"));
    this.friends = [];
  }
  async fetchGameStats() {
    try {
      const response = await fetch("http://localhost:8000/api/games/stats/", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching game stats:", error);
      return null;
    }
  }

  calculateWinPercentage(stats) {
    if (!stats || stats.games_played === 0) {
      return 0;
    }
    const winPercentage = (stats.games_won / stats.games_played) * 100;
    return Math.round(winPercentage);
  }

  renderWinPercentage(winPercentage) {
    const circleElement = this.querySelector(".circle");
    const textElement = this.querySelector(".text h2");

    if (circleElement && textElement) {
      circleElement.setAttribute("data-percent", winPercentage);
      textElement.textContent = `${winPercentage}%`;
    } else {
      console.error("DOM elements not found");
    }
  }

  async fetchMatchHistoryMulti() {
    try {
      const response = await fetch("http://localhost:8000/api/games/stats/multiplayer/", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const matchHistory = await response.json();
      this.renderMatchHistoryMulti(matchHistory);
    } catch (error) {
      console.error("Error fetching match history:", error);
    }
  }

  renderMatchHistoryMulti(matches) {
    const matchContainer = this.querySelector(".match-history-container");
    if (!matchContainer) {
      console.error("Match history container not found");
      return;
    }
    matchContainer.innerHTML = "";
    matches.forEach(match => {
      const matchElement = document.createElement("div");
      matchElement.classList.add("match-card");
      matchElement.innerHTML = `
          <div class="players">
              <div class="player">
                  <img src="http://localhost:8000${match.avatar}" alt="${match.user}">
                  <span class="player-name">${match.user}</span>
              </div>
              <div class="vs">VS</div>
              <div class="player">
                <img src="${match.participants.avatar ? `http://localhost:8000${match.participants.avatar}` : './style/playerInsky.webp'}" alt="${participant.name}">
                <span class="player-name">${match.participants.name}</span>
              </div>
              <div class="vs">VS</div>
              <div class="player">
                  <img src="${match.participants.avatar ? `http://localhost:8000${match.participants.avatar}` : './style/playerInsky.webp'}" alt="${participant.name}">
                  <span class="player-name">${match.participants.name}</span>
              </div>
          </div>
          <div class="score">
              <span class="player-score">${match.user_score}</span>
              <span class="player-score">${match.opponent_score}</span>
               <span class="player-score">${match.opponent_score}</span>
          </div>
      `;
      matchContainer.appendChild(matchElement);
    });
  }
  async fetchAndRenderMatchHistory() {
    try {
      const [matchHistoryResponse, multiplayerResponse] = await Promise.all([
        fetch("http://localhost:8000/api/games/match-history/", {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" }
        }),
        fetch("http://localhost:8000/api/games/stats/multiplayer/", {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" }
        })
      ]);

      if (!matchHistoryResponse.ok || !multiplayerResponse.ok) {
        throw new Error("Error fetching match data");
      }

      const matchHistory = await matchHistoryResponse.json();
      const multiplayerMatches = await multiplayerResponse.json();

      const allMatches = [...matchHistory, ...multiplayerMatches];

      allMatches.sort((a, b) => new Date(b.date) - new Date(a.date));

      this.renderMatchHistory(allMatches);

    } catch (error) {
      console.error("Error fetching match history:", error);
    }
  }

  renderMatchHistory(matches) {
    const matchContainer = this.querySelector(".match-history-container");
    if (!matchContainer) {
      console.error("Match history container not found");
      return;
    }

    matchContainer.innerHTML = "";

    matches.forEach(match => {
      const matchElement = document.createElement("div");
      matchElement.classList.add("match-card");

      // Format the date
      const formattedDate = new Date(match.date).toLocaleDateString('en-US', {
          weekday: 'short', // 'Mon', 'Tue', etc.
          year: 'numeric',  // '2025'
          month: 'short',   // 'Mar'
          day: 'numeric'    // '1'
      });

      const formattedTime = new Date(match.date).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
      });
      if (match.participants) {
        let playersHTML = "";
        match.participants.forEach(participant => {
          const avatarSrc = participant.avatar && participant.avatar !== "/static/default-avatar.webp"
            ? `http://localhost:8000${participant.avatar}`
            : "/style/playerInsky.webp";

          playersHTML += `
                  <div class="player">
                      <img src="${avatarSrc}" alt="${participant.name}" 
                           onerror="this.onerror=null;this.src='/style/playerInsky.webp';">
                      <span class="player-name">${participant.username}</span>
                      <span class="player-score">${participant.score}</span>
                  </div>
              `;
        });

        matchElement.innerHTML = `
            <div class="match-date">${formattedDate} at ${formattedTime}</div>
            <div class="players">${playersHTML}</div>
        `;
      } else {
        matchElement.innerHTML = `
            <div class="match-date">${formattedDate} at ${formattedTime}</div>
            <div class="players">
                <div class="player">
                    <img src="http://localhost:8000${match.avatar}" alt="${match.user}">
                    <span class="player-name">${match.username}</span>
                </div>
                <div class="vs">VS</div>
                <div class="player">
                    <img src="./style/playerInsky.webp" alt="${match.opponent}">
                    <span class="player-name">${match.opponent_name}</span>
                </div>
            </div>
            <div class="score">
                <span class="player-score">${match.user_score}</span>
                <span class="player-score">${match.opponent_score}</span>
            </div>
        `;
      }

      matchContainer.appendChild(matchElement);
    });
}

  async fetchUsers() {
    try {
      const meResponse = await fetch("http://localhost:8000/api/users/me/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
      if (!meResponse.ok) {
        throw new Error(`HTTP error! status: ${meResponse.status}`);
      }
      const userData = await meResponse.json();
      console.log("Fetched user data:", userData);
      const avatarImg = this.querySelector("#user-avatar");
      avatarImg.src = `http://localhost:8000${userData.avatar_url}`;
      const allUsersResponse = await fetch("http://localhost:8000/api/users/list/", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" }
      });
      if (!allUsersResponse.ok) {
        throw new Error(`HTTP error! status: ${allUsersResponse.status}`);
      }
      const allUsersData = await allUsersResponse.json();
      const friendsResponse = await fetch("http://localhost:8000/api/users/friendships/friends-list/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
      if (!friendsResponse.ok) {
        throw new Error(`HTTP error! status: ${friendsResponse.status}`);
      }
      const friendsData = await friendsResponse.json();
      this.friends = friendsData.results || friendsData;
      this.users = (allUsersData.results || allUsersData).filter(
        user => !this.friends.some(friend => friend.username === user.username)
      );
      const requestsResponse = await fetch("http://localhost:8000/api/users/friendships/pending-requests/", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" }
      });
      if (!requestsResponse.ok) {
        throw new Error(`HTTP error! status: ${requestsResponse.status}`);
      }
      const requestsData = await requestsResponse.json();
      const pendingRequests = requestsData.results || requestsData;
      this.sentRequests.clear();
      pendingRequests.forEach(request => {
        this.sentRequests.add(String(request.sender_id));
      });
      localStorage.setItem("sentRequests", JSON.stringify([...this.sentRequests]));
      this.renderUsers();
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async sendFriendRequest(userId) {
    try {
      const response = await fetch("http://localhost:8000/api/users/friendships/send-request/", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to_user_id: userId })
      });
      console.log("Request Payload:", JSON.stringify({ to_user_id: userId }));
      if (response.status === 400) {
        displayRequestStatus("success", "Already your friend or request exists.")
        return;
      }
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Friend request sent successfully:", data);
      this.sentRequests.add(String(userId));
      localStorage.setItem("sentRequests", JSON.stringify([...this.sentRequests]));
      this.renderUsers();
    } catch (error) {
      displayRequestStatus("success", "Failed to send friend request. Please try again.")
    }
  }
  renderUsers() {
    const usersContainer = this.querySelector(".users_container");
    if (!usersContainer) {
      console.error("Users container not found");
      return;
    }
    usersContainer.innerHTML = "";
    this.users.forEach(user => {
      const userElement = document.createElement("div");
      userElement.classList.add("user");
      const profileImage = `http://localhost:8000${user.avatar_url}`;
      const hasSentRequest = this.sentRequests.has(String(user.id));
      userElement.innerHTML = `
      <div class="profileAdd">
        <img src="${profileImage}" alt="${user.username}" onerror="this.src='./style/playerInsky.webp';">
        <div class="name">
          <h3 class="hAdd">${user.username}</h3>
        </div>
      </div>
      <button class="btnAdd" data-user-id="${user.id}" data-username="${user.username}" ${hasSentRequest ? "disabled" : ""}>
        ${hasSentRequest ? "Request Sent" : "Add Friend"}
      </button>
    `;
      usersContainer.appendChild(userElement);
    });
    this.querySelectorAll(".btnAdd").forEach(button => {
      button.addEventListener("click", () => {
        const userId = button.getAttribute("data-user-id");
        this.sendFriendRequest(userId);
      });
    });
  }
  async fetchFriendRequests() {
    try {
      const response = await fetch("http://localhost:8000/api/users/friendships/pending-requests/", {
        credentials: "include",
        headers: { "Content-Type": "application/json" }
      });
      const data = await response.json();
      this.renderFriendRequests(data.results || data);
    } catch (error) {
      console.error("Error fetching friend requests:", error);
    }
  }
  renderFriendRequests(requests) {
    const requestsContainer = this.querySelector("#requests_container");
    if (!requestsContainer) {
      console.error("Requests container not found");
      return;
    }
    requestsContainer.innerHTML = "";
    requests.forEach(request => {
      const requestElement = document.createElement("div");
      requestElement.classList.add("user");
      requestElement.setAttribute("data-request-id", request.id);
      requestElement.setAttribute("data-sender-id", String(request.sender_id));
      const profileImage = `http://localhost:8000${request.from_user_avatar_url}`;
      requestElement.innerHTML = `
          <div class="profileAdd">
              <img src="${profileImage}" alt="${request.sender_username}">
              <div class="name">
                  <h3 class="hAdd">${request.from_user}</h3>
              </div>
          </div>
          <div class="actions">
              <button class="btnAccept" data-request-id="${request.id}"><i class="fas fa-check"></i></button>
              <button class="btnReject" data-request-id="${request.id}"><i class="fas fa-times"></i></button>
          </div>
      `;
      requestsContainer.appendChild(requestElement);
    });
    this.querySelectorAll(".btnAccept").forEach(button => {
      button.addEventListener("click", () => {
        const requestId = button.getAttribute("data-request-id");
        this.acceptFriendRequest(requestId);
        this.fetchFriends();
      });
    });
    this.querySelectorAll(".btnReject").forEach(button => {
      button.addEventListener("click", () => {
        const requestId = button.getAttribute("data-request-id");
        this.rejectFriendRequest(requestId);
      });
    });
  }
  async fetchFriends() {
    try {
      const response = await fetch("http://localhost:8000/api/users/friendships/friends-list/", {
        credentials: "include",
        headers: { "Content-Type": "application/json" }
      });
      const data = await response.json();
      console.log("Fetched friends data:", data);
      this.renderFriendList(data.results || data);
    } catch (error) {
      console.error("Error fetching friends list:", error);
    }
  }
  renderFriendList(friends) {
    const friendlist = this.querySelector("#listFriends");
    if (!friendlist) {
      console.error("Friend list container not found");
      return;
    }
    friendlist.innerHTML = "";
    friends.forEach(friend => {
      const friendElement = document.createElement("div");
      friendElement.classList.add("user");
      const profileImage = `http://localhost:8000${friend.avatar_url}`;
      const statusClass = friend.is_online ? 'enligne' : 'offline';
      const statusText = friend.is_online ? 'En ligne' : 'Hors ligne';

      friendElement.innerHTML = `
      <div class="profileAdd">
        <img src="${profileImage}" alt="${friend.username}" onerror="this.src='./style/playerInsky.webp';">
        <div class="name">
          <h3 class="hAdd">${friend.username}</h3>
        </div>
      </div>
      <span class="status ${statusClass}">${statusText}</span>
    `;
      friendlist.appendChild(friendElement);
    });
  }
  async acceptFriendRequest(requestId) {
    try {
      const response = await fetch(`http://localhost:8000/api/users/friendships/${requestId}/accept/`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ request_id: requestId })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      Router.go(location.pathname, false);
      displayRequestStatus("success","Friend request accepted!")
      const requestElement = this.querySelector(`.user[data-request-id="${requestId}"]`);
      if (requestElement) {
        requestElement.remove();
      } else {
        console.error("Request element not found in the DOM");
      }
    } catch (error) {
      displayRequestStatus("success","Failed to accept friend request. Please try again.")
    }
  }
  async rejectFriendRequest(requestId) {
    try {
      const response = await fetch(`http://localhost:8000/api/users/friendships/${requestId}/reject/`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ request_id: requestId })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      displayRequestStatus("success","Friend request rejected!")
      const requestElement = this.querySelector(`.user[data-request-id="${requestId}"]`);
      if (requestElement) {
        const senderId = requestElement.getAttribute("data-sender-id");
        if (this.sentRequests.has(senderId)) {
          this.sentRequests.delete(senderId);
          localStorage.setItem("sentRequests", JSON.stringify([...this.sentRequests]));
        }
        this.renderUsers();
        requestElement.remove();
      } else {
        console.error("Request element not found in the DOM");
      }
    } catch (error) {
      displayRequestStatus("error","Failed to reject friend request. Please try again.")
    }
  }
  async logout() {
    const logoutButton = this.querySelector(".logOut");
    if (logoutButton) {
      logoutButton.addEventListener("click", async () => {
        try {
          const response = await fetch("http://localhost:8000/api/users/logout/", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" }
          });
          if (!response.ok) {
            throw new Error("Logout failed");
          }
          window.location.href = "/login";
        } catch (error) {
          displayRequestStatus("error","Failed to log out. Please try again.")
        }
      });
    }
  };
  handleAvatarUpload() {
    const fileInput = this.querySelector("#file");
    fileInput.addEventListener("change", async function () {
      const file = fileInput.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("avatar", file);
      try {
        const response = await fetch("http://localhost:8000/api/users/update/", {
          method: "PATCH",
          credentials: "include",
          body: formData
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById("user-avatar").src = `http://localhost:8000${data.avatar_url}`;
        Router.go(location.pathname, false);
        displayRequestStatus("success","Avatar updated successfully!")
      } catch (error) {
        displayRequestStatus("error","Failed to upload avatar. Please try again.")
      }
    });
  }

  connectedCallback() {
    const template = document.getElementById("pr");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
    checkAuth().then(isAuthenticated => {
      if (!isAuthenticated) {
        Router.go("/login");
      }
    });
    this.fetchUsers();
    this.fetchFriendRequests();
    this.fetchFriends();
    this.fetchAndRenderMatchHistory();
    this.logout();
    this.handleAvatarUpload();
    changeLanguage();
    this.fetchGameStats().then(stats => {
      if (stats) {
        const winPercentage = this.calculateWinPercentage(stats);
        this.renderWinPercentage(winPercentage);
      } else {
        console.error("No stats available");
      }
    });
  }
}

customElements.define("profile-page", ProfilePage);
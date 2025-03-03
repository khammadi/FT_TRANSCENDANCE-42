export class GameSecondSPage extends HTMLElement {
  constructor() {
    super();
    this.scripts = [];
    this.gameElements = [];
    this.cleanupHandlers = [];
    this.originalAppendChild = null;
    this.originalRequestAnimationFrame = null;
    this.originalAddEventListener = null;
  }

  connectedCallback() {
    const template = document.getElementById("gameSeconds-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get("mode");

    if (mode === "1v1") {
      const player1 = urlParams.get("player1");
      const player2 = urlParams.get("player2");
      console.log("Starting 1v1 mode");
      console.log(`Player 1: ${player1}, Player 2: ${player2}`);
      this.patchDOMMethods();
      this.initializeGame();
    } else {
      console.error("Invalid game mode!");
    }
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }

  disconnectedCallback() {
    this.performCleanup();
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
  }

  patchDOMMethods() {
    this.originalAppendChild = document.body.appendChild;
    this.originalRequestAnimationFrame = window.requestAnimationFrame;
    this.originalAddEventListener = window.addEventListener;

    document.body.appendChild = (element) => {
      if (element.tagName === 'CANVAS') {
        this.gameElements.push(element);
        return this.appendChild(element);
      }
      return this.originalAppendChild.call(document.body, element);
    };

    window.requestAnimationFrame = (callback) => {
      const id = this.originalRequestAnimationFrame.call(window, callback);
      this.cleanupHandlers.push(() => cancelAnimationFrame(id));
      return id;
    };

    window.addEventListener = (type, listener, options) => {
      this.originalAddEventListener.call(window, type, listener, options);
      this.cleanupHandlers.push(() => window.removeEventListener(type, listener));
    };
  }

  initializeGame() {
    this.cleanupGame();

    const script = document.createElement("script");
    script.type = "module";
    script.src = `assetss/main2-DmDVuMqs.js?t=${Date.now()}`;
    script.onload = () => this.registerGameCleanup();
    this.scripts.push(script);
    this.appendChild(script);
  }

  registerGameCleanup() {
    if (window.gameCleanup) {
      this.cleanupHandlers.push(window.gameCleanup);
      delete window.gameCleanup;
    }
  }

  performCleanup() {
    document.body.appendChild = this.originalAppendChild;
    window.requestAnimationFrame = this.originalRequestAnimationFrame;
    window.addEventListener = this.originalAddEventListener;

    this.cleanupHandlers.forEach(handler => handler());
    this.cleanupHandlers = [];

    this.cleanupGame();
  }

  cleanupGame() {
    console.log("Cleaning up game...");
    if (typeof window.B === "function") {
      window.B();
    }
    if (window.gameInstance && typeof window.gameInstance.stop === "function") {
      window.gameInstance.stop();
    }
    if (window.n) {
      window.n.dispose();
      window.n.forceContextLoss();
      delete window.n;
    }
    this.gameElements.forEach(element => {
      if (element.parentNode === this) {
        this.removeChild(element);
      }
    });
    this.gameElements = [];
    this.scripts.forEach(script => {
      if (script.parentNode === this) {
        this.removeChild(script);
      }
    });
    this.scripts = [];
    if (window.animationFrameId) {
      cancelAnimationFrame(window.animationFrameId);
      delete window.animationFrameId;
    }
    ['o', 'r', 't', 'l', 'h', 'Le', 'Pe', 'c', 'ze', 'M', 'H', 'Ce']
      .forEach(varName => delete window[varName]);

    console.log("Game cleanup complete.");
  }

  handleVisibilityChange() {
    if (document.hidden) {
      console.log("Page hidden, pausing game...");
      if (window.gameInstance && typeof window.gameInstance.pause === "function") {
        window.gameInstance.pause();
      }
    } else {
      console.log("Page visible, resuming game...");
      if (window.gameInstance && typeof window.gameInstance.resume === "function") {
        window.gameInstance.resume();
      }
    }
  }
}

customElements.define("secondsgame-page", GameSecondSPage);
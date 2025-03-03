import { changeLanguage } from "./language.js";
import { checkAuth } from "./login.js";
import Router from "../router.js";

export class GameTPage extends HTMLElement {
  constructor() {
    super();
    this.mediaStreams = [];
    this.videoElements = [];
    this.mediaPipeInstances = [];
    this.domObserver = null;
    this.cleanupHandlers = [];
    this.gameElements = [];
    this.scripts = [];
    this.originalAppendChild = null;
    this.originalRequestAnimationFrame = null;
    this.originalAddEventListener = null;
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const template = document.getElementById("GameT-template");
    const content = template.content.cloneNode(true);
    this.shadow.appendChild(content);

    checkAuth().then(isAuthenticated => {
      if (!isAuthenticated) Router.go("/login");
    });

    changeLanguage();
    this.patchDOMMethods();
    this.setupDOMObserver();
    this.initializeGame();
  }

  disconnectedCallback() {
    this.performCleanup();
  }
  setupDOMObserver() {
    this.domObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.tagName === 'VIDEO') {
            this.videoElements.push(node);
            if (node.srcObject) {
              this.mediaStreams.push(node.srcObject);
            }
          }
        });
      });
    });

    this.domObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  cleanupCamera() {
    this.mediaStreams.forEach(stream => {
      stream.getTracks().forEach(track => track.stop());
    });
    this.mediaStreams = [];
    this.videoElements.forEach(video => {
      video.remove();
      if (video.srcObject) {
        video.srcObject = null;
      }
    });
    this.videoElements = [];
    this.mediaPipeInstances.forEach(instance => {
      if (typeof instance.close === 'function') {
        instance.close();
      }
    });
    this.mediaPipeInstances = [];
    if (window.I) {
      window.I.close();
      delete window.I;
    }
  }

  patchDOMMethods() {
    this.originalAppendChild = document.body.appendChild;
    this.originalRequestAnimationFrame = window.requestAnimationFrame;
    this.originalAddEventListener = window.addEventListener;

    document.body.appendChild = (element) => {
      if (element.tagName === 'CANVAS') {
        this.gameElements.push(element);
        return this.shadow.appendChild(element);
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
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get("mode");
    this.loadGameScript(mode);
  }

  loadGameScript(mode) {
    const script = document.createElement("script");
    script.type = "module";
    const modeScripts = {
      "1v1": `assets/main2-D-SZMfQZ.js?t=${Date.now()}`,
      "ai": `assets/main3-BynYdGw5.js?t=${Date.now()}`,
      "star": `assets/main5-C2aZN2I8.js?t=${Date.now()}`,
      "multi": `assets/main4-B4NYihd7.js?t=${Date.now()}`
    };
    script.src = modeScripts[mode] || console.error("Invalid game mode!");
    script.onload = () => this.registerGameCleanup();
    this.scripts.push(script);
    this.shadow.appendChild(script);
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

    this.cleanupCamera();

    if (this.domObserver) {
      this.domObserver.disconnect();
    }

    this.cleanupHandlers.forEach(handler => handler());
    this.cleanupHandlers = [];

    this.cleanupWebGLResources();

    this.gameElements.forEach(element => element.remove());
    this.gameElements = [];

    this.scripts.forEach(script => script.remove());
    this.scripts = [];

    if (window.gc) window.gc();
  }

  cleanupWebGLResources() {
    ['n', 't', 'r', 'o', 'scene', 'camera', 'renderer'].forEach(prop => {
      if (window[prop]) {
        if (window[prop].dispose) window[prop].dispose();
        if (window[prop].forceContextLoss) window[prop].forceContextLoss();
        delete window[prop];
      }
    });

    if (window.cleanupGameResources) {
      window.cleanupGameResources();
      delete window.cleanupGameResources;
    }
  }
}

customElements.define("gamet-page", GameTPage);
const Router = {
    init: () => {
        window.addEventListener("popstate", (event) => {
            Router.go(event.state?.route || location.pathname, false);
        });
        document.addEventListener("mylink", () => {
            Router.go(location.pathname, false);
        });

        Router.go(location.pathname + location.search);
    },
    go: (route, addToHistory = true) => {
        const [path, query] = route.split("?");
        const queryParams = new URLSearchParams(query);
      
        if (addToHistory && location.pathname !== path) {
          if (window.history.length > 1) {
            window.history.pushState({ route: path }, null, route);
          } else {
            window.history.replaceState({ route: path }, null, route);
          }
        }
        let pageElement = null;
        switch (path) {
          case "/":
            pageElement = document.createElement("home-page");
            break;
          case "/signup":
            pageElement = document.createElement("signup-page");
            break;
          case "/login":
            pageElement = document.createElement("login-page");
            break;
          case "/home":
            pageElement = document.createElement("home-page");
            break;
          case "/profile":
            pageElement = document.createElement("profile-page");
            break;
          case "/setting":
            pageElement = document.createElement("setting-page");
            break;
          case "/game":
            pageElement = document.createElement("game-page");
            break;
          case "/gameT":
            pageElement = document.createElement("gamet-page");
            break;
          case "/twofa":
            pageElement = document.createElement("twofa-page");
            break;
          case "/secondgame":
            pageElement = document.createElement("secondgame-page");
            break;
          case "/gameS":
            pageElement = document.createElement("secondsgame-page");
            break;
          default:
            pageElement = document.createElement("not-found-page");
        }
        const cache = document.querySelector("main");
        if (cache) {
          cache.innerHTML = "";
          if (pageElement) {
            cache.appendChild(pageElement);
                  if (pageElement.handleQueryParams) {
              pageElement.handleQueryParams(queryParams);
            }
          }
        }
      }
};

Router.init();

export default Router;
export class PageNotFound extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.getElementById("notFound-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
}
customElements.define("notFound-page", PageNotFound);
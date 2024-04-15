import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["actionMenu", "dots"];

  connect() {
    console.log("Hello from dropdown_controller.js");
  }

  toggle(event) {
    event.preventDefault();
    if (!this.dotsTarget.classList.contains("open")) {
      this.show();
    } else {
      this.hide(null);
    }
  }

  show() {
    this.dotsTarget.classList.add("open");
    this.actionMenuTarget.classList.remove("opacity-0");
    this.actionMenuTarget.classList.remove("invisible");
  }

  hide(event) {
    if (
      event &&
      (this.actionMenuTarget.contains(event.target) ||
        this.dotsTarget.contains(event.target))
    ) {
      return;
    }
    this.dotsTarget.classList.remove("open");
    this.actionMenuTarget.classList.add("opacity-0");
    this.actionMenuTarget.classList.add("invisible");
  }
}

export class Menu {

  drawer;

  constructor() {
    this.drawer = document.getElementById('drawer');

    if (debug) {
      console.log("menu init", this.drawer)
    }
  }

  toggle = () => {
    if (this.drawer === null || this.drawer === undefined) {
      return
    }
    this.drawer.classList.toggle('drawer-open');
  }
}

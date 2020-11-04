export class Menu {

    drawer;

    constructor() {
        this.drawer = document.getElementById('drawer');
    }

    toggle = () => {
        this.drawer.classList.toggle('drawer-open');
    }
}
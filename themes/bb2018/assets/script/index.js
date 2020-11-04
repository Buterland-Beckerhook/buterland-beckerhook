'use strict'

import {Menu} from './menu'
import {unveilMail} from "./utils";

window.menu = new Menu();

document.body.onload = () => {

    let links = document.getElementsByClassName('maillink');
    for (let l of links) {
        let ma = unveilMail(l.getAttribute('data-src'));
        l.href = 'mailto:' + ma;
        l.innerText = ma;
        l.classList.remove('uk-hidden');
    }

}

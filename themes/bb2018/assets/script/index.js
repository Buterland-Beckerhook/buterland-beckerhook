'use strict'

import * as params from '@params'
import {unveilMail} from "./utils";

window.debug = params.debug;

window.onload = function () {
  if (debug) {
    console.info("Buterland-Beckerhook beta build")
  }
  let links = document.getElementsByClassName('maillink');
  for (let l of links) {
    let ma = unveilMail(l.getAttribute('data-src'));
    l.href = 'mailto:' + ma;
    l.innerText = ma;
    l.classList.remove('uk-hidden');
  }
};

'use strict'

let drawer = document.getElementById('drawer');

function init() {
  document.body.onload = function () {
    let links = document.getElementsByClassName("maillink");
    for (let l of links) {
      let ma = unveilMail(l.getAttribute('data-src'));
      l.href = 'mailto:' + ma;
      l.innerText = ma;
      l.classList.remove('uk-hidden');
    }

    if (window.loadCalender !== undefined) {
    	window.loadCalender();
	}
  }
}

function toggleMenu() {
	drawer.classList.toggle('drawer-open');
}

function unveilMail(rec) {
	const c = 'HnB7@E3k1YABF8-E1sL1YbaaL.81';
	const k = 'j2JIAOE6PsGkh1q7r9WB3MRzvoTn4dSUD0NXCHlLBfgcYtwe5mZxiauFQ8VyKp';
	let s = c.length;
	let l = '';
	for (let i = 0; i < c.length; i++) {
		if (k.indexOf(c.charAt(i)) === -1) {
			let ltr = c.charAt(i);
			l += (ltr)
		} else {
			let ltr = (k.indexOf(c.charAt(i)) - s + k.length) % k.length;
			l += (k.charAt(ltr));
		}
	}
	l = l.replace(l.substr(0,4), atob(rec))
  return l
}

init();

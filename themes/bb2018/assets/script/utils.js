export function unveilMail(rec) {
    const c = 'HnB7@E3k1YABF8-E1sL1YhaaL.81';
    const k = 'j2JIAOE6PsGkh1q7r9WB3MRzvoTn4dSUD0NXCHlLBfgcYtwe5mZxiauFQ8VyKp';
    let s = c.length;
    let l = '';
    for (let i = 0; i < c.length; i++) {
				if (c.charAt(i) === 'h') {
				    l += c.charAt(i)
				}		
				else if (k.indexOf(c.charAt(i)) === -1) {
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


'use strict';
const url = 'https://api.emailjs.com/api/v1.0/email/send';
let ui_alert = document.getElementById('captcha-alert');
let ui_alert_title = document.getElementById('alert-title');
let ui_alert_text = document.getElementById('alert-text');
let send = document.getElementById('f-send');
let spinner = document.getElementById('f-spinner');
let name = document.getElementById('c_name');
let email = document.getElementById('c_email');
let phone = document.getElementById('c_phone');
let message = document.getElementById('c_message');
let data = {
	service_id: 'mailcow_bb',
	template_id: 'bb_contact_form',
	user_id: 'user_kE7Jv1VRmENZb4wCxu718',
	template_params: {
		'g-recaptcha-response': '',
		'name': '',
		'email': '',
		'phone': '',
		'message': ''
	}
};
let captchaParams = {
	sitekey: '6Lff3H4UAAAAAHGTH5cuOvDyLyI3awAt6DIycN0O',
	theme: 'light'
};
let sending = false;

function loadScript() {
	let script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
	script.async = true;
	document.getElementsByTagName('head')[0].appendChild(script);
}

function initForm() {
	grecaptcha.render('captcha', captchaParams);
	send.removeAttribute('disabled');
}

function resetForm() {
	send.removeAttribute('disabled');
	spinner.classList.add('uk-hidden');
	name.value = '';
	email.value = '';
	phone.value = '';
	message.value = '';

	grecaptcha.reset();
	sending = false;
}

function sendForm() {
	if (sending) return;
	sending = true;
	let r = grecaptcha.getResponse();
	if (r === undefined || r === '') {
		ui_alert_title.innerText = 'CAPTCHA nicht gelöst?';
		ui_alert_text.innerText = 'Sie müssen vor dem Senden das Captcha lösen.'
		UIkit.modal(ui_alert).show();
		sending = false;
		return;
	}

	if (message.value === '') {
		ui_alert_title.innerText = 'Keine Nachricht?';
		ui_alert_text.innerText = 'Sie müssen uns zumindest eine Nachricht hinterlassen.'
		UIkit.modal(ui_alert).show();
		sending = false;
		return;
	}

	if (name.value === '') {
		name.value = 'Anonym';
	}

	send.setAttribute('disabled', null);
	spinner.classList.remove('uk-hidden');

	data.template_params["g-recaptcha-response"] = r;
	data.template_params.name = name.value;
	data.template_params.email = email.value;
	data.template_params.phone = phone.value;
	data.template_params.message = message.value;

	let req = new XMLHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState === 4) {
			if (req.status === 200) {
				resetForm();
				console.log(req.responseText);
			} else {
				ui_alert_title.innerText = 'Fehler beim Senden!';
				ui_alert_text.innerText = 'Beim Übermitteln Ihrer Nachricht ist leider ein Fehler aufgetreten.'
				UIkit.modal(ui_alert).show();
				resetForm();
				console.error("request failed", req.readyState, req.status, req.statusText, req.responseText);
			}
		}
	};
	req.open('POST', url, true);
	req.setRequestHeader('Content-Type', 'application/json')
	req.send(JSON.stringify(data))
}

var onloadCallback = function () {
	initForm();
};

loadScript();

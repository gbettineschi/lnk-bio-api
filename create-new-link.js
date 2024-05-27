const getToken = require('./get-token');

async function createNewLink(token, title, link) {
	var myHeaders = new Headers();
	myHeaders.append('User-Agent', 'Apidog/1.0.0 (https://apidog.com)');
	myHeaders.append('Authorization', `Bearer ${token}`);

	var urlencoded = new URLSearchParams();
	urlencoded.append('title', title);
	urlencoded.append('link', link);

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: urlencoded,
		redirect: 'follow',
	};

	fetch('https://lnk.bio/oauth/v1/lnk/add', requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));
}

getToken().then((token) =>
	createNewLink(token, 'prova1', 'https://www.google.com')
);

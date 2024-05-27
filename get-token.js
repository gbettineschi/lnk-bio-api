require('dotenv').config();

const client_id = process.env.LNK_BIO_CLIENT_ID;
const client_secret = process.env.LNK_BIO_CLIENT_SECRET;

const url = 'https://lnk.bio/oauth/token';

async function getToken() {
	const token = fetch(url, {
		method: 'POST',
		headers: {
			Authorization: 'Basic ' + btoa(`${client_id}:${client_secret}`),
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: 'grant_type=client_credentials',
	})
		.then((response) => response.json())
		.then((data) => data.access_token)
		.catch((error) => console.error('Error:', error));

	return token;
}

module.exports = getToken;

// script.js
const form = document.getElementById('info-form');
const marketplaceList = document.getElementById('marketplace-list');

form.addEventListener('submit', (e) => {
e.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const info = document.getElementById('info').value;

fetch('/api/marketplace', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ name, email, info })
})
.then(response => response.json())
.then(data => {
const infoHtml = `
<li>
<p>Name: ${data.name}</p>
<p>Email: ${data.email}</p>
<p>Info: ${data.info}</p>
</li>
`;
marketplaceList.innerHTML += infoHtml;
})
.catch(error => console.error(error));
});

fetch('/api/marketplace')
.then(response => response.json())
.then(data => {
data.forEach((info) => {
const infoHtml = `
<li>
<p>Name: ${info.name}</p>
<p>Email: ${info.email}</p>
<p>Info: ${info.info}</p>
</li>
`;
marketplaceList.innerHTML += infoHtml;
});
})
.catch(error => console.error(error));

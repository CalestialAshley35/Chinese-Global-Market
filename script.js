// script.js
const form = document.getElementById('info-form');
const marketplaceDiv = document.getElementById('marketplace');

form.addEventListener('submit', (e) => {
e.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const info = document.getElementById('info').value;

// Here, we'll make an API call to insert the info into the database, bro! 📊
fetch('/api/marketplace', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ name, email, info })
})
.then(response => response.json())
.then(data => {
// Display the info in the marketplace, bro! 👊
const marketplaceHtml = '';
marketplaceHtml += `<p>Name: ${data.name}</p>`;
marketplaceHtml += `<p>Email: ${data.email}</p>`;
marketplaceHtml += `<p>Info: ${data.info}</p>`;
marketplaceDiv.innerHTML = marketplaceHtml;
})
.catch(error => console.error(error));
});

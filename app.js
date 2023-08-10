fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    const appDiv = document.getElementById('app');
    posts.forEach(post => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `
            <img src="https://placehold.co/200x200" class="img">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <h4>${post.id}</h4>
            <button class="btn" onclick="openDetails(this)">Daha Fazla...</button>
        `;
        appDiv.appendChild(cardDiv);
    });
})
.catch(error => console.error(error));

function openDetails(button) {
    const card = button.parentElement;
    const title = card.querySelector('h3').textContent;
    const body = card.querySelector('p').textContent;
    const postId = card.querySelector('h4').textContent;
    const postData = { postId, title, body };
    const queryParams = new URLSearchParams(postData).toString();
    window.open(`details.html?${queryParams}`, '_blank');

  }
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
            <span>${post.id}</span>
            <button class="btn" onclick="openDetails(this)">Daha Fazla...</button>
        `;
        appDiv.appendChild(cardDiv);
    });
})
.catch(error => console.error(error));

function openDetails(button) {
    const card = button.parentElement;
    const id = card.querySelector("span").textContent;
    window.open(`details.html?id=${id}`, "_blank");
  }

  
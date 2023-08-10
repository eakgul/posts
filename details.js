function getPostDetails() {
    const params = new URLSearchParams(document.location.search);
    const postDetails = {};

    for (const [key, value] of params) {
        postDetails[key] = value;
    }
    return postDetails;
}

window.onload = function () {

    const postDetails = getPostDetails();

    document.getElementById('postTitle').innerText = postDetails.title || 'No Title';
    document.getElementById('postBody').innerText = postDetails.body || 'No Body';

    const postId = postDetails.postId || 'No ID';
    document.getElementById('postid').innerText = postId;

    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(comments => {

        const filteredComments = comments.filter(item => item.postId === parseInt(postId));
        const commentDiv = document.getElementById('comment');
        
        filteredComments.forEach(comment => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('cardComment');
            cardDiv.innerHTML = `
                <img src="https://elouwerse.nl/placecircle/200" class="img">
                <h3>${comment.name}</h3>
                <p>${comment.body}</p>
                <span>${comment.id}</span>
                <p id="postEmail">${comment.email}</p>
            `;
            commentDiv.appendChild(cardDiv);
        });
    })
    .catch(err => console.log(err));
}
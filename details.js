const getPostDetails = () => {
    const params = new URLSearchParams(document.location.search);
    const postDetails = {};
    
    for (const [key, value] of params) {
            postDetails[key] = value;
        }
    return postDetails;
    
    };
    
    const fetchPostData = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
                document.getElementById('postTitle').innerText = post.title || 'No Title';
                document.getElementById('postBody').innerText = post.body || 'No Body';
            })
            .catch(err => console.log(err));
    };
    
    window.onload = () => {
        const postDetails = getPostDetails();
        const postId = postDetails.id || 'No ID';
    
        document.getElementById('postid').innerText = postId;
    
        fetchPostData(postId);
    
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
    };
    
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postContent = document.getElementById("posts")

const renderPost = () => {
    let rendering = ""
    const postsArray = [...posts]
    for (let i = 0; i < postsArray.length; i++) {
        rendering += `<article class="post-content">
                <div class="user-info">
                    <img src="${postsArray[i].avatar}" id="avatar" class="avatar">
                    <div class="user-tags">
                        <p id="name" class="name">${postsArray[i].name}</p>
                        <p id="location" class="location">${postsArray[i].location}</p>
                    </div>
                </div>
                <img src="${postsArray[i].post}" id="post" class="post">
                <div class="body">
                    <div class="icons">
                        <img src="images/icon-heart.png" id="heart-icon" class="heart-icon">
                        <img src="images/icon-comment.png" id="comment-icon" class="comment-icon">
                        <img src="images/icon-dm.png" id="dm-icon" class="dm-icon">              
                    </div>
                   <p id="likes" class="likes">${postsArray[i].likes} likes</p>                
                    <div class="comments">
                        <p class="comment"><span class="username">${postsArray[i].username}</span> 
                        ${postsArray[i].comment}</p>
                    </div>
                </div>  
            </article>`
    }
    
    postContent.innerHTML = rendering
}

renderPost()


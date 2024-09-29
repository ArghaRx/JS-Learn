function getUser(userId, callback) {
    setTimeout(() => {
        console.log(`User retrieved: ${userId}`);
    //     callback(userId); // Pass the userId to the next callback
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log(`Posts retrieved for user: ${userId}`);
        // callback([1, 2, 3]); // Pass an array of post IDs to the next callback
    }, 1000);
}

function getComments(postId, callback) {
    setTimeout(() => {
        console.log(`Comments retrieved for post: ${postId}`);
        // callback(['Comment 1', 'Comment 2']); // Pass comments to the next callback
    }, 1000);
}

// Callback hell
getUser(1, (userId) => {
    getPosts(userId, (postIds) => {
        getComments(postIds[0], (comments) => {
            console.log(`Comments for post 1: ${comments.join(', ')}`);
        });
    });
});

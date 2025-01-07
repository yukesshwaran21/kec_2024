async function likeCode() {
    return new Promise((like)=>{
        like("Liked the post Successfully.")
    })
}
async function commentCode() {
    return new Promise((commentPosted)=>{
        commentPosted("Comment posted Successfully in the post.")
    })
}
async function createPost(){
    var post = new Promise((cPost)=>{
        cPost("Post Created Successfully")
    })
    var [posts,comment,like] = await Promise.all([post,commentCode(),likeCode()])
    console.log(posts);
    console.log(comment);
    console.log(like);
}
createPost()
var posts=["2025/02/06/hello-world/","2025/02/06/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["2025/02/06/test/","2025/01/20/我的第一篇博客/","2025/02/06/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
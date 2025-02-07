var posts=["2025/02/07/Hexo：基础用法/","2024/09/21/我的第一篇博客/","2025/01/20/hello-world/","2025/02/06/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
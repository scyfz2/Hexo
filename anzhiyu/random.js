var posts=["2025/02/07/Hexo：基础用法/","2025/02/10/为什么打嗝？/","2025/02/06/海子的《面朝大海，春暖花开》/","2025/02/11/挑战/","2024/09/21/我的第一篇博客/","2025/01/20/Markdown：样式列表/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
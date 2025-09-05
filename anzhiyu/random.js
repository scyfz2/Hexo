var posts=["2025/02/07/Hexo：基础用法/","2025/01/20/Markdown：样式列表/","2025/02/11/挑战/","2025/03/06/21-分钟-MySQL-基础入门/","2025/02/06/海子的《面朝大海，春暖花开》/","2025/02/11/为什么打嗝？/","2024/09/22/我的第一篇博客/","2025/09/05/海子：春天，十个海子/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
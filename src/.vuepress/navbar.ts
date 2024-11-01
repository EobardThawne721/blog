import { navbar } from "vuepress-theme-hope";

// 导航栏配置相关
export default navbar([
  "/",    //博客主页
  "/demo/", //主要功能与配置演示

  //前端笔记相关
  {
    text: "前端笔记",      //导航栏显示文本
    icon: "book",          //导航栏图标
    prefix: "/fronted/",   //导航栏路径前缀
    children: [            //导航栏子项
      { text: "HTML5", icon: "pen-to-square", link: "html" },   //导航栏子项1:文本显示为HTML5, link表示指向哪个文件(即md的文件名)
      { text: "CSS3", icon: "pen-to-square", link: "css" },
    ]
  },

  //服务器相关配置
  {
    text: "Linux相关",
    icon: "book",
    prefix: "/linux/",
    children: [
      { text: "Linux", link: "Linux" },
      { text: "Docker", link: "Docker容器化技术" },
      { text: "Minio文件存储", link: "Minio文件系统" },
    ]
  },


  // {
  //   text: "博文",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "pen-to-square", link: "1" },
  //         { text: "苹果2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "pen-to-square", link: "cherry" },
  //     { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },

  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);

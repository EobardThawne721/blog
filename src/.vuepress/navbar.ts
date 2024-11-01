import { navbar } from "vuepress-theme-hope";

// 导航栏配置相关
export default navbar([
  "/",            //博客主页
  "/demo/",       //主要功能与配置演示

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

  //服务器笔记相关
  {
    text: "Linux相关",
    icon: "book",
    prefix: "/linux/",
    children: [
      { text: "Linux", icon: "pen-to-square", link: "Linux" },
      { text: "Docker", icon: "pen-to-square", link: "Docker容器化技术" },
      { text: "Minio文件存储", icon: "pen-to-square", link: "Minio文件系统" },
    ]
  },

  //人工智能笔记相关
  {
    text: "AI人工智能",
    icon: "book",
    prefix: "/ai/",
    children: [
      { text: "Python基础", icon: "pen-to-square", link: "Python基础" },
      {
        text: "神经网络", prefix: "NeuralNetwork/", children: [
          { text: "CNN卷积神经网络", icon: "pen-to-square", link: "CNN卷积神经网络" },
        ]
      },
      {
        text: "生成模型", prefix: "Generative/", children: [
          { text: "Flow流模型", icon: "pen-to-square", link: "Flow" },
        ]
      },
      {
        text: "AI配置相关", prefix: "other/", children: [
          { text: "espeak配置", icon: "pen-to-square", link: "espeak 环境配置" },
          { text: "MAS（vits中的对齐工具）", icon: "pen-to-square", link: "MAS对齐" },
        ]
      }
    ]
  },


  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);

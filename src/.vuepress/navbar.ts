import { navbar } from "vuepress-theme-hope";

/**
 * 全局导航栏配置相关
 */

export default navbar([
  "/",            //博客主页
  // "/demo/",       //主要功能与配置演示
  {
    text: "个人笔记",
    icon: "book",
    link: "/fronted/",
    activeMatch: "^/fronted/", // 高亮逻辑，可根据路径匹配
  },
  {
    text: "关于我",
    icon: "user-tie",
    link: "intro.md"
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);

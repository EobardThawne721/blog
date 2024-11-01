import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  // 对应github的仓库名,因为github映射出来的地址会加上仓库名
  base: "/blog/",

  // 全局Frontmatter,可以在页面的md文件上覆盖,如果页面的md文件没有写上这些信息,则会默认使用全局的。 详情：https://vuepress.vuejs.org/zh/reference/frontmatter.html
  lang: "zh-CN",
  title: "九龙坡郭富城的博客",
  description: "我的个人博客",
  tagline: "Talk is cheap. Show me the code. ———— Linus Torvalds",
  theme,



  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

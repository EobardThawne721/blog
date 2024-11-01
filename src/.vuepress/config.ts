import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  // 对应github的仓库名,因为github映射出来的地址会加上仓库名
  base: "/blog/",

  lang: "zh-CN",
  title: "九龙坡郭富城的博客",
  description: "我的个人博客",

  theme,



  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

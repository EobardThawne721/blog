import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

/**
 *  全局页面的主题相关配置文件,可以通过在md文件的FrontMatter来覆盖全局配置
 *  参考文档：https://theme-hope.vuejs.press/zh/guide/
 */

export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    // 作者信息
    name: "Eobard Thawne",
    // 点击我的名称跳转的方向
    url: "https://gitee.com/eobard721",
  },

  iconAssets: "fontawesome-with-brands",

  // logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  logo: null,   //Logo 图片将会显示在导航栏的左端,设置为 null 可以禁用 Logo 

  repo: "https://github.com/EobardThawne721/blog", //项目仓库的 URL
  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏:设置false可以禁用侧边栏,也可以手动设置全局的侧边栏页面显示,配置同navbar.ts
  // sidebar,
  // sidebar:[
  //   {
  //     text: 'Foo',
  //     prefix: '/demo/',
  //      collapsible:true,   如果有children子项,设置为可折叠的
  //     link: 'page'
  //   },
  // ],

  siderbar:{
    "/ai/":"structure",
    "/linux/":"structure",
  },


  // sidebarDepth:1,   //设置根据页面标题自动生成的侧边栏的最大深度 0 来禁用所有级别的页面标题。1 来包含 <h2> 标题。2 来包含 <h2> 和 <h3> 标题。

  editLink: false,  //设置是否启用 在Github上编辑此页 链接

  // 页脚
  footer: "默认页脚",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "AI硕士在读、后端开发者、前端菜鸟、爱喝可乐...",
    intro: "/intro.html",
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "2209473452@qq.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      Gitee: "https://gitee.com/eobard721",
      GitHub: "https://github.com/EobardThawne721",
      // Gitlab: "https://example.com",
      Gmail: "gxp2209473452@gmail.com",
      Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      QQ: "2209473452",
      Qzone: "https://user.qzone.qq.com/2209473452/infocenter",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press",
      // },
    },
  },

  // 加密配置
  encrypt: {
    config: {
    // 对这个路径下的encrypt.md文档加密
      "/demo/encrypt.html": ["1234"],
      // 对/fronted/这个路径下的所有都加密，密码为1234或5678
      "/fronted/": ["1234", "5678"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      // https://theme-hope.vuejs.press/zh/guide/component/built-in.html#badge 内置组件相关
      // https://plugin-components.vuejs.press/zh/guide/code/code-pen.html#user 组件使用方法
      components: [
      "ArtPlayer",
      "Badge",
      "BiliBili",
      "CodePen",
      "PDF",
      "Share",
      "SiteInfo",
      "StackBlitz",
      "VPBanner",
      "VPCard",
      "VidStack",
      "XiGua",],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },

    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 此功能被开启用于演示，你应仅当使用时保留。
    markdownTab: true,

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },
});

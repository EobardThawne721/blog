---
prev: false
next: false
editLink: false
home: true
title: 功能项目主页
cover: /assets/images/cover3.jpg
icon: circle-info
heroImage: https://theme-hope-assets.vuejs.press/logo.svg
heroText: VuePress Theme Hope
tagline: 一个具有强大功能的 vuepress 主题✨
actions:
  - text: 快速上手
    link: /zh/get-started/
    icon: signs-post
    type: primary

  - text: 指南
    icon: lightbulb
    link: /zh/guide/

  - text: 案例
    icon: star
    link: /zh/demo/
features:
  - title: Markdown 增强
    icon: b:markdown
    details: 新增文字对齐、上下角标、脚注、标记、任务列表、数学公式、流程图、图表与幻灯片支持
    link: /zh/guide/markdown/

  - title: 幻灯片页面
    icon: person-chalkboard
    details: 添加幻灯片页面以显示你喜欢的内容
    link: /zh/guide/layout/slides

  - title: 布局增强
    icon: object-group
    details: 添加路径导航、页脚、改进的导航栏、改进的页面导航等。
    link: /zh/guide/layout/

  - title: 浏览量与评论
    icon: comment-dots
    details: 配合 Waline 来开启阅读量统计与评论支持
    link: /zh/guide/feature/comment.html

  - title: 文章信息
    icon: circle-info
    details: 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
    link: /zh/guide/feature/page-info.html

  - title: 博客支持
    icon: blog
    details: 使用一些很棒的布局提供博客功能，通过文章的日期、标签和分类，自动生成文章、分类、标签与时间轴列表
    link: /zh/guide/blog/intro.html

  - title: 主题色切换
    icon: palette
    details: 支持自定义主题色并允许用户在预设的主题颜色之间切换
    link: /zh/guide/interface/theme-color.html

  - title: 深色模式
    icon: circle-half-stroke
    details: 可以自由切换浅色模式与深色模式
    link: /zh/guide/interface/darkmode.html

  - title: 文章加密
    icon: lock
    details: 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
    link: /zh/guide/feature/encrypt.html

  - title: 搜索支持
    icon: search
    details: 支持 docsearch 和基于客户端的搜索
    link: /zh/guide/feature/search.html

  - title: 图片预览
    icon: image
    details: 像相册一样允许你浏览、缩放并分享你的页面图片
    link: /zh/guide/feature/photo-swipe.html

  - title: SEO 增强
    icon: dumbbell
    details: 将最终生成的网页针对搜索引擎进行优化。
    link: /zh/guide/advanced/seo.html

  - title: Sitemap
    icon: sitemap
    details: 自动为你的网站生成 Sitemap
    link: /zh/guide/advanced/sitemap.html

  - title: Feed 支持
    icon: rss
    details: 生成你的 Feed，并通知你的用户订阅它
    link: /zh/guide/advanced/feed.html

  - title: PWA 支持
    icon: mobile-screen
    details: 让你的网站更像一个 APP
    link: /zh/guide/advanced/pwa.html

  - title: 更多新特性
    icon: ellipsis
    details: 包括图标支持、全屏按钮、返回顶部按钮等
    link: /zh/guide/feature/

copyright: false
footer: MIT Licensed | Copyright © 2019-present Mr.Hope
---


<MyComponent />

## 🛠 安装

在当前目录下的 `<dir>` 文件夹内创建 vuepress-theme-hope 项目:

::: code-tabs#shell

@tab pnpm

```bash
pnpm create vuepress-theme-hope <dir>
```

@tab npm

```bash
npm init vuepress-theme-hope@latest <dir>
```

:::

要将 vuepress-theme-hope 作为文档构建器添加到现有项目中，请在项目根目录中运行以下命令:

::: code-tabs#shell

@tab pnpm

```bash
pnpm create vuepress-theme-hope add <dir>
```

@tab npm

```bash
npm init vuepress-theme-hope@latest add <dir>
```

:::

## 🚀 使用

```ts twoslash title=".vuepress/config.ts"
import { hopeTheme } from "vuepress-theme-hope";

export default {
  // 站点选项
  // ...

  theme: hopeTheme({
    // 主题选项
    // ...
  }),
};
```

## 官方 QQ 群

- [点击加入](https://jq.qq.com/?_wv=1027&k=rATJyxGK) (群号: 1003437555)



主页设置：https://theme-hope.vuejs.press/zh/guide/layout/home.html#%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B

<!-- markdownlint-disable -->

# 介绍页

将你的个人介绍和档案放置在此处。

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::
::: danger STOP
危险区域，禁止通行
:::

::: info
这是一个信息
:::

::: important
这是一个重要信息
:::

::: note
这是一个备注
:::

::: details
这是一个 details 标签
:::

- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />
- VuePress - <Badge type="important" text="v2" vertical="middle" />
- VuePress - <Badge type="info" text="v2" vertical="middle" />
- VuePress - <Badge type="note" text="v2" vertical="middle" />


<!-- name站点名称，preview为站点预览图，必须为绝对路径或完整 URL ，desc站点描述，logo站点图标，repo站点源代码仓库-->
<SiteInfo
  name="Mr.Hope's Blog"
  desc="Where there is light, there is hope"
  url="https://mister-hope.com"
  logo="https://mister-hope.com/logo.svg"
  repo="https://github.com/Mister-Hope/Mister-Hope.github.io"
  preview="https://theme-hope.vuejs.press/assets/image/mrhope.jpg"
/>

一个大绿分享图标: <FontIcon icon="share" color="#3eaf7c" size="32" />
- <Share />
- <Share services="twitter,weibo" />
- <Share :services="['qq','weibo']" />
- <Share colorful />



# PDF
使用技巧：https://plugin-components.vuejs.press/zh/guide/media/p-d-f.html#url
<!-- <PDF url="//theme-hope-assets.vuejs.press/files/sample.pdf" width="100%" height="1600px"  noToolbar="false" />
 -->



<VPCard
  title="Mr.Hope"
  desc="Where there is light, there is hope"
  logo="https://mister-hope.com/logo.svg"
  link="https://mister-hope.com"
  background="rgba(253, 230, 138, 0.15)"
/>

# 代码选项卡
::: code-tabs

@tab JavaScript

```js
const name = 'VuePress'
console.log(`你好，${name}！`)
```

@tab TypeScript

```ts
const name: string = 'VuePress'

console.log(`你好，${name}！`)
```

:::

# 选项卡

::: tabs
@tab 选项卡 1

这是选项卡 1 的内容。

```js
console.log('你好，VuePress!')
```

@tab 选项卡 2

这是选项卡 2 的内容。

- 列表项 1
- 列表项 2
- 列表项 3

:::


# 这里会被 Vue 编译
1 + 2 + 3 =  {{ 1 + 2 + 3 }}
这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />


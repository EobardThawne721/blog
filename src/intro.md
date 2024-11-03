---
icon: circle-info
cover: /assets/images/cover3.jpg

prev: false
next: false
editLink: false
---

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
<PDF url="//theme-hope-assets.vuejs.press/files/sample.pdf" width="100%" height="1600px"  noToolbar="false" />




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
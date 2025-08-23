# blog
Eobard Thawne的博客


<!-- 
    项目运行：npm run docs:dev
// https://www.imgurl.org/ 免费的图片链接地址，上传自己的图片就可以生成地址
    Markdown笔记书写格式注意
        1.
            如果md中有图片上传的话，如果不把图片前面的![image-xxx]替换掉,会在页面显示出来，不美观，
            可以在vscode中批量全部替换使用ctrl+f 将 !\[image-[0-9]+\]  全部替换成 ![]
            
  // "scripts": {
  //   "docs:build": "vuepress-webpack build src",
  //   "docs:clean-dev": "vuepress-webpack dev src --clean-cache",
  //   "docs:dev": "vuepress-webpack  dev src",
  //   "docs:update-package": "npx vp-update"
  // },

        2.
             如果md中有<img 标签的话，需要手动加入相对路径,否则不能回显图片
             将src=" 替换成  src="./

        3. 

            ---
                title: xxx              如果不设置 title ，那么页面中第一个一级标题的内容会被当作标题使用。
                icon: pen-to-square     设置当前md的图标
                date: 2022-01-01        设置当前md的日期
                home: true              设定该页面是首页还是普通页面。
                bgImage:                设定背景图片
                heroImage: /images/hero.png 首页大标题图片上的logo 
                heroHeight: 280         首页图片 <img> 标签的 height 属性。
                heroText: xxx           首页的大标题,设置为 null 来禁用首页大标题
                tagline: xxx            首页的标语
                editLink: false         禁用在github上编辑此页链接
                sidebar: false          禁用左边的侧边栏

                category:               设置当前md的分类
                - 苹果
                tag:                    设置当前md的标签
                - 红
                - 大
                - 圆
                star: true              设置当前md被星标了
                star: 10                一个被数字 `10` 星标了的香蕉文章。
                sticky: true
                cover: /assets/images/cover2.jpg    设置当前md的封面

                prev: false
                next: false         禁用 上一篇/下一篇 链接
                
            ---

 -->
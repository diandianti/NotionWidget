# WebWidget

一个开源的web widget项目，来源于想在notion笔记中使用widget但是不想在第三方网站开vip的我（其实不止可以在notion中使用，支持嵌入网页的笔记软件都可以使用）。

# 使用方式

请查看这个链接来详细查看使用方式， 这这是我分享的一个notion页面，在这上面可能会更好的展示这个项目  https://dev.diandianti.ml/

# 使用的工具 & 资源来自哪里

- express
- nunjucks
- 大部分的页面都不是我自己设计的，都是网上东拼西凑的（前端的东西我是真不会），每个页面的来源后续我会补充上
- 图片资源与文字资源来源于网上的开放API

# 自己部署 OR 自定义Widget

支持自己部署项目，可以选择自己的主机或者vercel

## 自己的主机
- git clone https://github.com/diandianti/express.git
- cd express && npm install
- npm dev
- 以clock API为例 访问 https:your-domain/clock
** npm dev启动的服务器没有任何的debug和防护措施，所以你可能要自己重写dev-server.js **

## vercel
- fork这个项目
- vercel导入部署就可以了
- 以clock API为例 访问 https:your-domain/api/clock

## 添加自己想要的Widget
- 在views目录下面添加你的nunjucks模板（其实也可以直接放一个html文件，扩展名改了就行）
- 在routes目录下面添加一个新的js文件，内容如下
```javascript
var express = require('express');
var router = express.Router();

router.get("/new", async (req, res) => {
    try {
      res.render('new');
    } catch (error) {
      // console.error(error);
      return res.status(500).send("Server error");
    }
  });

module.exports = router;
```
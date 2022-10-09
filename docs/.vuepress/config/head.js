const baidutj = require("../common/baidutj.js");
const googletj = require("../common/googletj.js");

// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['script', { src: 'https://cdn.staticfile.org/twikoo/1.6.7/twikoo.all.min.js' }],
  [
    "link",
    {
      rel: "shortcut icon",
      href: "/logo/favicon.ico",
    },
  ], //favicons，资源放在public文件夹
  [
    "link",
    {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/font_3114978_qe0b39no76.css",
    },
  ], // 阿里在线矢量库
  ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }], // 解决 Chrome 网站统计不准确问题

  [
    "meta",
    {
      name: "keywords",
      content: "PC协会,重庆师范大学,技术,维修",
    },
  ],
  [
    "meta",
    {
      name: "google-site-verification",
      content: "",
    },
  ],
  ["meta", { name: "baidu-site-verification", content: "code-OBocxvg8ja" }],
  ["meta", { name: "theme-color", content: "#11a8cd" }], // 移动浏览器主题颜色

  // 百度统计 js
  ["script", {}, baidutj],
  [
    "script",
    {
      async: "async",
      src: "",
    },
  ],
];

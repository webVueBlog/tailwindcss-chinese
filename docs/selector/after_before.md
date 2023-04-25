> 点击勘误[issues](https://github.com/webVueBlog/tailwindcss-chinese/issues)，感谢大家的阅读

CSS 中的::before和::after伪元素允许您将内容插入页面而不需要在 HTML 中。虽然最终结果实际上并不存在于 DOM 中，但它在页面上的显示就好像它存在一样，并且本质上是这样的：

```js
div::before {
  content: "before";
}
div::after {
  content: "after";
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="after-before" src="https://codepen.io/webvueblog/embed/gOvWRbG?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/webvueblog/pen/gOvWRbG">
  after-before</a> by 我是哪吒（达达） (<a href="https://codepen.io/webvueblog">@webvueblog</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

请注意，内容仍然在它们所应用的元素内。命名感觉就像它们可能会出现在元素之前或之后，但实际上是在内部其他内容之前或之后。

## content的值：

- 字符串：`content: 'dada'`
- 图像：`content: url(/path/to/image.jpg);`
- 空：`content: '';`用于 clearfix 和插入图像作为背景图像
- 计数器：对样式列表 `content: counter(li);`


## 浏览器兼容：

每个支持双冒号 (`::`) CSS3 语法的浏览器也只支持 (`:`) 语法，但 Internet Explorer (IE) 8 只支持单冒号，所以目前建议只使用单冒号以获得最佳浏览器支持.

`::`是用于区分伪内容和伪选择器的较新格式。如果您不需要 IE 8 支持，请随意使用双冒号。

![1652926905(1)](https://user-images.githubusercontent.com/59645426/169189903-eccfb506-dfdc-4978-9564-e3ea1dfcb852.png)

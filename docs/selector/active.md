> 点击勘误[issues](https://github.com/webVueBlog/awesome-css/issues)，感谢大家的阅读

伪选择器在:active链接被激活（被点击或以其他方式激活）时更改链接的外观。它通常只出现一瞬间，并提供元素确实被点击的视觉反馈。它最常用于锚链接 ( `<a href="#"></a>`)。

例如，下面的 CSS 将使锚链接在活动状态下向下一个像素（给人一种被推入 3D 空间的印象）：

<iframe height="300" style="width: 100%;" scrolling="no" title=":active" src="https://codepen.io/webvueblog/embed/ZErKyBg?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/webvueblog/pen/ZErKyBg">
  :active</a> by 我是哪吒（达达） (<a href="https://codepen.io/webvueblog">@webvueblog</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

顺序执行：

```js
a:link { /* Essentially means a[href], or that the link actually goes somewhere */
  color: blue;
}
a:visited {
  color: purple;
}
a:hover {
  color: green;
}
a:active {
  color: red;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="a:" src="https://codepen.io/webvueblog/embed/GRQmEWy?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/webvueblog/pen/GRQmEWy">
  a:</a> by 我是哪吒（达达） (<a href="https://codepen.io/webvueblog">@webvueblog</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


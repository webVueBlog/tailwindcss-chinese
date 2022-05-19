实现水平垂直居中最便捷的方法

FFC/GFC 使 `margin: auto` 在垂直方向上居中元素。

`dispaly: flex`

在通过justify-content和align-self进行对齐之前，任何正的空闲空间都会分配给该维度中的自动页边距。

margin auto 的生效不仅是水平方向，垂直方向也会自动去分配这个剩余空间。

html:

```js
<div class="container">
    <div class="box"></div>
</div>
```

css:

```js
/* 第一种：display: flex;  margin: auto; */
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.box {
  width: 30vmin;
  height: 30vmin;
  background: green;
  margin: auto;
}

/* 第二种 display: flex; */
/* .container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.box {
  width: 30vmin;
  height: 30vmin;
  background: green;
  align-self: center;
} */
```

<iframe height="300" style="width: 100%;" scrolling="no" title="实现水平垂直居中最便捷的方法" src="https://codepen.io/webvueblog/embed/YzeVQaE?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/webvueblog/pen/YzeVQaE">
  实现水平垂直居中最便捷的方法</a> by 我是哪吒（达达） (<a href="https://codepen.io/webvueblog">@webvueblog</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

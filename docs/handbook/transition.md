> 点击勘误[issues](https://github.com/webVueBlog/awesome-css/issues)，感谢大家的阅读

该transition属性是一个简写属性，用于表示最多四个与转换相关的简写属性

```js
.element {
 transition: background-color 0.5s ease;
}
```

句法：

```js
transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];
```

## 演示：

transition属性允许元素在指定的持续时间内更改值，动画属性更改，而不是让它们立即发生。因此，如果我们有一个带有红色背景的框，当它悬停时我们想将其更改为绿色背景，我们可以向右transition移动属性以在背景颜色之间移动。

<iframe height="300" style="width: 100%;" scrolling="no" title="transition" src="https://codepen.io/webvueblog/embed/eYVvKdP?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/webvueblog/pen/eYVvKdP">
  transition</a> by 我是哪吒（达达） (<a href="https://codepen.io/webvueblog">@webvueblog</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 指定要转换的属性

请注意，我们已经background-color在声明中调用了该属性transition。这告诉浏览器我们正计划在悬停和非悬停状态之间发生转换时转换背景颜色而不是其他任何东西。还要注意，我们告诉浏览器过渡需要两秒钟，并且跟随和ease-out 计时功能，这意味着过渡开始很快，然后在接近结束时减慢。

你可以像我们上面那样指定一个特定的属性，或者使用一个值all来引用转换属性：

```js
.element {
 transition: all 0.5s ease;
 background: red;
 padding: 10px;
}
.element:hover {
 background: green;
 padding: 20px;
}
```

all transition-property为速记的部分指定。您还可以用逗号分隔值集以对不同的属性进行不同的转换：

```js
.element {
  transition: background 0.2s ease,
              padding 0.8s linear;
}
```

在大多数情况下，值的顺序并不重要——除非指定了延迟。如果指定延迟，则必须首先指定持续时间。浏览器识别为有效时间值的第一个值将始终表示持续时间。任何后续的有效时间值都将被解析为延迟。

某些属性无法转换，因为它们不是动画属性。

通过在元素本身上指定过渡，您可以定义在两个方向上发生的过渡。例如，以下演示在悬停时转换，但在悬停时没有。

<iframe height="300" style="width: 100%;" scrolling="no" title="transition1" src="https://codepen.io/webvueblog/embed/yLvMqVm?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/webvueblog/pen/yLvMqVm">
  transition1</a> by 我是哪吒（达达） (<a href="https://codepen.io/webvueblog">@webvueblog</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

![1652840037(1)](https://user-images.githubusercontent.com/59645426/168943197-97238a5b-3f3f-4b6a-9499-59b40df5a063.png)

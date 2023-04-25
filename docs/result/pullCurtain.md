> 点击勘误[issues](https://github.com/webVueBlog/tailwindcss-chinese/issues)，感谢大家的阅读

首先，我们需要一个用于放置窗帘的容器，我们将给它.curtain，我们有一个.invert子元素，它将作为我们的“粘性”框。最后，我们在这个盒子里有了内容。

```js
<div class="curtain">
  <div class="invert">
    <h2>Section title</h2>
  </div>
</div>
```

## 让我们设置一些 CSS 变量

需要三个值。让我们用它们制作 CSS 变量:

- `--minh` 容器高度
- `--color1` 浅颜色
- `--color2` 深颜色

```js
:root {
  --minh: 98vh;
  --color1: wheat;
  --color2: midnightblue;
}
```

## 是时候拉开帷幕了

- `linear-gradient` 代表“分裂”背景
- `min-height` 容器底部的额外空间

我们使用`::after`伪元素将额外的空间添加到底部。这样，我们的“粘性”内容实际上会在滚动经过`::after`元素时粘在容器上。

```js
.curtain {
  /** create the "split" background **/
  background-image: linear-gradient(to bottom, var(--color2) 50%, var(--color1) 50%);
}

/** add extra space to the bottom (need this for the "sticky" effect) **/
.curtain::after {
  content: "";
  display: block;
  min-height: var(--minh);
}
```

## 制作粘性内容

接下来，我们需要使我们的内容“粘性”，因为它完全位于容器内，因为背景和文本交换颜色值。事实上，我们已经为.curtain的子元素提供了一个.invert可以用作粘性容器的类。


- position: sticky并top定义粘性。
- mix-blend-mode: difference 将元素内部内容的颜色混合到.curtain的背景渐变中。
- display: flex将演示内容居中。
- min-height定义容器的高度并允许底部的额外空间。
- color设置标题的颜色。

```js
.invert {
  /** make the content sticky **/
  position: sticky;
  top: 20px;

  /** blend the content with the contrast effect **/
  mix-blend-mode: difference;

  /** center the content **/
  display: flex;
  align-items: center;
  justify-content: center;
  
  /** set the minimum height of the section **/
  min-height: var(--minh);
}

h2 {
  /** set the color of the text **/
  color: var(--color1);
}
```

.curtain::after内容的高度是使用 CSS 变量设置的，其值与伪元素的高度值相同。

声明将mix-blend-mode: difference我们的内容与背景融合在一起。该difference值很复杂，但您可能会将其可视化为背景的反转文本颜色。

<iframe height="300" style="width: 100%;" scrolling="no" title="mix-blend-mode" src="https://codepen.io/webvueblog/embed/RwQpYdw?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/webvueblog/pen/RwQpYdw">
  mix-blend-mode</a> by 我是哪吒（达达） (<a href="https://codepen.io/webvueblog">@webvueblog</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## “拉开窗帘”演示

<iframe height="300" style="width: 100%;" scrolling="no" title="pullCurtain" src="https://codepen.io/webvueblog/embed/vYdxzwY?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/webvueblog/pen/vYdxzwY">
  pullCurtain</a> by 我是哪吒（达达） (<a href="https://codepen.io/webvueblog">@webvueblog</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


> 点击勘误[issues](https://github.com/webVueBlog/tailwindcss-chinese/issues)，感谢大家的阅读

## animation属性

CSS 中的animation属性可用于为许多其他 CSS 属性设置动画，例如color、background-color、height或width. 每个动画都需要使用@keyframes 的 规则animation定义，然后使用属性调用该规则，如下所示

```js
.element {
  animation: pulse 5s infinite;
}

@keyframes pulse {
  0% {
    background-color: #001F3F;
  }
  100% {
    background-color: #FF4136;
  }
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="animation" src="https://codepen.io/webvueblog/embed/ZErKjed?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/webvueblog/pen/ZErKjed">
  animation</a> by 我是哪吒（达达） (<a href="https://codepen.io/webvueblog">@webvueblog</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

每个@keyframes规则都定义了动画期间特定时刻应该发生的事情。例如，0% 是动画的开始，100% 是结束。然后可以通过速记animation属性或其八个子属性来控制这些关键帧，以更好地控制应该如何操作这些关键帧。

## 子属性

1. `animation-name` 声明 `@keyframes`要操作的规则名称
2. `animation-duration` 动画完成一个周期所需要的时间长度
3. `animation-timing-function` 建立预设的加速度曲线，如 ease 或 linear
4. `animation-delay` 从加载元素到动画序列开始之间的时间
5. `animation-direction` 设置循环后动画的方向，它的默认值在每个周期重置
6. `animation-iteration-count` 动画应该执行的次数
7. `animation-fill-mode` 设置在动画之前/之后应用哪些值
8. `animation-play-state` 暂停/播放动画

使用：

```js
@keyframes stretch {
  /* declare animation actions here */
}

.element {
  animation-name: stretch;
  animation-duration: 1.5s; 
  animation-timing-function: ease-out; 
  animation-delay: 0s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running; 
}

/*
  is the same as:
*/

.element {
  animation: 
    stretch
    1.5s
    ease-out
    0s
    alternate
    infinite
    none
    running;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="animation-test" src="https://codepen.io/webvueblog/embed/dydWjmR?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/webvueblog/pen/dydWjmR">
  animation-test</a> by 我是哪吒（达达） (<a href="https://codepen.io/webvueblog">@webvueblog</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

以下是每个子属性可以采用哪些值的完整列表：

| 属性 | 说明 |
| :---: | :---: |
| `animation-timing-function` | 轻松，缓出，缓入，缓入，线性，三次贝塞尔曲线（x1，y1，x2，y2）（例如三次贝塞尔曲线（0.5，0.2，0.3，1.0））`ease, ease-out, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) (e.g. cubic-bezier(0.5, 0.2, 0.3, 1.0))` |
| `animation-duration` | Xs or Xms |
| `animation-delay` | Xs or Xms |
| `animation-iteration-count` | X |
| `animation-fill-mode` | 向前，向后，两者，无 `forwards, backwards, both, none` |
| `animation-direction` | `normal, alternate` |
| `animation-play-state` | `paused, running, running` |

## 多个步骤

如果动画具有相同的开始和结束属性，则用逗号分隔 0% 和 100% 内部的值很有用@keyframes：

```js
@keyframes pulse {
  0%, 100% {
    background-color: yellow;
  }
  50% {
    background-color: red;
  }
}
```

## 多个动画

您也可以用逗号分隔值以在选择器上声明多个动画。在下面的示例中，我们希望在一段时间内更改圆圈的颜色，@keyframe同时将其从一侧轻推到另一侧。

<iframe height="300" style="width: 100%;" scrolling="no" title="animation-test-1" src="https://codepen.io/webvueblog/embed/wvydxNR?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/webvueblog/pen/wvydxNR">
  animation-test-1</a> by 我是哪吒（达达） (<a href="https://codepen.io/webvueblog">@webvueblog</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 表现

动画大多数属性是一个性能问题，所以我们应该在动画任何属性之前谨慎行事。但是，某些组合可以安全地设置动画：

1. transform: translate()
2. transform: scale()
3. transform: rotate()
4. opacity

## 浏览器支持

![image](https://user-images.githubusercontent.com/59645426/169296861-6a99bed0-a0f0-4dc9-822b-7686f7dceb54.png)

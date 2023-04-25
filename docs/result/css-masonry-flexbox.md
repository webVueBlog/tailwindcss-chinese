> 点击勘误[issues](https://github.com/webVueBlog/tailwindcss-chinese/issues)，感谢大家的阅读

## 瀑布流效果

html: 

```js
<div class="masonry">
  <div class="item">
    <img src="https://picsum.photos/360/460?random=1">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/520?random=2">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/420?random=3">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/420?random=4">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/480?random=5">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/500?random=6">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/500?random=7">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/400?random=8">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/440?random=9">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/420?random=10">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/500?random=11">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/460?random=12">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/480?random=13">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/440?random=14">
  </div>
  <div class="item">
    <img src="https://picsum.photos/360/420?random=15">
  </div>
</div>
```

css:

```js
body {
  margin: 4px;
  font-family: Helvetica;
  
  margin: auto;
  width: 720px;
}

.masonry {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 1000px;
}

.item {
  position: relative;
  width: 25%;
  padding: 2px;
  box-sizing: border-box;
  counter-increment: item-counter;
}

.item img {
  display: block;
  width: 100%;
  height: auto;
}

.item::after {
  position: absolute;
  display: block;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  background-color: #000;
  color: #fff;
  content: counter(item-counter);
}

.item:nth-child(4n+1) {
  order: 1;
}

.item:nth-child(4n+2) {
  order: 2;
}

.item:nth-child(4n+3) {
  order: 3;
}

.item:nth-child(4n) {
  order: 4;
}
```

## 效果

<iframe height="300" style="width: 100%;" scrolling="no" title="瀑布流效果" src="https://codepen.io/webvueblog/embed/PoQjqdb?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/webvueblog/pen/PoQjqdb">
  瀑布流效果</a> by 我是哪吒（达达） (<a href="https://codepen.io/webvueblog">@webvueblog</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

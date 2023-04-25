> 点击勘误[issues](https://github.com/webVueBlog/tailwindcss-chinese/issues)，感谢大家的阅读

## 轮播图效果

html

```js
<ul class="slides">
  <input type="radio" id="control-1" name="control" checked>
  <input type="radio" id="control-2" name="control">
  <input type="radio" id="control-3" name="control">
  
  <li class="slide">1</li>
  <li class="slide">2</li>
  <li class="slide">3</li>
  
  <div class="controls-visible">
    <label for="control-1"></label>
    <label for="control-2"></label>
    <label for="control-3"></label>
  </div>
</ul>
```

css

```js
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

ul.slides {
  position: relative;
  width: 600px;
  height: 280px;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #eee;
  overflow: hidden;
}

li.slide {
  margin: 0;
  padding: 0;
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;
  font-size: 120px;
  color: #fff;
  transition: .5s transform ease-in-out;
}

.slide:nth-of-type(1) {
  background-color: #F2E205;
}

.slide:nth-of-type(2) {
  background-color: #F25C05;
  left: 100%;
}

.slide:nth-of-type(3) {
  background-color: #495F8C;
  left: 200%;
}

input[type="radio"] {
  position: relative;
  z-index: 100;
  display: none;
}

.controls-visible {
  position: absolute;
  width: 100%;
  bottom: 12px;
  text-align: center;
}

.controls-visible label {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 3px;
  border: 2px solid #fff;
}

.slides input[type="radio"]:nth-of-type(1):checked ~ .controls-visible label:nth-of-type(1) {
  background-color: #333;
}

.slides input[type="radio"]:nth-of-type(2):checked ~ .controls-visible label:nth-of-type(2) {
  background-color: #333;
}

.slides input[type="radio"]:nth-of-type(3):checked ~ .controls-visible label:nth-of-type(3) {
  background-color: #333;
}

.slides input[type="radio"]:nth-of-type(1):checked ~ .slide {
  transform: translatex(0%);
}

.slides input[type="radio"]:nth-of-type(2):checked ~ .slide {
  transform: translatex(-100%);
}

.slides input[type="radio"]:nth-of-type(3):checked ~ .slide {
  transform: translatex(-200%);
}
```

## 效果

<iframe height="300" style="width: 100%;" scrolling="no" title="轮播图效果" src="https://codepen.io/webvueblog/embed/qBxjdmv?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/webvueblog/pen/qBxjdmv">
  轮播图效果</a> by 我是哪吒（达达） (<a href="https://codepen.io/webvueblog">@webvueblog</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
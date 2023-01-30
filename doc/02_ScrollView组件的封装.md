## 简单的结构

两个按钮和内容

``` jsx
<ViewWrapper>
  <button>左边</button>
  <button onClick={e => rightBtnClick()}>右边</button>
  <div className="scroll">
    <div className="scroll-content">{props.children}</div>
  </div>
</ViewWrapper>
```

* 父元素（.scroll） 对超出的部分进行隐藏（overflow: hidden）
* 内容（props.children）使用 flex 布局， 且缩放（flex-shrink）设置为 0

![image-20230129011230449](/Users/chen/Library/Application Support/typora-user-images/image-20230129011230449.png)



## 

## 滚动的距离（offsetLeft）

![image-20230129012004255](/Users/chen/Library/Application Support/typora-user-images/image-20230129012004255.png)



```js
const [posIndex, setPosIndex] = useState(0)

function rightBtnClick() {
  const newIndex = posIndex + 1
  const newEl = scrollContentRef.current.children[newIndex]
  const newOffsetLeft = newEl.offsetLeft  // 需要移动的距离
  scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)` // 进行滚动
  setPosIndex(newIndex)
}
```

注意事项：

要拿到正确的 offsetLeft 值，需要设置父元素为定位元素。

>  HTMLElement.offsetLeft 是一个只读属性，返回当前元素左上角相对于 HTMLElement.offsetParent 节点的左边界偏移的像素值。

> HTMLElement.offsetParent 是一个只读属性，返回一个指向最近的（指包含层级上的最近）包含该元素的**定位元素**或者最近的 table, td, th, body 元素。



##  右边按钮的显隐

![image-20230129183602193](/Users/chen/Library/Application Support/typora-user-images/image-20230129183602193.png)

判断 totalDistance 是否大于0， 大于0时显示右边按钮

```js
// 组件渲染完毕， 判断是否显示右侧的按钮
const scrollContentRef = useRef()
useEffect(() => {
const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的宽度
const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
const totalDistance = scrollWidth - clientWidth
setShowRight(totalDistance > 0)
},[props.children])
```


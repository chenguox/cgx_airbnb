import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  // 定义内部的状态
  const [posIndex, setPosIndex] = useState(0)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  // 将 totalDistanceRef 值进行保存
  const totalDistanceRef = useRef()

  // 组件渲染完毕， 判断是否显示右侧的按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance // 将该值进行保存，便于后面按钮显隐的判断
    setShowRight(totalDistance > 0)
  }, [props.children])

  // function leftBtnClick() {
  //   const newIndex = posIndex - 1
  //   const newEl = scrollContentRef.current.children[newIndex]
  //   const newOffsetLeft = newEl.offsetLeft // 需要移动的距离
  //   scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)` // 进行滚动
  //   setPosIndex(newIndex)
  //   // 是否继续显示右侧的按钮
  //   setShowLeft(newOffsetLeft > 0)
  //   setShowRight(totalDistanceRef.current > newOffsetLeft)
  // }

  // function rightBtnClick() {
  //   const newIndex = posIndex + 1
  //   const newEl = scrollContentRef.current.children[newIndex]
  //   const newOffsetLeft = newEl.offsetLeft // 需要移动的距离
  //   scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)` // 进行滚动
  //   setPosIndex(newIndex)
  //   // 是否继续显示右侧的按钮
  //   setShowLeft(newOffsetLeft > 0)
  //   setShowRight(totalDistanceRef.current > newOffsetLeft)
  // }

  // 事件处理的逻辑
  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft // 需要移动的距离
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    // 是否继续显示按钮
    setShowLeft(newOffsetLeft > 0)
    setShowRight(totalDistanceRef.current > newOffsetLeft)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className='control left' onClick={(e) => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className='control right' onClick={(e) => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView

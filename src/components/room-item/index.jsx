// import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
// import Rating from '@material-ui/Rating'
import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classname from 'classname'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()

  /** 事件的处理逻辑 */
  function controlClickHandle(isRight) {
    // 上一个面板/下一个面板
    isRight ? sliderRef.current.next() : sliderRef.current.prev()

    // 修改当前选中的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex > length - 1) newIndex = 0
    if (newIndex < 0) newIndex = length - 1
    setSelectIndex(newIndex)
  }

  function itemClickHandle() {
    if (itemClick) itemClick(itemData)
  }

  // 子元素的赋值
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} />
    </div>
  )

  const sliderElement = (
    <div className="slider">
      {/* 左右按钮 */}
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      {/* 使用自己封装的指示器 */}
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span
                  className={classname('dot', {
                    active: selectIndex === index,
                  })}
                ></span>
              </div>
            )
          })}
        </Indicator>
      </div>
      {/* 使用 antdesign 的轮播图组件 */}
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )

  return (
    <ItemWrapper
      itemWidth={itemWidth}
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {/* 根据要求显示图片还是轮播图 */}
        {!itemData.picture_urls ? pictureElement : sliderElement}
        <div className="desc">{itemData.verify_info.messages.join(' . ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            name="read-only"
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: '12px', color: '#00848A', marginRight: '-1px' }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  )
})

// RoomItem.propTypes = {}

export default RoomItem

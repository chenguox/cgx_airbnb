import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'
import classname from 'classname'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import Indicator from '../indicator'
import { BrowserWrapper } from './style'

const PictureBrowser = memo((props) => {
  const { pictureUrls } = props
  /** 定义组件内部的状态 */
  const { closeClick } = props
  const [showList, setShowList] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  /** 事件监听的逻辑 */
  function closeBtnClickHandle() {
    if (closeClick) closeClick()
  }

  function controlClickHandle(isRight) {
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1
    const len = pictureUrls.length
    if (newIndex < 0) newIndex = len - 1
    if (newIndex > len - 1) newIndex = 0
    console.log(currentIndex)
    setCurrentIndex(newIndex)
  }

  return (
    <BrowserWrapper showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={(e) => closeBtnClickHandle()}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="picture">
          <img src={pictureUrls[currentIndex]} alt="" />
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              <span>{showList ? '显示' : '隐藏'}照片列表</span>
              {showList ? (
                <IconTriangleArrowBottom />
              ) : (
                <IconTriangleArrowTop />
              )}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classname('item1', {
                      active: currentIndex === index,
                    })}
                    key={item}
                    onClick={(e) => setCurrentIndex(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
}

export default PictureBrowser

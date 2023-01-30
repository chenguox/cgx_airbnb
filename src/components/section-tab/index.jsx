import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useState } from 'react'
import { TabWrapper } from './style'

const SectionTab = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(item, index) {
    setCurrentIndex(index)
    tabClick(item)
  }

  return (
    <TabWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames('item', { active: index === currentIndex })}
              onClick={(e) => itemClickHandle(item, index)}
            >
              {item}
            </div>
          )
        })}
      </ScrollView>
    </TabWrapper>
  )
})

SectionTab.propTypes = {
  tabNames: PropTypes.array,
}

export default SectionTab

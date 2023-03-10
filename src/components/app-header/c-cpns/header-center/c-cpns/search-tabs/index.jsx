import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classnames from 'classname'

import { TabWrapper } from './style'

const SearchTabs = memo((props) => {
  const { titles, tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index) {
    setCurrentIndex(index)
    if (tabClick) tabClick(index)
  }

  return (
    <TabWrapper>
      {titles.map((item, index) => {
        return (
          <div
            className={classnames('tab-item', {
              active: currentIndex === index,
            })}
            key={item}
            onClick={(e) => itemClickHandle(index)}
          >
            <span className="tab-text">{item}</span>
            <span className="bottom"></span>
          </div>
        )
      })}
    </TabWrapper>
  )
})

SearchTabs.propTypes = {
  titles: PropTypes.array,
}

export default SearchTabs

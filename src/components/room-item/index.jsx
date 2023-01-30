// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Rating } from '@mui/material'
// import Rating from '@material-ui/Rating'
import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props

  return (
    <ItemWrapper itemWidth={itemWidth}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(' . ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            name="read-only"
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

// RoomItem.propTypes = {}

export default RoomItem

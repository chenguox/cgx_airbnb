import PropTypes from 'prop-types'
import React, { memo } from 'react'
import DetailInfos from './c-cpns/detail-infos'
import DetailPicture from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo((props) => {
  return (
    <DetailWrapper>
      <DetailPicture />
      <DetailInfos />
    </DetailWrapper>
  )
})

Detail.propTypes = {}

export default Detail
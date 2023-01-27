import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTab from '@/components/section-tab'

import { SectionV2Wrapper } from './style'
import { useCallback } from 'react'
import { useState } from 'react'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData = {} } = props

  // 定义内部的state
  const initialName = Object.keys(infoData.dest_list)[0]
  console.log(initialName)
  const [name, setName] = useState(initialName) // 细节useState只会执行一次
  const tabNames = infoData.dest_address?.map((item) => item.name) ?? []

  // 事件处理函数
  const tabClickHandle = useCallback(function(name, index) {
    setName(name)
  },[])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTab tabNames={tabNames} tabClick={tabClickHandle}/>
      <SectionRooms
        roomList={infoData.dest_list?.[name]}
        itemWidth="33.3333%"
      />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV2

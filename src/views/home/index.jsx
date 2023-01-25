import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { fetchHomeDataAction } from '@/store/module/home'
import React, { memo, useState, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'

const Home = memo(() => {
  // 从 redux 中获取数据
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  )

  // 派发异步的事件： 发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('xxxxx'))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}/>
          <SectionRooms roomList={goodPriceInfo.list}/>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home

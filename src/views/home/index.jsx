import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/module/home'
import { isEmptyO } from '@/utils'

import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { HomeWrapper } from './style'
import HomeLongfor from './c-cpns/home-longfor'

const Home = memo(() => {
  // 从 redux 中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo
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
        {/* 获取到数据才渲染组件 */}
        {/* { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        { isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>} */}
        { isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}

        {/* <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} /> */}
      </div>
    </HomeWrapper>
  )
})

export default Home

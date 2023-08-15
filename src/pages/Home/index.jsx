import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import Banner from './components/banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchGoodPriceListDataAction } from '@/store/features/home'
import HomeSectionV1 from './components/home-sction-v1'
import HomeSectionV2 from './components/home-section-v2'
import { isEmptyO } from '@/utils'

const Home = memo(() => {
  // 派发事件，获取性价比数据
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGoodPriceListDataAction())
  }, [dispatch])

  // 获取数据
  const { goodPriceList, highScoreList, discountList, hotRecommendList } = useSelector((state) => ({
    goodPriceList: state.home.goodPriceList,
    highScoreList: state.home.highScoreList,
    discountList: state.home.discountList,
    hotRecommendList: state.home.hotRecommendList
  }), shallowEqual)

  return (
    <HomeWrapper>
      {/* 轮播图 */}
      <Banner />

      {/* 内容区域 */}
      <div className='content'>
        {isEmptyO(discountList) && <HomeSectionV2 itemData={discountList} />}
        {isEmptyO(hotRecommendList) && <HomeSectionV2 itemData={hotRecommendList} />}

        <HomeSectionV1 itemData={goodPriceList} />
        <HomeSectionV1 itemData={highScoreList} />
      </div>
    </HomeWrapper>
  )
})

export default Home
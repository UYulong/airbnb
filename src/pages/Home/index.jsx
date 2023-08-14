import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import Banner from './components/banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchGoodPriceListDataAction } from '@/store/features/home'
import SectionTitle from '@/components/SectionTitle'
import SectionRooms from '@/components/SectionRooms'

const Home = memo(() => {

  // 派发事件，获取性价比数据
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGoodPriceListDataAction())
  }, [dispatch])

  // 获取数据
  const { goodPriceList } = useSelector((state) => ({
    goodPriceList: state.home.goodPriceList
  }), shallowEqual)

  return (
    <HomeWrapper>
      {/* 轮播图 */}
      <Banner />

      {/* 内容区域 */}
      <div className='content'>
        <div className="good-price">
          <SectionTitle title={goodPriceList.title} />
          <SectionRooms roomList={goodPriceList.list} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
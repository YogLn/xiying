import React, { memo } from 'react'
import { Divider } from 'antd'


import Banner from './banner'
import WallLeft from './wall-left'
import WallRight from './wall-right'
import { HomeWrapper } from './style'

import { people, animal, landscape } from '@/common/local-data'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <Banner />
      <Divider />
      <WallLeft title="人物" desc="令人惊叹的任务摄影作品，展现出每个人物的特性" list={people}/>
      <Divider />
      <WallRight title="动物" desc="地球上生态中的生物的近照，让你近距离的观看" list={animal}/>
      <Divider />
      <WallLeft title="自然" desc="大自然中让人叹为观止的绝美景象，带你领略大自然的美丽" list={landscape}/>
    </HomeWrapper>
  )
})

export default Home

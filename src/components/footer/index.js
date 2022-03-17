import React, { memo } from 'react'
import { Divider } from 'antd'
import { FooterWrapper } from './style'

const Footer = memo(() => {
  return (
    <FooterWrapper>
			<Divider />
      <p className="desc">西华大学2018级学生毕设项目Copyright&copy;2022 yogln.top 版权所有</p>
      <p className="beian">
        <a href="http://www.beian.miit.gov.cn">蜀ICP备2021029954号</a>
      </p>
    </FooterWrapper>
  )
})

export default Footer

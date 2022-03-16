import React, { memo } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

import { headerLeftLinks, headerRightLinks } from '@/common/local-data'

const Header = memo(() => {
  const history = useHistory()
  const handleClick = (tag) => {
    if(tag === 'login') {
      history.push(`/login`)
    } else {
      history.push(`/register`)
    }
  }

  return (
    <div className="">
      <HeaderWrapper>
        <HeaderLeft>
					<a href="/" className="title">西影</a>
          {headerLeftLinks.map(item => {
            return (
              <div className="title-left" key={item.link}>
                <NavLink to={item.link} className="item">
                  {item.title}
                </NavLink>
              </div>
            )
          })}
        </HeaderLeft>
        <HeaderRight>
          {headerRightLinks.map(item => {
            return (
              <div className="title-right" key={item.link}>
                <div className={item.className} onClick={e => handleClick(item.className)}>
                  {item.title}
                </div>
              </div>
            )
          })}
        </HeaderRight>
      </HeaderWrapper>
    </div>
  )
})

export default Header

import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getUserListAction } from '../store/actionCreators'
import UserInfo from '@/components/userInfo'
import { UserWrapper } from './style'

const User = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserListAction(1, 10))
  }, [dispatch])
  const { userList } = useSelector(
    state => ({
      userList: state.getIn(['rank', 'userList'])
    }),
    shallowEqual
  )

  return (
    <UserWrapper>
      <div className="top">
        <div className="">用户头像</div>
        <div className="">用户名</div>
        <div className="">总作品点赞数</div>
      </div>
      <div className="list">
        {userList.map((item, index) => {
          return <UserInfo content={item} key={item.id} rank={index + 1} />
        })}
      </div>
    </UserWrapper>
  )
})

export default User

import React, { memo, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getMyPostListAction } from '../store/actionCreators'

import RightList from '@/components/right-list'
import PostBox from '@/components/post-box'
import { MyWrapper, MyLeft, MyRight } from './style'

const My = memo(() => {
  const id = window.localStorage.getItem('id')
  const token = window.localStorage.getItem('token')
  const dispatch = useDispatch()

  const { myPostList } = useSelector(
    state => ({
      myPostList: state.getIn(['post', 'myPostList'])
    }),
    shallowEqual
  )

  useState(() => {
    dispatch(getMyPostListAction(id))
  }, [dispatch])

  return (
    <MyWrapper>
      <MyLeft>
        {token && myPostList && myPostList.map(item => {
          return <PostBox key={item.postId} content={item}></PostBox>
        })}
      </MyLeft>
      <MyRight>
        <RightList />
      </MyRight>
    </MyWrapper>
  )
})

export default My

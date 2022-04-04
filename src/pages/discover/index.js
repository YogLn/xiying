import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import {
  getPostListAction,
  getPostListWithLikeAction
} from './store/actionCreators'

import PostBox from '@/components/post-box'
import Pagination from '@/components/pagination'
import RightList from '../../components/right-list'
import { DiscoverWrapper, DiscoverLeft, DiscoverRight } from './style'

const Discover = memo(() => {
  const dispatch = useDispatch()
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      dispatch(getPostListAction(1, 5))
    } else {
      dispatch(getPostListWithLikeAction(1, 5))
    }
  }, [dispatch, token])

  const { postList, total } = useSelector(
    state => ({
      postList: state.getIn(['post', 'postList']),
      total: state.getIn(['post', 'total'])
    }),
    shallowEqual
  )

  return (
    <DiscoverWrapper>
      <DiscoverLeft>
        {postList?.map(item => {
          return <PostBox key={item.postId} content={item} />
        })}
        <Pagination total={total} />
      </DiscoverLeft>
      <DiscoverRight>
        <RightList />
      </DiscoverRight>
    </DiscoverWrapper>
  )
})

export default Discover

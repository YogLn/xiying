import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import RightList from '@/components/right-list'
import PostBox from '@/components/post-box'

import { getCurrentPost } from '../store/actionCreators'
import { DetailWrapper, DetailLeft, DetailRight } from './style'

const Detail = memo(props => {
  const dispatch = useDispatch()
  const id = props?.match?.params?.id
  useEffect(() => {
    dispatch(getCurrentPost(id))
  }, [id, dispatch])

  const { currentPost } = useSelector(
    state => ({
      currentPost: state.getIn(['post', 'currentPost'])
    }),
    shallowEqual
  )
  return (
    <DetailWrapper>
      <DetailLeft>
        <PostBox content={currentPost} showComment={true}/>
      </DetailLeft>
      <DetailRight>
        <RightList />
      </DetailRight>
    </DetailWrapper>
  )
})

export default Detail

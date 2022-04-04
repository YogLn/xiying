import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import PostBox from '@/components/post-box'
import RightList from '@/components/right-list'
import { getMyFavorListAction } from './store/actionCreator'
import { FavorWrapper, FavorLeft, FavorRight } from './style'

const Favor = memo(() => {
  const dispatch = useDispatch()
  let id = window.localStorage.getItem('id')
  useEffect(() => {
    dispatch(getMyFavorListAction(id))
  }, [dispatch, id])

  const { favorList } = useSelector(
    state => ({
      favorList: state.getIn(['favor', 'favorList'])
    }),
    shallowEqual
  )

  return (
    <FavorWrapper>
      <FavorLeft>
        <div className="list">
          {favorList.map(item => {
            return <PostBox key={item.postId} content={item} />
          })}
        </div>
      </FavorLeft>
      <FavorRight>
				<RightList />
			</FavorRight>
    </FavorWrapper>
  )
})

export default Favor

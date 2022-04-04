import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import Box from './activity-box'
import { getActivityListAction } from './store/actionCreator'
import { ActivityWrapper } from './style'

const Favor = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getActivityListAction())
  }, [dispatch])
  const { activityList } = useSelector(
    state => ({
      activityList: state.getIn(['activity', 'activityList'])
    }),
    shallowEqual
  )

  return (
    <ActivityWrapper>
      <div className="list">
        {activityList.map(item => {
          return <Box key={item.id} content={item} />
        })}
      </div>
    </ActivityWrapper>
  )
})

export default Favor

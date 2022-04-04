import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getActivityDetailAction } from '../store/actionCreator'
import { formatUtcString } from '@/utils/format'
import { DetailWrapper } from './style'

const Detail = memo(props => {
  const { id } = props.match.params
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getActivityDetailAction(id))
  }, [id, dispatch])
  const { content } = useSelector(
    state => ({
      content: state.getIn(['activity', 'activityDetail'])
    }),
    shallowEqual
  )
  return (
    <DetailWrapper>
      <h2 className="title">{content.title}</h2>
      <div className="time">
        <div className="start-time">
					赞助商：
          <span>{content.sponsor}</span>
        </div>
        <div className="start-time">
          开始时间：
          <span>{formatUtcString(content?.startTime, 'YYYY-MM-DD')}</span>
        </div>
        <div className="end-time">
          结束时间：
          <span>{formatUtcString(content?.endTime, 'YYYY-MM-DD')}</span>
        </div>
      </div>
      <div className="img">
        <img src={content.imgUrl} alt="" />
      </div>
      <p className="detail">{content.detail}</p>
    </DetailWrapper>
  )
})

export default Detail

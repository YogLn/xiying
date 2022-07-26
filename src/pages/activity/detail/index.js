import React, { memo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Image } from 'antd'

import { getActivityDetailAction } from '../store/actionCreator'
import { formatUtcString } from '@/utils/format'
import { timeCompare, getNowTime } from '@/utils/format'
import { DetailWrapper } from './style'

const Detail = memo(props => {
  const { id } = props.match.params
  const history = useHistory()
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
  if (!content) return null
  let { detail = null } = content
  detail = detail?.split('\n')

  const handleJoinActivity = () => {
    history.push(`/join/${id}`)
  }

  let activity = '进行中'
  const isStart = timeCompare(
    formatUtcString(getNowTime()),
    formatUtcString(content?.startTime)
  )
  const isEnd = timeCompare(
    formatUtcString(getNowTime()),
    formatUtcString(content?.endTime)
  )
  if (isEnd === 1) {
    activity = '已结束'
  }
  if (isStart === -1) {
    activity = '未开始'
  }

  return (
    <DetailWrapper>
      <h2 className="title">{content.title}</h2>
      <div className="time">
        <div className="start-time">
          赞助商：
          <span>
            {content?.userVo?.username === 'admin'
              ? '西影官方'
              : content?.userVo?.username}
          </span>
        </div>
        <div className="start-time">
          开始时间：
          <span>{formatUtcString(content?.startTime, 'YYYY-MM-DD')}</span>
        </div>
        <div className="end-time">
          结束时间：
          <span>{formatUtcString(content?.endTime, 'YYYY-MM-DD')}</span>
        </div>
        {activity === '进行中' ? (
          <div className="join" onClick={() => handleJoinActivity()}>
            参加活动
          </div>
        ) : (
          <div>活动已结束</div>
        )}
      </div>
      <div className="image">
        <Image src={content?.imgUrl} alt="" className="img" />
      </div>
      <div className="detail">
        {detail?.map((item, index) => {
          return <p key={item + index}>{item}</p>
        })}
      </div>
    </DetailWrapper>
  )
})

export default Detail

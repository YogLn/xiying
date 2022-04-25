import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { formatUtcString, getNowTime, timeCompare } from '@/utils/format'
import { BoxWrapper } from './style'

const Box = memo(props => {
  const { content } = props
  const history = useHistory()
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
  const handleDetailClick = () => {
    history.push(`/activity/${content.id}`)
  }

  return (
    <BoxWrapper>
      <div className="wrapper" onClick={() => handleDetailClick()}>
        <div className="top">
          <div className="title">{content.title}</div>
          {activity === '进行中' ? (
            <div className="status-ing">{activity}</div>
          ) : (
            <div className="status-not">{activity}</div>
          )}
        </div>
        <div className="image">
          <img src={content.imgUrl} alt="" />
        </div>
        <div className="time">
          <div className="start-time">
            开始时间：
            <span>{formatUtcString(content?.startTime, 'YYYY-MM-DD')}</span>
          </div>
          <div className="end-time">
            结束时间：
            <span>{formatUtcString(content?.endTime, 'YYYY-MM-DD')}</span>
          </div>
        </div>
      </div>
    </BoxWrapper>
  )
})

export default Box

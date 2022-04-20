import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { Button, Input } from 'antd'
import {
  getChatListAction,
  changeChatListAction,
  getHistoryListAction,
  changeCurrentObjAction
} from './store/actionCreator'
import { getTime } from '@/utils/format'
import { MessageWrapper, MessageLeft, MessageRight } from './style'

const Message = memo(props => {
  const { TextArea } = Input
  const id = parseInt(window.localStorage.getItem('id'))
  const myAvatar = window.localStorage.getItem('avatar')
  const dispatch = useDispatch()
  const [socketUrl] = useState(`ws://139.196.7.90:8080/websocket/${id}`)
  const [messageHistory, setMessageHistory] = useState([])
  const [messageValue, setMessageValue] = useState()
  const [currentIndex, setCurrentIndex] = useState(-1)

  const { state } = props?.location
  const [objId, setObjId] = useState(state?.id)
  const [objAvatar, setObjAvatar] = useState(state?.avatar)

  let tag = false
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl)
  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated'
  }[readyState]

  const { chatList, currentObj, chatHistoryList } = useSelector(
    state => ({
      chatList: state.getIn(['chat', 'chatList']),
      currentObj: state.getIn(['chat', 'currentObj']),
      chatHistoryList: state.getIn(['chat', 'chatHistoryList'])
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(changeCurrentObjAction(state))
  }, [state, dispatch])

  useEffect(() => {
    chatList.forEach((item, index) => {
      if (currentObj?.id === item.id) setCurrentIndex(index)
    })
    return () => {
      setCurrentIndex(-1)
    }
  }, [chatList, currentObj?.id])

  useEffect(() => {
    if (currentObj) {
      const newChatList = []
      for (const item of chatHistoryList.reverse()) {
        if (item.fromId === id) {
          newChatList.push({ avatar: myAvatar, ...item })
        } else {
          newChatList.push({ avatar: currentObj?.avatar, ...item })
        }
      }
      setMessageHistory(newChatList)
    }
  }, [chatHistoryList, currentObj, currentObj?.avatar, id, myAvatar])

  useEffect(() => {
    if (lastMessage !== null && currentObj) {
      setMessageHistory(prev =>
        prev.concat({ avatar: objAvatar, ...JSON.parse(lastMessage.data) })
      )
    }
  }, [lastMessage, setMessageHistory, objAvatar, currentObj])

  useEffect(() => {
    dispatch(getChatListAction())
    objId && dispatch(getHistoryListAction(objId))
  }, [dispatch, objId])

  if (state && chatList) {
    for (let item of chatList) {
      if (item?.id === state?.id) tag = true
    }
    if (!tag) {
      const newChatList = [...chatList, state]
      dispatch(changeChatListAction(newChatList))
    }
  }

  const handleMessage = e => {
    if (e.keyCode === 13) {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    sendMessage(
      JSON.stringify({
        fromId: id,
        toId: objId,
        text: messageValue
      })
    )
    setMessageHistory(prev =>
      prev.concat({
        avatar: myAvatar,
        fromId: id,
        text: messageValue,
        sendTime: getTime()
      })
    )
    setMessageValue('')
  }

  const handleTabClick = (item, index) => {
    setObjId(item.id)
    setObjAvatar(item.avatar)
    setCurrentIndex(index)
    dispatch(changeCurrentObjAction(item))
  }
  return (
    <MessageWrapper>
      <MessageLeft>
        {chatList?.length > 0 ? (
          chatList?.map((item, index) => {
            return (
              <div
                className={classNames('user', {
                  active: currentIndex === index
                })}
                key={item.id}
                onClick={() => handleTabClick(item, index)}
              >
                <img src={item?.avatar} alt="" className="avatar" />
                <div className="username">{item?.username}</div>
              </div>
            )
          })
        ) : (
          <div className="user">空</div>
        )}
      </MessageLeft>
      <MessageRight>
        <div className="header">
          和<span>{currentObj?.username || ''}</span>
          的对话
          <i className="status">(连接状态{connectionStatus})</i>
        </div>
        <div className="message-list">
          {currentObj &&
            messageHistory.map(item => {
              if (item.fromId !== id) {
                return (
                  <div key={item.sendTime} className="message-box">
                    <img src={item.avatar} alt="" />
                    <div className="left">{item.text}</div>
                  </div>
                )
              } else {
                return (
                  <div key={item.sendTime} className="message-my">
                    <div className="right">{item.text}</div>
                    <img src={item.avatar} alt="" />
                  </div>
                )
              }
            })}
        </div>
        <hr />
        <div className="message-send">
          <TextArea
            rows={4}
            onChange={e => setMessageValue(e.target.value)}
            value={messageValue}
            onKeyUp={e => handleMessage(e)}
          />
          <Button
            htmlType="submit"
            onClick={() => handleSubmit()}
            className="btn-send"
          >
            发送
          </Button>
        </div>
      </MessageRight>
    </MessageWrapper>
  )
})

export default Message

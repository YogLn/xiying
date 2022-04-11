import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { Button, Input } from 'antd'
import {
  getChatListAction,
  changeChatListAction,
  getHistoryListAction
} from './store/actionCreator'
import { getTime } from '@/utils/format'
import { MessageWrapper, MessageLeft, MessageRight } from './style'

const Message = memo(props => {
  const { TextArea } = Input
  const id = window.localStorage.getItem('id')
  const myAvatar = window.localStorage.getItem('avatar')
  const dispatch = useDispatch()
  const [socketUrl] = useState(`ws://139.196.7.90:8080/websocket/${id}`)
  const [messageHistory, setMessageHistory] = useState([])
  const [messageValue, setMessageValue] = useState()
  const { state } = props?.location
  const objId = state.id
  const objAvatar = state.avatar
  let tag = false
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl)
  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated'
  }[readyState]

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory(prev =>
        prev.concat({ avatar: objAvatar, ...JSON.parse(lastMessage.data) })
      )
    }
  }, [lastMessage, setMessageHistory, objAvatar])

  const { chatList } = useSelector(
    state => ({
      chatList: state.getIn(['chat', 'chatList'])
    }),
    shallowEqual
  )

  if (state && chatList) {
    for (let item of chatList) {
      if (item?.id === state?.id) tag = true
    }
    if (!tag) {
      const newChatList = [...chatList, state]
      dispatch(changeChatListAction(newChatList))
    }
  }

  useEffect(() => {
    dispatch(getChatListAction())
    dispatch(getHistoryListAction(objId))
  }, [dispatch, objId])

  const handleSubmit = () => {
    sendMessage(
      JSON.stringify({
        formId: id,
        toId: state.id,
        text: messageValue
      })
    )
    setMessageHistory(prev =>
      prev.concat({
        avatar: myAvatar,
        formId: id,
        text: messageValue,
        sendTime: getTime()
      })
    )
    setMessageValue('')
  }
  console.log(messageHistory)

  return (
    <MessageWrapper>
      <MessageLeft>
        {chatList.length > 0 ? (
          chatList?.map(item => {
            return (
              <div className="user" key={item.id}>
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
          和<span>{state?.username || ''}</span>
          的对话
          <i className="status">(连接状态{connectionStatus})</i>
        </div>
        <div className="message-list">
          {messageHistory.map(item => {
            if (item.formId !== id) {
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
          />
          <Button
            htmlType="submit"
            onClick={() => handleSubmit()}
            type="primary"
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

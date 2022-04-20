import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import COS from 'cos-js-sdk-v5'
import { Modal, message } from 'antd'

import Upload from '@/components/upload'
import { addWorkRequest } from '@/services/rank'
import { getRankListAction } from '../store/actionCreators'
import { HeaderWrapper } from './style'

const Header = memo(() => {
  const dispatch = useDispatch()
  const [fileList, setFileList] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  // 图片上传
  const cos = new COS({
    SecretId: 'AKIDMYUAZgX7SW7TZOvBBuLVO1NSGn31jAKD',
    SecretKey: 'dz4sPecJjslMgkW2HFwNXP0LPChvtafT'
  })
  const uploadImg = files => {
    cos.putObject(
      {
        Bucket: 'blog-1304388092' /* 存储桶 */,
        Region: 'ap-chengdu' /* 存储桶所在地域，必须字段 */,
        Key: files.file.name /* 文件名 */,
        StorageClass: 'STANDARD', // 上传模式, 标准模式
        Body: files.file // 上传文件对象
      },
      async (err, data) => {
        // 上传成功之后
        if (data.statusCode === 200) {
          const res = await addWorkRequest({
            workUrl: `https:${data.Location}`
          })
          if (res.code === 200) {
            message.success('发布成功~')
            setIsModalVisible(false)
            dispatch(getRankListAction(1, 10))
            setFileList([])
          }
        }
      }
    )
  }

  const handleOk = async () => {
    if (!fileList) return
    await uploadImg(fileList[0])
  }

  const handleImgUpload = file => {
    setFileList([...fileList, file])
  }

  return (
    <HeaderWrapper>
      <div className="left">
        <NavLink to="/ranking/work/hot">最热作品排行</NavLink>
        <NavLink to="/ranking/work/new">最新作品排行</NavLink>
        <NavLink to="/ranking/user">摄影师排行</NavLink>
      </div>
      <div className="right" onClick={() => setIsModalVisible(true)}>
        发布作品
      </div>

      <Modal
        title="发布作品"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Upload handleImgUpload={handleImgUpload} />
      </Modal>
    </HeaderWrapper>
  )
})

export default Header

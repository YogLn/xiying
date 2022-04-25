import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import COS from 'cos-js-sdk-v5'
import { Modal, message, Button, Divider } from 'antd'

import Upload from '@/components/upload'
import RankAlbum from '@/components/rankAlbum'
import { joinActivityRequest } from '@/services/activity'
import { getActivityWorkListAction } from '../store/actionCreator'
import { putWorkLikeRequest } from '@/services/rank'
import { PageWrapper } from './style'

const ActivityPage = memo(props => {
  const dispatch = useDispatch()
  const { id } = props.match.params
  const [fileList, setFileList] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    dispatch(getActivityWorkListAction(id))
  }, [id, dispatch])

  const { activityWorkList } = useSelector(
    state => ({
      activityWorkList: state.getIn(['activity', 'activityWorkList'])
    }),
    shallowEqual
  )

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
          const res = await joinActivityRequest({
            campaignId: id,
            workUrl: `https:${data.Location}`
          })
          console.log(res)
          if (res.code === 200) {
            message.success('发布成功~')
            setIsModalVisible(false)
            dispatch(getActivityWorkListAction(id))
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
  // 点赞
  const handleLikeClick = async rankId => {
    await putWorkLikeRequest(rankId)
    dispatch(getActivityWorkListAction(id))
  }

  return (
    <PageWrapper>
      <Button className="right" onClick={() => setIsModalVisible(true)}>
        发布作品
      </Button>
      <Divider />
      <div className="list">
        {activityWorkList.map(item => {
          return (
            <RankAlbum
              key={item.campaignId}
              content={item}
              handleLike={handleLikeClick}
            />
          )
        })}
      </div>
      <Modal
        title="发布作品"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Upload handleImgUpload={handleImgUpload} />
      </Modal>
    </PageWrapper>
  )
})

export default ActivityPage

import React, { memo, useState } from 'react'
import { Button, Divider, Modal, Image, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import RightList from '../../components/right-list'
import Upload from '@/components/upload'
import { uploadImg } from '@/utils/upload'
import { addAlbumWorksRequest } from '@/services/album'
import { getAlbumWorksAction } from '../album/store/actionCreator';
import { PhotoWrapper, PhotoLeft, PhotoRight } from './style'

const Photo = memo(props => {
  const { albumId } = props.match.params
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [fileList, setFileList] = useState([])

  const { albumWorks } = useSelector(
    state => ({
      albumWorks: state.getIn(['album', 'albumWorks'])
    }),
    shallowEqual
  )
  const handleAddPhoto = async url => {
    const res = await addAlbumWorksRequest({
      url,
      albumId
    })
    if(res.code === 200) {
      message.success('添加成功~')
      dispatch(getAlbumWorksAction(albumId))
    }
  }
  const handleOk = async () => {
    if (!fileList) return
    await uploadImg(fileList[0])(handleAddPhoto)
  }
  const handleImgUpload = file => {
    setFileList([...fileList, file])
  }
  return (
    <PhotoWrapper>
      <PhotoLeft>
        <div className="control">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="btn"
            onClick={() => setIsModalVisible(true)}
          >
            添加照片
          </Button>
          <Divider />
        </div>
        <div className="list">
          {albumWorks.length === 0 ? (
            <div className="null">该相册为空~</div>
          ) : (
            albumWorks.map(item => {
              return (
                <div className="image" key={item.workId}>
                  <Image src={item.url} />
                </div>
              )
            })
          )}
        </div>
        <Modal
          title="添加图片"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={() => setIsModalVisible(false)}
        >
          <Upload handleImgUpload={handleImgUpload} />
        </Modal>
      </PhotoLeft>
      <PhotoRight>
        <RightList />
      </PhotoRight>
    </PhotoWrapper>
  )
})

export default Photo

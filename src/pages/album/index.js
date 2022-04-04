import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Button, Divider, Modal, Form, Input, Select, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import RightList from '../../components/right-list'
import Album from '@/components/album2'
import Upload from '@/components/upload'
import { uploadImg } from '@/utils/upload'

import { getMyAlbumListAction } from './store/actionCreator'
import { addAlbumRequest, deleteAlbumRequest } from '@/services/album'
import { AlbumWrapper, AlbumLeft, AlbumRight } from './style'

const AlbumList = memo(() => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [albumInfo, setAlbumInfo] = useState({})
  const [fileList, setFileList] = useState([])
  const { Option } = Select
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMyAlbumListAction())
  }, [dispatch])
  const { myAlbumList } = useSelector(
    state => ({
      myAlbumList: state.getIn(['album', 'myAlbumList'])
    }),
    shallowEqual
  )
    console.log(myAlbumList);
  const addAlbum = async url => {
    let obj = { ...albumInfo }
    if (url) {
      obj = { ...albumInfo, cover: url }
    }
    const res = await addAlbumRequest(obj)
    if (res.code === 200) {
      message.success('相册简历成功~')
      dispatch(getMyAlbumListAction())
    }
  }

  const handleOk = async () => {
    setIsModalVisible(false)
    await uploadImg(fileList[0])(addAlbum)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleImgUpload = file => {
    setFileList([...fileList, file])
  }

  const handleDeleteAlbum = async (id) => {
    deleteAlbumRequest(id)
    message.success('删除成功~')
    dispatch(getMyAlbumListAction())
  }

  const handleInputChange = (e, key) => {
    setAlbumInfo({
      ...albumInfo,
      [key]: e.target.value
    })
  }
  const handleSelectChange = value => {
    setAlbumInfo({
      ...albumInfo,
      isPrivate: value
    })
  }

  return (
    <AlbumWrapper>
      <AlbumLeft>
        <div className="control">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="btn"
            onClick={() => setIsModalVisible(true)}
          >
            添加相册
          </Button>
          <Divider />
        </div>
        <div className="list">
          {myAlbumList.length === 0 ? (
            <h2 className="null">相册列表为空~</h2>
          ) : (
            myAlbumList.map(item => {
              return (
                <Album
                  url={item.cover}
                  key={item.albumId}
                  albumId={item.albumId}
                  width="200px"
                  content={item}
                  showDelete={true}
                  handleDeleteAlbum={handleDeleteAlbum}
                />
              )
            })
          )}
        </div>
      </AlbumLeft>
      <AlbumRight>
        <RightList />
      </AlbumRight>

      <Modal
        title="添加相册"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={albumInfo}
          autoComplete="off"
          className="form"
        >
          <Form.Item
            label="相册名"
            name="albumName"
            rules={[{ required: true, message: '请输入相册名！' }]}
          >
            <Input
              value={albumInfo.albumName}
              onChange={e => handleInputChange(e, 'albumName')}
            />
          </Form.Item>
          <Form.Item label="是否私有" name="isPrivate">
            <Select
              initialvalues="否"
              style={{ width: 120 }}
              value={albumInfo.isPrivate}
              onChange={v => handleSelectChange(v)}
            >
              <Option value={1}>是</Option>
              <Option value={0}>否</Option>
            </Select>
          </Form.Item>
          <Form.Item label="相册封面" name="cover">
            <Upload handleImgUpload={handleImgUpload} />
          </Form.Item>
        </Form>
      </Modal>
    </AlbumWrapper>
  )
})

export default AlbumList

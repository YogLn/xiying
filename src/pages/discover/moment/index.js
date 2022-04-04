import React, { memo, useState, useRef } from 'react'
import COS from 'cos-js-sdk-v5'

import { Form, Input, Button, message } from 'antd'
import RightList from '@/components/right-list'
import Upload from '@/components/upload'
import { MomentWrapper, MomentLeft, MomentRight } from './style'
import { addPostListRequest } from '@/services/post'

const Moment = memo(() => {
  const [fileList, setFileList] = useState([])
  const formRef = useRef()
  const urls = []
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
      (err, data) => {
        // 上传成功之后
        if (data.statusCode === 200) {
          let imgUrl = `https:${data.Location}`
          urls.push(imgUrl)
          setFileList([])
        }
      }
    )
  }

  const onFinish = async values => {
    const token = window.localStorage.getItem('token')
    if (!token) {
      return message.error('您还没有登录~')
    }
    if (!fileList) return
    for (const file of fileList) {
      await uploadImg(file)
    }
    setTimeout(async () => {
      const res = await addPostListRequest({ urls, title: values.content })
      if (res.code === 200) {
        message.success('发布成功~')
        formRef.current.resetFields()
      }
    }, 1000)
  }
  const handleImgUpload = file => {
    setFileList([...fileList, file])
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  return (
    <MomentWrapper>
      <MomentLeft>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="form"
          ref={formRef}
        >
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '内容不能为空~' }]}
          >
            <Input.TextArea
              showCount
              maxLength={300}
              autoSize={{ minRows: 4 }}
            />
          </Form.Item>
          <Form.Item label="插入图片" name="image">
            <Upload handleImgUpload={handleImgUpload} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              发 布
            </Button>
          </Form.Item>
        </Form>
      </MomentLeft>
      <MomentRight>
        <RightList />
      </MomentRight>
    </MomentWrapper>
  )
})

export default Moment

import styled from 'styled-components'

export const CommentWrapper = styled.div`
  position: relative;
  width: 100%;
  .submit {
    position: absolute;
    right: 0;
    top: 100px;
  }
  .smile-two-tone {
    font-size: 20px;
    margin-top: 5px;
  }
  .emoji-mart {
    position: absolute;
    left: 0;
    bottom: 350px;
  }
  .comment-list {
    img {
      width: 45px;
      height: 45px;
    }
    .ant-comment-content-author-name {
      font-size: 14px;
      font-weight: bold;
      color: #000;
      cursor: pointer;
    }
    margin-top: 50px;
    .ant-comment-content {
      width: 100%;
      .ant-comment-actions {
        li {
          display: inline-block;
        }
      }
    }
  }
`

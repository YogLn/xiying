import styled from 'styled-components'

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 16%;
  background-color: #f7f8f9;
`
export const MessageLeft = styled.div`
  border: 1px solid #ccc;
  width: 30%;
  overflow-y: auto;
  background-color: #fff;

  .user {
    padding: 20px 0 20px 20px;
    height: 80px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .username {
      font-size: 20px;
      margin-left: 10px;
    }
  }
  .active {
    background-color: #aae979;
  }
`
export const MessageRight = styled.div`
  width: 65%;
  border: 1px solid #ccc;
  background-color: #fff;
  .header {
    background-color: #f6f6f6;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    border-radius: 4px 4px 0 0;
    color: #3d444d;
    span {
      color: #fc7123;
      margin: 0 5px;
      font-size: 18px;
    }
    i {
      font-size: 12px;
      color: #666;
      margin-left: 30px;
    }
  }
  .message-list {
    height: 400px;
    width: 100%;
    overflow-y: auto;
    .message-box {
      display: flex;
      margin: 10px;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: 0 15px;
      }
      .left {
        background-color: #ccc;
        padding: 5px 5px 3px;
        position: relative;
        &::before {
          content: '';
          display: inline-block;
          position: absolute;
          border: 6px solid #ccc;
          top: 10px;
          left: -12px;
          border-top-color: transparent;
          border-left-color: transparent;
          border-bottom-color: transparent;
        }
      }
    }
    .message-my {
      display: flex;
      justify-content: flex-end;
      margin: 10px;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: 0 15px;
      }
      .right {
        background-color: #aae979;
        padding: 5px 5px 3px;
        position: relative;
        word-break: break-all;
        &::after {
          content: '';
          display: inline-block;
          position: absolute;
          border: 6px solid #aae979;
          top: 10px;
          right: -12px;
          border-top-color: transparent;
          border-right-color: transparent;
          border-bottom-color: transparent;
        }
      }
    }
  }
  .message-send {
    padding: 10px 15px;
    .btn-send {
      margin: 5px 0 0 89%;
      background-color: #aae979;
    }
  }
`

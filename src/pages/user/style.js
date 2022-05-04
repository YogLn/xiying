import styled from 'styled-components'

export const UserWrapper = styled.div`
  padding: 0 13%;
  overflow: hidden;

  .info {
    position: relative;
    display: flex;
    margin: 10px 0 20px;
    border: 1px solid #ccc;

    .left {
      width: 12%;
      margin-right: 30px;
      img {
        width: 100%;
        margin: 20px 0 20px 20px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .name {
        font-size: 24px;
        font-weight: bold;
      }
      .info-detail {
        display: flex;
        margin: 25px 0;
        div {
          margin-right: 25px;
        }
      }
      .message {
        position: absolute;
        right: 20px;
        bottom: 20px;
        margin-left: auto;
        background-color: #62c82f;
        line-height: 24px;
        padding: 5px 10px;
        color: #fff;
        border-radius: 3px;
        cursor: pointer;
        letter-spacing: 2px;

        &:hover {
          background-color: #135c01;
        }
      }
      .photo {
        position: absolute;
        right: 100px;
        bottom: 20px;
        margin-left: auto;
        background-color: #62c82f;
        line-height: 24px;
        padding: 5px 10px;
        color: #fff;
        border-radius: 3px;
        cursor: pointer;
        letter-spacing: 2px;

        &:hover {
          background-color: #135c01;
        }
      }
      .message {
        position: absolute;
        right: 20px;
        bottom: 20px;
        margin-left: auto;
        background-color: #62c82f;
        line-height: 24px;
        padding: 5px 10px;
        color: #fff;
        border-radius: 3px;
        cursor: pointer;
        letter-spacing: 2px;

        &:hover {
          background-color: #135c01;
        }
      }
      .charge {
        position: absolute;
        right: 100px;
        bottom: 20px;
        margin-left: auto;
        background-color: #62c82f;
        line-height: 24px;
        padding: 5px 10px;
        color: #fff;
        border-radius: 3px;
        cursor: pointer;
        letter-spacing: 2px;

        &:hover {
          background-color: #135c01;
        }
      }
    }
  }
  .album {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .none {
      font-size: 18px;
      margin: 20px;
    }
  }
  .rank-list {
    display: flex;
  }
  .remark {
    padding: 0 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #f5f5f5;
    margin-top: 10px;
    .remark-left {
      display: flex;
      align-items: center;
      .user {
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .username {
          font-size: 18px;
          font-weight: bold;
          margin-left: 5px;
        }
      }
      .content {
        margin-left: 10px;
        font-size: 18px;
        color: #666;
      }
    }
  }
`

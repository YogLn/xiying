import styled from 'styled-components'

export const UserInfoWrapper = styled.div`
  margin: 10px;
  border-bottom: 3px solid #71cbd0;
  padding: 3px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .avatar {
    position: relative;
    cursor: pointer;

    img {
      width: 60px;
      height: 60px;
    }
    .rank {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 20px;
      height: 20px;
      font-size: 20px;
      color: #fff;
      background-color: #ff0000;
      border-radius: 50%;
      text-align: center;
      span {
        position: relative;
        top: -5px;
      }
    }
  }

  .username,
  .like {
    line-height: 20px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
  }
  .like {
    span {
      margin: 0 5px;
    }
  }
`

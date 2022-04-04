import styled from 'styled-components'

export const UserInfoWrapper = styled.div`
	margin: 10px;
  border: 3px solid #71CBD0;
  padding: 3px;
  cursor: pointer;
  .avatar {
    position: relative;
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

  .username {
    line-height: 20px;
    font-size: 20px;
    text-align: center;
  }
`

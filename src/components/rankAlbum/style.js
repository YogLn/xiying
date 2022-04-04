import styled from 'styled-components'

export const AlbumWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 10px;
  width: 23%;
  height: 350px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  .info,
  .like {
    display: none;
  }

  &:hover {
    .like {
      display: block;
      position: absolute;
      height: 30px;
      top: 0;
      left: 0;
      right: 0;
      span {
        padding-left: 5px;
      }
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 0, 0, 0.1) 100%
      );
      color: #fff;
      .text {
        margin-left: 85%;
        cursor: pointer;
      }
      .heart {
        font-size: 20px;
        line-height: 20px;
      }
    }
    .info {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 0, 0, 0.6) 80%
      );
      color: #fff;
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-left: 6px;
      }
      .username {
        margin-left: 5px;
        line-height: 30px;
        font-size: 18px;
      }
    }
  }
`

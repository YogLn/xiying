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
    height: 85%;
    object-fit: cover;
    cursor: pointer;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border: 1px solid #ccc;
    padding: 0 20px;
    background-color: #f5f5f5;
    .info {
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      .username {
        margin-left: 10px;
        cursor: pointer;
      }
    }
    .like {
      .text {
        cursor: pointer;
      }
    }
  }
`

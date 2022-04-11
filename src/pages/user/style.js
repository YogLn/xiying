import styled from 'styled-components'

export const UserWrapper = styled.div`
  padding: 0 200px;
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
        background-color: #62C82F;
        line-height: 24px;
        padding: 5px 10px;
        color: #fff;
        border-radius: 3px;
        cursor: pointer;
        letter-spacing: 2px;

        &:hover {
          background-color: #135C01;
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
`

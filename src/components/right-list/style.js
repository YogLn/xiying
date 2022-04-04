import styled from 'styled-components'

export const RIghtListWrapper = styled.div`
  position: fixed;
  padding: 10px 15px 10px 10px;
  border: 1px solid #ccc;
  .not-login {
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }

  .info {
    img {
      display: block;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin: 0 auto;
      border: 3px solid #666;
      box-shadow: 3px 5px #ccc;
    }
    .username {
      margin-top: 20px;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }
  }

  .list {
    .moment,
    .favor,
    .album,
    .help {
      padding-left: 6px;
      margin: 6px 0;
      font-size: 18px;
      color: #666;
      cursor: pointer;

      &:hover {
        color: #000;
      }
      span {
        margin-left: 8px;
      }
    }
  }
`

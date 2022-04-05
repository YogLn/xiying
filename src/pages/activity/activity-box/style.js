import styled from 'styled-components'

export const BoxWrapper = styled.div`
  width: 23%;
  margin: 0 20px 10px;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 1px 2px #ccc;
  transition: all 0.5s;
  &:hover {
    box-shadow: 3px 3px 4px 4px #ccc;
    transform: translateY(-2px);
  }
  .wrapper {
    .top {
      position: relative;
      .title {
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .status-ing {
        position: absolute;
        top: -15px;
        right: -10px;
        background-color: #f50000;
        border-radius: 5px 0 5px 5px;
        color: #fff;
      }
      .status-not {
        position: absolute;
        top: -15px;
        right: -10px;
        background-color: #ccc;
        border-radius: 5px 0 5px 5px;
        color: #666;
      }
    }
    .img {
      margin-top: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .time {
      margin-top: 20px;
      span {
        font-size: 15px;
        font-weight: bold;
      }
    }
  }
`

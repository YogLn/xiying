import styled from 'styled-components'

export const BoxWrapper = styled.div`
  width: 255px;
  margin: 10px;
  cursor: pointer;
  .image {
    width: 250px;
    height: 250px;
    background-color: #f9f9f9;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .name {
    .content {
      margin-top: 5px;
      font-size: 14px;
      line-height: 18px;
      font-weight: normal;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      margin-left: 3px;
      &:hover {
        text-decoration: underline;
      }
    }
    .tag {
      border: 1px solid #d74d45;
      overflow: hidden;
      box-sizing: border-box;
      line-height: 19px;
      padding: 0 3px;
      border-radius: 1px;
      color: #d74d45;
      font-size: 12px;
    }
  }

  .price {
    font-size: 16px;
    color: #d33a31;
    text-align: center;
  }
`

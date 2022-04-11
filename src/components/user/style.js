import styled from 'styled-components'

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .message {
    font-size: 20px;
    margin-right: 10px;
    padding: 5px;
    &:hover {
      background-color: #f8f8f8;
    }
  }
  .info {
    cursor: pointer;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    span {
      margin-left: 10px;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .ant-modal {
    .ant-modal-body {
      padding-right: 50px !important;
    }
  }
`

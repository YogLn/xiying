import styled from 'styled-components'

export const UserInfoWrapper = styled.div`
  cursor: pointer;
  .info {
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
    .ant-modal-body{
      padding-right: 50px !important;
    }
  }
`

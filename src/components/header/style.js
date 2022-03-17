import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #000;
  padding: 10px 20px;
  height: 65px;
  line-height: 65px;
`
export const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .title-left {
    margin: 0 15px 0 20px;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    margin-right: 15px;
    text-decoration: none;
    /* color: #000; */
    background-image: -webkit-linear-gradient(bottom, red, #999, magenta);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: move 2s linear infinite;
  }

  @keyframes move {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(2px);
    }
    75% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-2px);
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .title-right {
    margin: 0 8px;

    .login {
      height: 40px;
      line-height: 30px;
      border: 1px solid #ccc;
      border-radius: 30px;
      padding: 5px 15px;
      color: #000;
      font-size: 14px;
      cursor: pointer;
    }

    .register {
      height: 40px;
      line-height: 30px;
      border: 1px solid #ccc;
      border-radius: 30px;
      padding: 5px 15px;
      background-color: #0057ff;
      color: #ffffff;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        background-color: #003ecb;
      }
    }
  }
`

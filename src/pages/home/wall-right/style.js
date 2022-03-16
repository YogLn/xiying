import styled from 'styled-components'

export const WallWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
  margin: 30px 0;
`
export const WallLeft = styled.div`
  width: 30%;
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .desc {
    text-align: center;
    font-size: 16px;
    letter-spacing: 2px;
    color: #666;
  }

  .btn {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid #999;
    color: #000;
    padding: 10px;
    cursor: pointer;
  }
`
export const WallRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

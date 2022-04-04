import styled from 'styled-components'

export const PhotoWrapper = styled.div`
  padding: 0 180px;
  display: flex;
  justify-content: space-between;
`
export const PhotoLeft = styled.div`
  margin-top: 10px;
  width: 81%;
  padding: 10px 20px;
  border: 1px solid #ccc;
  .btn {
    margin-left: 85%;
    margin-top: 5px;
    border-radius: 5px;
  }
  .list {
    display: flex;

    .null {
      text-align: center;
      width: 100%;
      font-size: 18px;
      margin-top: 30%;
    }

    .image {
      width: 250px;
      height: 250px;
      margin: 10px;
    }
  }
`
export const PhotoRight = styled.div`
  margin-top: 10px;
  width: 18%;
  height: 100%;
`

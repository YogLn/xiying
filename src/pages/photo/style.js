import styled from 'styled-components'

export const PhotoWrapper = styled.div`
  padding: 0 12%;
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
      width: 20%;
      margin: 10px;
      overflow: hidden;
      position: relative;
      object-fit: fill;
      .img {
        width: 100%;
        height: 160px;
        object-fit: fill;
      }
      .btn-delete {
        position: absolute;
        right: 0;
        /* top: -15px; */
        cursor: pointer;
      }
    }
  }
`
export const PhotoRight = styled.div`
  margin-top: 10px;
  width: 18%;
  height: 100%;
`

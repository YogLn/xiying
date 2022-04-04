import styled from 'styled-components'

export const AlbumWrapper = styled.div`
  padding: 0 180px;
  display: flex;
  justify-content: space-between;
`
export const AlbumLeft = styled.div`
  margin-top: 10px;
  width: 81%;
  padding: 10px 20px 50px;
  border: 1px solid #ccc;
  .btn {
    margin-left: 85%;
    margin-top: 5px;
    border-radius: 5px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
  }
`
export const AlbumRight = styled.div`
  margin-top: 10px;
  width: 18%;
  height: 100%;
`

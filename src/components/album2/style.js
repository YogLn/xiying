import styled from 'styled-components'

export const AlbumWrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.width};
  cursor: pointer;
  display: inline-block;
  position: relative;
  margin: 10px 10px 30px;
  padding: 20px;
  background: #fafafa;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  -moz-border-radius: 4px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 0 1px 0 #fff;

  .delete {
    position: absolute;
    right: 6px;
    top: 6px;
  }
  .private {
    position: absolute;
    left: 6px;
    top: 6px;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    top: 10px;
    bottom: 15px;
    left: 10px;
    width: 50%;
    box-shadow: 0 15px 10px rgba(0, 0, 0, 0.5);
    -webkit-transform: rotate(-3deg);
    -moz-transform: rotate(-3deg);
    -o-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
    z-index: -1;
  }
  &::after {
    right: 10px;
    left: auto;
    -webkit-transform: rotate(3deg);
    -moz-transform: rotate(3deg);
    -o-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }

  .name {
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
  }
`

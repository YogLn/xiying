import styled from 'styled-components'

export const PostImgWrapper = styled.div`
  img {
    width: ${props => props.width};
		height: 350px;
    object-fit: cover;
    margin: 5px;
    border: 1px solid #ccc;
    box-shadow: 3px 5px #999;
    cursor: pointer;
  }
`

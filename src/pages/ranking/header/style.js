import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 30px 10px 0;
	font-size: 14px;
  font-family: "Times New Roman", Times, serif;
  .left {
    a {
      cursor: pointer;
      display: inline-block;
      margin: 0 5px;
      &:hover,
      &.active {
        text-decoration: none;
        border-bottom: 3px solid #1E80FF;
      }
    }
  }

  .right {
    cursor: pointer;
  }
`

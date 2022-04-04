import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  .banner {
    position: relative;
    .image {
      height: calc(100vh - 145px);
      object-fit: cover;
    }

    .btn {
      position: absolute;
      width: 37px;
      height: 64px;
      background-image: url(${require('@/assets/img/banner_sprite.png')});
      background-color: transparent;
      cursor: pointer;
      transform: translateY(-50%);

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    .left {
      top: 50%;
      background-position: 0 -360px;
    }

    .right {
      right: 0;
      top: 50%;
      background-position: 0 -508px;
    }
  }

  .desc {
    margin: 30px 0;
    padding: 0 80px;
    text-align: center;
    letter-spacing: 2px;
    text-indent: 2em;
  }
`

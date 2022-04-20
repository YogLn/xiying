import styled from 'styled-components'

export const BannerWrapper = styled.div`
  /* padding: 5px 200px; */
  .banner {
    position: relative;
    background-color: #f5f5f5;
    .image {
      height: 450px;
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
        background-color: rgba(0, 0, 0, 0.7);
      }
    }

    .left {
      top: 50%;
      background-position: 0 -360px;
      background-color: rgba(0, 0, 0, 0.1);
    }

    .right {
      right: 0;
      top: 50%;
      background-position: 0 -508px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .list {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    line-height: 80px;
    border: 1px solid #e6e6e6;
    .item {
      width: 150px;
      height: 80px;
      cursor: pointer;
    }
    .line {
      display: inline-block;
      height: 48px;
      width: 1px;
      margin: 16px 0 16px 0;
      background-color: #000000;
      filter: alpha(opacity=10);
      -moz-opacity: 0.1;
      opacity: 0.1;
    }
  }
`

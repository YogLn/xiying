import styled from 'styled-components'

export const DetailWrapper = styled.div`
  padding: 30px 200px;
  .header {
    display: flex;
    justify-content: space-between;
    .home {
      display: flex;
      .home-name {
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .name {
        margin-left: 20px;
        font-size: 16px;
        font-weight: 600;
        color: #999;
      }
    }

    .share {
      margin-top: 11px;
      font-size: 16px;
      text-indent: 27px;
      color: #666;
      cursor: pointer;
      img {
        position: relative;
        top: -3px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .info {
    display: flex;
    justify-content: space-around;
    .banner {
      width: 50%;
      background-color: #e0e0e0;

      img {
        object-fit: cover;
      }
    }
    .buy {
      width: 45%;
      .name {
        line-height: 34px;
        color: #333;
        font-size: 24px;
      }
      .desc {
        font-size: 14px;
        margin-top: 8px;
        color: #999;
      }
      .price {
        margin: 20px 4px 20px 0;
        font-size: 30px;
        color: #d33a31;
      }
      .num {
        display: flex;
        margin: 10px 0;
        font-size: 20px;
        .btn {
          display: inline-block;
          width: 34px;
          height: 30px;
          border: 1px solid #e5e5e5;
          text-align: center;
          cursor: pointer;
        }
        .number {
          margin: 0 20px;
        }
      }
      .serve,
      .stock {
        position: relative;
        margin: 10px 0;
        line-height: 20px;
        margin-right: 28px;
        color: #666;
        margin-top: 20px;
      }
      .all-price {
        font-size: 18px;
      }
      .btn-ctl {
        display: flex;
        justify-content: space-around;
        .buy {
          box-sizing: border-box;
          line-height: 47px;
          width: 170px;
          height: 50px;
          line-height: 50px;
          margin-top: 30px;
          font-size: 18px;
          box-sizing: border-box;
          border: 2px solid #62c82f;
          color: #000;
          font-size: 18px;
          text-align: center;
          cursor: pointer;
        }
        .add-shop-cart {
          width: 170px;
          height: 50px;
          line-height: 50px;
          margin-top: 30px;
          font-size: 18px;
          background-color: #62c82f;
          text-align: center;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
`

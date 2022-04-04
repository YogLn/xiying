import styled from 'styled-components'

export const DetailWrapper = styled.div`
padding-top: 10px;
	margin: 0 200px;
	border: 1px solid #ccc;
	.title {
		text-align: center;
		margin: 10px;
		font-weight: bold;
	}
	.time {
		margin-top: 20px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		span {
			font-size: 15px;
			font-weight: bold;
		}
	}

	.img {
		width: 90%;
		height: 350px;
		margin: 0 auto;
		margin-top: 40px;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
	.detail {
		padding: 40px;
		font-size: 15px;
		text-indent: 2em;
	}
`

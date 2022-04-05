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

	.image {
		width: 400px;
		margin: 0 auto;
		margin-top: 40px;
	}
	.detail {
		padding: 40px;
		font-size: 15px;
		text-indent: 2em;
	}
`

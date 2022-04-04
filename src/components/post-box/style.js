import styled from 'styled-components'

export const PostBoxWrapper = styled.div`
	margin: 10px 0;
	border: 1px solid #ccc;
	padding: 10px 20px;
	.top {
		padding: 20px 20px;
		display: flex;
		height: 45px;
		line-height: 50px;
		justify-content: space-between;
		align-items: center;

		.user {
			cursor: pointer;
			.avatar {
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
			.username {
				margin-left: 20px;
				font-size: 20px;
				font-weight: bold;
			}
		}
		.time {
			font-size: 16px;
			color: #999;

			.text, .delete {
				margin-left: 8px;
			}
			.delete {
				color: #ff0000;
				font-size: 12px;
				cursor: pointer;
			}
		}
	}

	.center {
		.content {
			font-size: 15px;
			color: #000;
			margin: 20px 0;
			padding-left: 15px;
		}
	}

	.footer {
		position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-top: 0 40px;
		height: 10px;
		top: -5px;

		span {
			padding-left: 4px;
		}

		.like, .favor, .comment {
			cursor: pointer;
		}
	}

`
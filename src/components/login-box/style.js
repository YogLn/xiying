import styled from 'styled-components'

export const LoginBoxWrapper = styled.div`
	width: 400px;
	border: 1px solid #ccc;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.3);
	
	.title {
		font-size:24px;
		text-align: center;
		margin-top: 30px;
		font-weight: bold;
		letter-spacing: 4px;
	}
	.form {
		margin: 30px 55px 0 0;

		.ant-btn-primary {
			margin-right: 12px;
		}
	}
`
import React, { memo } from 'react'
import { LoadingWrapper } from './style';
export default memo(function Loading() {
	return (
		<LoadingWrapper>
			<div className="loader"></div>
		</LoadingWrapper>
	)
})

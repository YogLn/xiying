import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux';

import { getPostListAction } from '@/pages/discover/store/actionCreators';
import { backTop } from '@/utils/view.js';
import { Pagination } from 'antd';
import { PaginationWrapper } from './style'

export default memo(function MyPagination(props) {
	const { total } = props
	const dispatch = useDispatch()
	
	const onShowSizeChange = useCallback((current, size) => {
		dispatch(getPostListAction(current + 1,  size))
		backTop()
	}, [dispatch])

	const pageChange = useCallback((page, pageSize) => {
		dispatch(getPostListAction(page, pageSize))
		backTop()
	}, [dispatch])

  return (
    <PaginationWrapper>
      <Pagination
        showSizeChanger
				defaultPageSize={5}
				defaultCurrent={1}
        total={total}
				pageSizeOptions={['5', '10', '15', '20']}
				onChange={pageChange}
        onShowSizeChange={onShowSizeChange}
				className="pagination"
      />
    </PaginationWrapper>
  )
})

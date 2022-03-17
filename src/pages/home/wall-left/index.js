import React, { memo } from 'react'
import Ablum from '@/components/album';
import {WallWrapper, WallLeft, WallRight} from './style';

const Wall = memo((props) => {
	const {title, desc, list} = props
	return (
		<WallWrapper>
			<WallLeft>
				<div className="title">{title}</div>
				<div className="desc">{desc}</div>
				<button className="btn">相册集合</button>
			</WallLeft>
			<WallRight>
				{
					list.map(item=> {
						return <Ablum url={item} key={item}/>
					})
				}
			</WallRight>
		</WallWrapper>
	)
})

export default Wall
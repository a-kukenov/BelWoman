import cn from 'classnames'
import styles from './Photo.module.css'
import { useState } from 'react'

function Photo(props: any) {
	const [isError, setIsError] = useState(false)

	const getInitials = (name: string): string => {
		let arr = name.replace('(', '').replace(')', '').split(' ')
		return arr[0][0] + (arr[1] ? arr[1][0] : '')
	}

	if(isError || !props.src){
		return (
			<div className={cn(styles['photo-empty'], props.className)}>
				<span>{getInitials(props.name)}</span>
			</div>
		)
	}
	return (
		<img className={cn(styles['photo'], props.className)} src={props.src} alt={props.name} onError={() => {setIsError(true)}} />
	)
}
export default Photo

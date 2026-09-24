import cn from 'classnames'
import styles from './RenderSteps.module.css'
import { NavLink } from 'react-router-dom'
import { IStep } from '../../interfaces/interfaces'

import { FaBookOpen } from "react-icons/fa";
import { FaLandmark } from "react-icons/fa";
import { FaFeatherAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

function RenderSteps(props: any) {
	const steps: IStep[] = props.steps

	const renderIcon = (num: number) => {
		switch (num) {
			case 0:
				return <FaBookOpen />
			case 1:
				return <FaLandmark />
			case 2:
				return <FaFeatherAlt />
			case 3:
				return <FaChartBar />
		}
	}

	return (
		<div className={cn(styles['steps'])}>
			{steps.map((step: IStep, index: number) => (
				<div className={cn(styles['step'])} key={index}>
					<div className={cn(styles['plate'])}>{renderIcon(index)}</div>
					<p className={cn(styles['step-range'])}>{step.range}</p>
					<h3 className={cn(styles['step-title'])}>{index + 1}. {step.title}</h3>
					<p className={cn(styles['step-text'])}>{step.text}</p>
					<NavLink to={step.link} className={cn(styles['more'])} style={{color: `${props.theme}`}}>{props.more}</NavLink>
				</div>
			))}
		</div>
	)
}
export default RenderSteps

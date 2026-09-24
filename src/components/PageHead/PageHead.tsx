import cn from 'classnames'
import styles from './PageHead.module.css'

function PageHead(props: any) {
    return (
        <div className={cn(styles['page-head'], props.center ? styles['center'] : '')}>
            <p className={cn(styles['eyebrow'])}>{props.eyebrow}</p>
            {props.big ? <h1 className={cn(styles['title-big'])}>{props.title}</h1> : <h2 className={cn(styles['title'])}>{props.title}</h2>}
            {props.lead ? <p className={cn(styles['lead'])}>{props.lead}</p> : null}
        </div>
    );
}
export default PageHead;

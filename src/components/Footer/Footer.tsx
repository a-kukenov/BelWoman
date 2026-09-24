import cn from 'classnames'
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import { useStore } from '../../storage/storage'
import { LANG } from '../../lang/lang'

function Footer(props: any) {
    const lang = useStore((state: any) => state.lang)
    const t = LANG[lang]

    return (
        <footer className={cn(styles['footer'])} style={{background: `${props.theme}`}}>
            <div className={cn(styles['footer-grid'])}>
                <div className={cn(styles['footer-about'])}>
                    <NavLink to={'/home'} className={cn(styles['footer-brand'])}>{t.brand}<span className={cn(styles['brand-dot'])}></span></NavLink>
                    <p className={cn(styles['footer-note'])}>{t.footer.note}</p>
                </div>
                <div className={cn(styles['footer-col'])}>
                    <h3>{t.footer.sections}</h3>
                    <NavLink to={'/history'}>{t.footer.links[0]}</NavLink>
                    <NavLink to={'/portraits'}>{t.footer.links[1]}</NavLink>
                    <NavLink to={'/war'}>{t.footer.links[2]}</NavLink>
                    <NavLink to={'/today'}>{t.footer.links[3]}</NavLink>
                </div>
                <div className={cn(styles['footer-col'])}>
                    <h3>{t.footer.interactive}</h3>
                    <NavLink to={'/quiz'}>{t.footer.links2[0]}</NavLink>
                    <NavLink to={'/sources'}>{t.footer.links2[1]}</NavLink>
                </div>
                {/* <div className={cn(styles['footer-col'])}>
                    <h3>2026</h3>
                    <p className={cn(styles['footer-small'])}>{t.footer.year}</p>
                </div> */}
            </div>
            <div className={cn(styles['footer-bottom'])}>
                <span>{t.footer.bottom}</span>
            </div>
        </footer>
    );
}
export default Footer;

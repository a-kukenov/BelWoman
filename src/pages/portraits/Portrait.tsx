import cn from 'classnames'
import styles from '../Pages.module.css'
import { useEffect, useState } from 'react'
import { useStore } from '../../storage/storage'
import { ACCENT } from '../../data'
import { LANG } from '../../lang/lang'
import PageHead from '../../components/PageHead/PageHead.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import { NavLink, useParams } from 'react-router-dom'
import { PORTRAITS } from '../../data'
import Photo from '../../components/Photo/Photo.tsx'

function Portrait() {
	const [theme, setTheme] = useState<string>(ACCENT);
	const themeStr = useStore((state: any) => state.theme)
	const lang = useStore((state: any) => state.lang)
	const t = LANG[lang]

    useEffect(() => {
        const savedTheme = localStorage.getItem('accent');
        setTheme(savedTheme || ACCENT);
    }, [themeStr]);
	const { id } = useParams()

    const p = PORTRAITS.find((item: any) => item.id == id)

    if(!p){
        return <div className={cn(styles['section-container'])}><NavLink to={'/portraits'}>{t.portraits.backShort}</NavLink></div>
    }

    const person = t.people[p.id]

    return (
        <div className={cn(styles['main-container'])}>
            <section className={cn(styles['section-container'])}>
                <NavLink to={'/portraits'} className={cn(styles['back'])} style={{color: `${theme}`}}>{t.portraits.back}</NavLink>
                <div className={cn(styles['person'])}>
                    <div className={cn(styles['person-photo'])}><Photo src={p.photo} name={person.name} /></div>
                    <div className={cn(styles['person-info'])}>
                        <PageHead big eyebrow={t.epochs[p.epoch]} title={person.name} />
                        <p className={cn(styles['text'])}>{person.bio}</p>
                        <div className={cn(styles['person-facts'])}>
                            <div><b>{t.portraits.years}</b><span>{person.years}</span></div>
                            <div><b>{t.portraits.place}</b><span>{person.region}</span></div>
                            <div><b>{t.portraits.subject}</b><span>{person.subject}</span></div>
                        </div>
                        <a className={cn(styles['btn-outline'])} href={p.source} target="_blank">{t.portraits.source}</a>
                    </div>
                </div>
            </section>
            <Footer theme={theme} />
        </div>
    );
}
export default Portrait;

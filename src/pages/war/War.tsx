import cn from 'classnames'
import styles from '../Pages.module.css'
import { useEffect, useState } from 'react'
import { useStore } from '../../storage/storage'
import { ACCENT } from '../../data'
import { LANG } from '../../lang/lang'
import PageHead from '../../components/PageHead/PageHead.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import { NavLink } from 'react-router-dom'
import { PORTRAITS } from '../../data'
import Photo from '../../components/Photo/Photo.tsx'

function War() {
	const [theme, setTheme] = useState<string>(ACCENT);
	const themeStr = useStore((state: any) => state.theme)
	const lang = useStore((state: any) => state.lang)
	const t = LANG[lang]

    useEffect(() => {
        const savedTheme = localStorage.getItem('accent');
        setTheme(savedTheme || ACCENT);
    }, [themeStr]);

    const heroes = PORTRAITS.filter((p: any) => p.epoch == 3 || p.id == 'kazei')

    return (
        <div className={cn(styles['main-container'])}>
            <section className={cn(styles['section-container'])}>
                <PageHead big eyebrow={t.war.eyebrow} title={t.war.title} lead={t.war.lead} />
                <div className={cn(styles['big-nums'])}>
                    {t.war.nums.map((n: any, index: number) => (
                        <div className={cn(styles['big-num'])} key={index}><b style={{color: `${theme}`}}>{n.num}</b><span>{n.text}</span></div>
                    ))}
                </div>
                <div className={cn(styles['cards'])}>
                    {heroes.map((p: any) => (
                        <NavLink to={'/portraits/' + p.id} className={cn(styles['card'])} key={p.id}>
                            <div className={cn(styles['card-photo'])}><Photo src={p.photo} name={t.people[p.id].name} /></div>
                            <div className={cn(styles['card-body'])}>
                                <p className={cn(styles['card-meta'])}>{t.people[p.id].years} · {t.people[p.id].region}</p>
                                <h3 className={cn(styles['card-title'])}>{t.people[p.id].name}</h3>
                                <p className={cn(styles['card-text'])}>{t.people[p.id].short}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
                <div className={cn(styles['note'])}>
                    <h3 className={cn(styles['note-title'])}>{t.war.noteTitle}</h3>
                    <p className={cn(styles['text'])}>{t.war.noteText}</p>
                    <NavLink to={'/home#volskaya'} className={cn(styles['btn-outline'])}>{t.war.noteBtn}</NavLink>
                </div>
            </section>
            <Footer theme={theme} />
        </div>
    );
}
export default War;

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

function Portraits() {
	const [theme, setTheme] = useState<string>(ACCENT);
	const themeStr = useStore((state: any) => state.theme)
	const lang = useStore((state: any) => state.lang)
	const t = LANG[lang]

    useEffect(() => {
        const savedTheme = localStorage.getItem('accent');
        setTheme(savedTheme || ACCENT);
    }, [themeStr]);
	const [epoch, setEpoch] = useState(0)

    let list = epoch == 0 ? PORTRAITS : PORTRAITS.filter((p: any) => p.epoch == epoch)

    return (
        <div className={cn(styles['main-container'])}>
            <section className={cn(styles['section-container'])}>
                <PageHead big eyebrow={t.portraits.eyebrow} title={t.portraits.title} lead={t.portraits.lead} />
                <div className={cn(styles['filters'])}>
                    {t.epochs.map((item: string, index: number) => (
                        <button className={cn(styles['filter'], epoch == index ? styles['filter-act'] : '')} key={index} onClick={() => {setEpoch(index)}} style={epoch == index ? {background: `${theme}`} : {}}>{item}</button>
                    ))}
                </div>
                <div className={cn(styles['cards'])}>
                    {list.map((p: any) => (
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
            </section>
            <Footer theme={theme} />
        </div>
    );
}
export default Portraits;

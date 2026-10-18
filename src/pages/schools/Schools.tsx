import cn from 'classnames'
import styles from '../Pages.module.css'
import { useEffect, useState } from 'react'
import { useStore } from '../../storage/storage.ts'
import { ACCENT } from '../../data.ts'
import { LANG } from '../../lang/lang.ts'
import PageHead from '../../components/PageHead/PageHead.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import { NavLink } from 'react-router-dom'
import { SCHOOLS } from '../../data.ts'
import Photo from '../../components/Photo/Photo.tsx'

function schools() {
	const [theme, setTheme] = useState<string>(ACCENT);
	const themeStr = useStore((state: any) => state.theme)
	const lang = useStore((state: any) => state.lang)
	const t = LANG[lang]

    useEffect(() => {
        const savedTheme = localStorage.getItem('accent');
        setTheme(savedTheme || ACCENT);
    }, [themeStr]);
	const [epoch, setEpoch] = useState(0)

    let list = epoch == 0 ? SCHOOLS : SCHOOLS.filter((p: any) => p.epoch == epoch)

    return (
        <div className={cn(styles['main-container'])}>
            <section className={cn(styles['section-container'])}>
                <PageHead big eyebrow={t.schools.eyebrow} title={t.schools.title} lead={t.schools.lead} />
                <div className={cn(styles['filters'])}>
                    {t.schooltypes.map((item: string, index: number) => (
                        <button className={cn(styles['filter'], epoch == index ? styles['filter-act'] : '')} key={index} onClick={() => {setEpoch(index)}} style={epoch == index ? {background: `${theme}`} : {}}>{item}</button>
                    ))}
                </div>
                <div className={cn(styles['cards'])}>
                    {list.map((p: any) => (
                        <NavLink to={'/schools/' + p.id} className={cn(styles['card'])} key={p.id}>
                            <div className={cn(styles['card-photo'])}><Photo src={p.photo} name={t.places[p.id].name} /></div>
                            <div className={cn(styles['card-body'])}>
                                <p className={cn(styles['card-meta'])}>{t.places[p.id].years} · {t.places[p.id].region}</p>
                                <h3 className={cn(styles['card-title'])}>{t.places[p.id].name}</h3>
                                <p className={cn(styles['card-text'])}>{t.places[p.id].short}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </section>
            <Footer theme={theme} />
        </div>
    );
}
export default schools;

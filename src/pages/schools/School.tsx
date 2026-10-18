import cn from 'classnames'
import styles from '../Pages.module.css'
import { useEffect, useState } from 'react'
import { useStore } from '../../storage/storage.ts'
import { ACCENT } from '../../data.ts'
import { LANG } from '../../lang/lang.ts'
import PageHead from '../../components/PageHead/PageHead.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import { NavLink, useParams } from 'react-router-dom'
import { SCHOOLS } from '../../data.ts'
import Photo from '../../components/Photo/Photo.tsx'

function School() {
	const [theme, setTheme] = useState<string>(ACCENT);
	const themeStr = useStore((state: any) => state.theme)
	const lang = useStore((state: any) => state.lang)
	const t = LANG[lang]

    useEffect(() => {
        const savedTheme = localStorage.getItem('accent');
        setTheme(savedTheme || ACCENT);
    }, [themeStr]);

    useEffect(() => {
        window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', 
    });
    })
	const { id } = useParams()

    const p = SCHOOLS.find((item: any) => item.id == id)

    if(!p){
        return <div className={cn(styles['section-container'])}><NavLink to={'/schools'}>{t.portraits.backShort}</NavLink></div>
    }

    const school = t.places[p.id]

    return (
        <div className={cn(styles['main-container'])}>
            <section className={cn(styles['section-container'])}>
                <NavLink to={'/schools'} className={cn(styles['back'])} style={{color: `${theme}`}}>{t.schools.back}</NavLink>
                <div className={cn(styles['person'])}>
                    <div className={cn(styles['person-photo'])}><Photo src={p.photo} name={school.name} /></div>
                    <div className={cn(styles['person-info'])}>
                        <PageHead big eyebrow={t.schooltypes[p.epoch]} title={school.name} />
                        <p className={cn(styles['text'])}>{school.bio}</p>
                        <div className={cn(styles['person-facts'])}>
                            <div><b>{t.schools.years}</b><span>{school.years}</span></div>
                            <div><b>{t.portraits.place}</b><span>{school.region}</span></div>
                            <div><b>{t.portraits.subject}</b><span>{school.subject}</span></div>
                        </div>
                        <a className={cn(styles['btn-outline'])} href={p.source} target="_blank">{t.portraits.source}</a>
                    </div>
                </div>
            </section>
            <Footer theme={theme} />
        </div>
    );
}
export default School;

import cn from 'classnames'
import styles from '../Pages.module.css'
import { useEffect, useState } from 'react'
import { useStore } from '../../storage/storage'
import { ACCENT } from '../../data'
import { LANG } from '../../lang/lang'
import PageHead from '../../components/PageHead/PageHead.tsx'
import Footer from '../../components/Footer/Footer.tsx'

function Today() {
	const [theme, setTheme] = useState<string>(ACCENT);
	const themeStr = useStore((state: any) => state.theme)
	const lang = useStore((state: any) => state.lang)
	const t = LANG[lang]

    useEffect(() => {
        const savedTheme = localStorage.getItem('accent');
        setTheme(savedTheme || ACCENT);
    }, [themeStr]);
	const [isShown, setIsShown] = useState(false)

    const values: number[] = [18.3, 10.8, 10, 10, 9.8]

    useEffect(() => {
        // чтобы полоски выезжали
        setTimeout(() => {setIsShown(true)}, 200)
    }, [])

    return (
        <div className={cn(styles['main-container'])}>
            <section className={cn(styles['section-container'])}>
                <PageHead big eyebrow={t.today.eyebrow} title={t.today.title} lead={t.today.lead} />
                <div className={cn(styles['big-nums'])}>
                    {t.today.nums.map((n: any, index: number) => (
                        <div className={cn(styles['big-num'])} key={index}><b style={{color: `${theme}`}}>{n.num}</b><span>{n.text}</span></div>
                    ))}
                </div>
                <h2 style={{fontSize: '30px', marginBottom: '28px'}}>{t.today.barsTitle}</h2>
                <div className={cn(styles['bars'])}>
                    {t.today.subjects.map((name: string, index: number) => (
                        <div className={cn(styles['bar-row'])} key={index}>
                            <span>{name}</span>
                            <div className={cn(styles['bar-track'])}><div className={cn(styles['bar'])} style={{width: values[index] * 5, background: `${theme}`}}></div></div>
                            <b>{values[index]}%</b>
                        </div>
                    ))}
                </div>
                <div className={cn(styles['note'])}>
                    <h3 className={cn(styles['note-title'])}>{t.today.noteTitle}</h3>
                    <p className={cn(styles['text'])}>{t.today.noteText}</p>
                </div>
            </section>
            <Footer theme={theme} />
        </div>
    );
}
export default Today;

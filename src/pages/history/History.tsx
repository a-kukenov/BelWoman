import cn from 'classnames'
import styles from '../Pages.module.css'
import { useEffect, useState } from 'react'
import { useStore } from '../../storage/storage'
import { ACCENT } from '../../data'
import { LANG } from '../../lang/lang'
import PageHead from '../../components/PageHead/PageHead.tsx'
import Footer from '../../components/Footer/Footer.tsx'

function History() {
	const [theme, setTheme] = useState<string>(ACCENT);
	const themeStr = useStore((state: any) => state.theme)
	const lang = useStore((state: any) => state.lang)
	const t = LANG[lang]

    useEffect(() => {
        const savedTheme = localStorage.getItem('accent');
        setTheme(savedTheme || ACCENT);
    }, [themeStr]);

    return (
        <div className={cn(styles['main-container'])}>
            <section className={cn(styles['section-container'])}>
                <PageHead big eyebrow={t.history.eyebrow} title={t.history.title} lead={t.history.lead} />
                <div className={cn(styles['timeline'])}>
                    {t.timeline.map((era: any, index: number) => (
                        <div className={cn(styles['era'])} id={'era-' + (index + 1)} key={index}>
                            <p className={cn(styles['era-year'])}>{era.year}</p>
                            <h3 className={cn(styles['era-title'])}>{era.title}</h3>
                            <p className={cn(styles['text'])}>{era.text}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer theme={theme} />
        </div>
    );
}
export default History;

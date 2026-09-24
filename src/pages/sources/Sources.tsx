import cn from 'classnames'
import styles from '../Pages.module.css'
import { useEffect, useState } from 'react'
import { useStore } from '../../storage/storage'
import { ACCENT } from '../../data'
import { LANG } from '../../lang/lang'
import PageHead from '../../components/PageHead/PageHead.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import { PORTRAITS, OTHER_SOURCES } from '../../data'

function Sources() {
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
                <PageHead big eyebrow={t.sources.eyebrow} title={t.sources.title} lead={t.sources.lead} />
                <div className={cn(styles['src-group'])}>
                    <h3>{t.sources.bios}</h3>
                    {PORTRAITS.map((p: any) => (
                        <a className={cn(styles['src'])} href={p.source} target="_blank" key={p.id}>{t.people[p.id].name}<span>{p.source}</span></a>
                    ))}
                </div>
                <div className={cn(styles['src-group'])}>
                    <h3>{t.sources.other}</h3>
                    {OTHER_SOURCES.map((s: any, index: number) => (
                        <a className={cn(styles['src'])} href={s.link} target="_blank" key={index}>{s.title}<span>{s.link}</span></a>
                    ))}
                </div>
            </section>
            <Footer theme={theme} />
        </div>
    );
}
export default Sources;

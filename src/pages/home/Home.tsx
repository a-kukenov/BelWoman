
import cn from 'classnames'
import styles from './Home.module.css'
import { useEffect, useState } from 'react'
import { useStore } from '../../storage/storage'
import { useNavigate, NavLink } from 'react-router-dom'
import { ACCENT } from '../../data'
import { LANG } from '../../lang/lang'
import { IFact, IStep, ITile } from '../../interfaces/interfaces'
import RenderSteps from '../../components/renderSteps/RenderSteps.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import hero from '../../images/hero.jpg'

function Home() {
	const [theme, setTheme] = useState<string>(ACCENT);
	// const [isPhotoOpen, setIsPhotoOpen] = useState(false)
    const navigate = useNavigate();

	const themeStr = useStore((state: any) => state.theme)
	const lang = useStore((state: any) => state.lang)
	const t = LANG[lang].home

    const facts: IFact[] = t.facts
    const steps: IStep[] = t.steps
    const tiles: ITile[] = t.tiles

    const photos: string[] = [
        'https://images.thevoicemag.ru/upload/img_cache/8e7/8e770f3cca284f787acf6ecd51adf31d_cropped_510x363.webp',
        'https://images.thevoicemag.ru/upload/img_cache/5b6/5b636c869c8a4d1a39a3a25fd3d6a679_cropped_510x678.webp',
        'https://images.thevoicemag.ru/upload/img_cache/d43/d432ead40e3488794ef40b2d96c68744_cropped_510x368.webp',
        'https://images.thevoicemag.ru/upload/img_cache/468/468ee76615589e1ade3643cf193c87a0_cropped_510x718.webp',
        'https://images.thevoicemag.ru/upload/img_cache/c76/c76323435fd3f4a55bdfc78f5d847ca8_cropped_510x381.webp',
        'https://images.thevoicemag.ru/upload/img_cache/284/284eda49d29aaf05d3059ab39cde3d97_cropped_510x334.webp',
    ]

    useEffect(() => {
        const savedTheme = localStorage.getItem('accent');
        // console.log(savedTheme)
        setTheme(savedTheme || ACCENT);
        if(savedTheme == null){
            localStorage.setItem('accent', ACCENT)
        }
    }, [themeStr]);

    const handleHistoryClick = () => {
        navigate('/history');
    };

    return (
        <div className={cn(styles['main-container'])}>
            <section className={cn(styles['hero'])}>
                <div className={cn(styles['hero-text'])}>
                    <p className={cn(styles['eyebrow'])}>{t.eyebrow}</p>
                    <h1 className={cn(styles['hero-title'])}>{t.title}</h1>
                    <p className={cn(styles['hero-lead'])}>{t.lead}</p>
                    <p className={cn(styles['hero-tags'])} style={{color: `${theme}`}}>{t.tags[0]} <i></i> {t.tags[1]} <i></i> {t.tags[2]} <i></i> {t.tags[3]}</p>
                    <div className={cn(styles['hero-actions'])}>
                        <div className={cn(styles['btn-primary'])} onClick={handleHistoryClick} style={{background: `${theme}`}}>{t.btnHistory}</div>
                        <NavLink to={'/portraits'} className={cn(styles['btn-outline'])}>{t.btnPortraits}</NavLink>
                    </div>
                </div>
                <div className={cn(styles['hero-visual'])}>
                    <div className={cn(styles['hero-plate'])}></div>
                    <img className={cn(styles['hero-photo'])} src={hero} alt={t.heroAlt} />
                </div>
            </section>

            <div className={cn(styles['strip'])}></div>

            <section className={cn(styles['section-container'])}>
                <div className={cn(styles['head-center'])}>
                    <p className={cn(styles['eyebrow'])}>{t.factsEyebrow}</p>
                    <h2 className={cn(styles['title'])}>{t.factsTitle}</h2>
                    <p className={cn(styles['lead'])}>{t.factsLead}</p>
                </div>
                <div className={cn(styles['facts'])}>
                    {facts.map((fact: IFact, index: number) => (
                        <div className={cn(styles['fact'])} key={index}>
                            <div className={cn(styles['mos'], styles[`mos-${index}`])}></div>
                            <div className={cn(styles['fact-num'])} style={{color: `${theme}`}}>{fact.num}</div>
                            <p className={cn(styles['fact-text'])}>{fact.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={cn(styles['section-container'])} style={{paddingTop: 0}}>
                <div className={cn(styles['head-center'])}>
                    <p className={cn(styles['eyebrow'])}>{t.stepsEyebrow}</p>
                    <h2 className={cn(styles['title'])}>{t.stepsTitle}</h2>
                    <p className={cn(styles['lead'])}>{t.stepsLead}</p>
                </div>
                <RenderSteps steps={steps} theme={theme} more={t.stepMore} />
            </section>

            <section className={cn(styles['story'])} id="volskaya">
                <div className={cn(styles['story-grid'])}>
                    <div className={cn(styles['story-text'])}>
                        <p className={cn(styles['eyebrow'])}>{t.storyEyebrow}</p>
                        <h2 className={cn(styles['story-title'])}>{t.storyTitle}</h2>
                        {t.story.map((p: string, index: number) => (
                            <p key={index}>{p}</p>
                        ))}
                        <div className={cn(styles['story-meta'])}>
                            {t.storyMeta.map((m: IFact, index: number) => (
                                <div key={index}><b style={{color: `${theme}`}}>{m.num}</b><span>{m.text}</span></div>
                            ))}
                        </div>
                        <a className={cn(styles['btn-outline'])} href="https://www.thevoicemag.ru/social/stories/operaciya-deti-kak-uchitelnica-matryona-volskaya-spasla-ot-fashistov-3225-detey/" target="_blank">{t.storyRead}</a>
                        <p className={cn(styles['credit'])}>{t.storyCredit}</p>
                    </div>
                    <div className={cn(styles['story-media'])}>
                        <img className={cn(styles['story-cover'])} src="https://images.thevoicemag.ru/upload/img_cache/3e3/3e30b5a1ef2785274f8d1b982bc64e17_ce_1579x829x0x117_cropped_1200x628.jpg" alt={t.storyAlt} />
                        <div className={cn(styles['story-photos'])}>
                            {photos.map((photo: string, index: number) => (
                                <img src={photo} key={index} alt="" />
                            ))}
                        </div>
                        <p className={cn(styles['credit'])}>{t.photoCredit}</p>
                    </div>
                </div>
            </section>

            <div className={cn(styles['band'])} style={{background: `${theme}`}}>
                <h2 className={cn(styles['band-title'])}>{t.bandTitle}</h2>
                <p className={cn(styles['band-text'])}>{t.bandText}</p>
                <NavLink to={'/today'} className={cn(styles['btn-light'])}>{t.bandBtn}</NavLink>
            </div>

            <section className={cn(styles['section-container'])}>
                <div className={cn(styles['head-center'])}>
                    <p className={cn(styles['eyebrow'])}>{t.tilesEyebrow}</p>
                    <h2 className={cn(styles['title'])}>{t.tilesTitle}</h2>
                    <p className={cn(styles['lead'])}>{t.tilesLead}</p>
                </div>
                <div className={cn(styles['tiles'])}>
                    {tiles.map((tile: ITile, index: number) => (
                        <NavLink to={tile.link} className={cn(styles['tile'])} key={index}>
                            <div className={cn(styles['mos'], styles[`mos-${index}`])}></div>
                            <h3 className={cn(styles['tile-title'])}>{tile.title}</h3>
                            <p className={cn(styles['tile-text'])}>{tile.text}</p>
                            <span className={cn(styles['more'])} style={{color: `${theme}`}}>{tile.more}</span>
                        </NavLink>
                    ))}
                </div>
            </section>

            <Footer theme={theme} />
        </div>
    );

}
export default Home;

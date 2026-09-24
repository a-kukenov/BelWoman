import cn from 'classnames'
import styles from './MainLayout.module.css'
import { useState, useEffect } from 'react'
import { NavLink, Outlet, Navigate } from 'react-router-dom'
import { useStore } from '../../storage/storage'
import { ACCENT } from '../../data'
import { LANG } from '../../lang/lang'

import { FaHouse } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { MdPhotoLibrary } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

function MainLayout() {
	const currentPath: string = window.location.pathname;
	
	const [chosenStringLeftValue, setChosenStringLeftValue] = useState('0')
	const [chosenLink, setChosenLink] = useState(0)
	const [isBurgerAct, setIsBurgerAct] = useState(false)
	const [header, setHeader] = useState(<></>)
	const [theme, setTheme] = useState<string>('');

	const themeStr = useStore((state: any) => state.theme)

	const refreshHeader = useStore((state: any) => state.refreshHeader)

	const lang = useStore((state: any) => state.lang)
	const setLang = useStore((state: any) => state.setLang)
	const t = LANG[lang]

	useEffect(() => {
        const savedTheme = localStorage.getItem('accent');
            setTheme(savedTheme || ACCENT);
        if(savedTheme == null){
            localStorage.setItem('accent', ACCENT)
        }
        
        
    }, [themeStr, theme]);

	useEffect(() => {
		document.documentElement.lang = lang
	}, [lang])

	useEffect(() => {
		switch (currentPath) {
			case '/home':
				setChosenStringLeftValue('-0.8')
				setChosenLink(1)
				break;
			case '/history':
				setChosenStringLeftValue('13.4')
				setChosenLink(2)
				break;
			case '/portraits':
				setChosenStringLeftValue('28.4')
				setChosenLink(3)
				break;
			case '/war':
				setChosenStringLeftValue('41.7')
				setChosenLink(4)
				break;
			case '/today':
				setChosenStringLeftValue('54.2')
				setChosenLink(5)
				break;
			case '/sources':
				setChosenStringLeftValue('69.2')
				setChosenLink(6)
				break;
			default:
				setChosenStringLeftValue('-100')
				setChosenLink(0)
				break;
		}
	}, [])

	const chooseLink = (num: number): void => {
		switch (num) {
			case 1:
				setChosenStringLeftValue('-0.8')
				setChosenLink(1)
				break;
			case 2:
				setChosenStringLeftValue('13.4')
				setChosenLink(2)
				break;
			case 3:
				setChosenStringLeftValue('28.4')
				setChosenLink(3)
				break;
			case 4:
				setChosenStringLeftValue('41.7')
				setChosenLink(4)
				break;
			case 5:
				setChosenStringLeftValue('54.2')
				setChosenLink(5)
				break;
			case 6:
				setChosenStringLeftValue('69.2')
				setChosenLink(6)
				break;
			case 7:
				setChosenStringLeftValue('-100')
				setChosenLink(7)
				break;
		}
	} 

	
	useEffect(() => {
		// if(currentPath == '/quiz'){
		// 	setChosenLink(0)
		// }
		

		setHeader(
			<div className={cn(styles['bg'])}>
				<header className={cn(styles['header'])}>
					<NavLink to={'/home'} className={cn(styles['brand'])} onClick={() => {chooseLink(1)}}>{t.brand}<span className={cn(styles['brand-dot'])}></span></NavLink>
					<section className={cn(styles['links'])}>
						<NavLink to={'/home'} className={cn(styles['link'], chosenLink == 1 ? styles['chosen-link']  : '')} onClick={() => {chooseLink(1)}}>{t.nav[0]}</NavLink>
						<NavLink to={'/history'} className={cn(styles['link'], chosenLink == 2 ? styles['chosen-link'] : '')} onClick={() => {chooseLink(2)}}>{t.nav[1]}</NavLink>
						<NavLink to={'/portraits'} className={cn(styles['link'], chosenLink == 3 ? styles['chosen-link'] : '')} onClick={() => {chooseLink(3)}}>{t.nav[2]}</NavLink>
						<NavLink to={'/war'} className={cn(styles['link'], chosenLink == 4 ? styles['chosen-link'] : '')} onClick={() => {chooseLink(4)}}>{t.nav[3]}</NavLink>
						<NavLink to={'/today'} className={cn(styles['link'], chosenLink == 5 ? styles['chosen-link'] : '')} onClick={() => {chooseLink(5)}}>{t.nav[4]}</NavLink>
						<NavLink to={'/sources'} className={cn(styles['link'], chosenLink == 6 ? styles['chosen-link'] : '')} onClick={() => {chooseLink(6)}}>{t.nav[5]}</NavLink>
						<NavLink to={'/quiz'} className={cn(styles['quiz-button'])} onClick={() => {chooseLink(7)}} style={{background: `${theme}`}}>{t.quizBtn}</NavLink>

						<NavLink to={'/home'} className={cn(styles['link-mobile'])} onClick={() => {chooseLink(1)}} style={chosenLink == 1 ? {color: `${theme}`, fontSize: '3.2vh'} : {fontSize: '3.2vh'}}><FaHouse> </FaHouse></NavLink>
						<NavLink to={'/history'} className={cn(styles['link-mobile'])} onClick={() => {chooseLink(2)}} style={chosenLink == 2 ? {color: `${theme}`, fontSize: '3.2vh'} : {fontSize: '3.2vh'}}><FaBookOpen /></NavLink>
						<NavLink to={'/portraits'} className={cn(styles['link-mobile'])} onClick={() => {chooseLink(3)}} style={chosenLink == 3 ? {color: `${theme}`, fontSize: '3.9vh'} : {fontSize: '3.9vh'}}><MdGroups /></NavLink>
						<NavLink to={'/war'} className={cn(styles['link-mobile'])} onClick={() => {chooseLink(4)}} style={chosenLink == 4 ? {color: `${theme}`, fontSize: '3.2vh'} : {fontSize: '3.2vh'}}><FaStar /></NavLink>
						<NavLink to={'/today'} className={cn(styles['link-mobile'])} onClick={() => {chooseLink(5)}} style={chosenLink == 5 ? {color: `${theme}`, fontSize: '3.4vh'} : {fontSize: '3.4vh'}}><MdPhotoLibrary /></NavLink>
						<NavLink to={'/quiz'} className={cn(styles['link-mobile'])} onClick={() => {chooseLink(7)}} style={chosenLink == 7 ? {color: `${theme}`, fontSize: '3vh'} : {fontSize: '3vh'}}><FaQuestion /></NavLink>
						<div className={cn(styles['chosen-string'])} style={{left:`${chosenStringLeftValue}%`}}></div>
					</section>
					<div className={cn(styles['lang'])}>
						<button className={cn(styles['lang-btn'], lang == 'ru' ? styles['lang-act'] : '')} onClick={() => {setLang('ru')}} style={lang == 'ru' ? {background: `${theme}`} : {}}>RU</button>
						<button className={cn(styles['lang-btn'], lang == 'be' ? styles['lang-act'] : '')} onClick={() => {setLang('be')}} style={lang == 'be' ? {background: `${theme}`} : {}}>BE</button>
					</div>
				</header>
				<header className={cn(styles['header-mobile'])}>
					<div className={cn(styles['burger'])} onClick={() => {setIsBurgerAct(!isBurgerAct)}}>
						<div className={cn(styles['burger-line'])}></div>
						<div className={cn(styles['burger-line'])}></div>
						<div className={cn(styles['burger-line'])}></div>
					</div>
				</header>
				<section className={cn(styles['content'])}>
					{currentPath == '/' ? <Navigate to="/home" /> : <Outlet />}
				</section>
			</div>)
	}, [refreshHeader, theme, chosenLink, lang])
	return(<>{header}</>)
	}
export default MainLayout

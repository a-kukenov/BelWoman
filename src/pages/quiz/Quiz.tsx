import cn from 'classnames'
import styles from '../Pages.module.css'
import { useEffect, useState } from 'react'
import { useStore } from '../../storage/storage'
import { ACCENT } from '../../data'
import { LANG } from '../../lang/lang'
import PageHead from '../../components/PageHead/PageHead.tsx'
import Footer from '../../components/Footer/Footer.tsx'

function Quiz() {
	const [theme, setTheme] = useState<string>(ACCENT);
	const themeStr = useStore((state: any) => state.theme)
	const lang = useStore((state: any) => state.lang)
	const t = LANG[lang]

    useEffect(() => {
        const savedTheme = localStorage.getItem('accent');
        setTheme(savedTheme || ACCENT);
    }, [themeStr]);
	const [num, setNum] = useState(0)
	const [chosen, setChosen] = useState(-1)
	const [score, setScore] = useState(0)

    const questions: any[] = t.quiz.questions

    const choose = (index: number): void => {
        if(chosen != -1) return
        setChosen(index)
        if(index == questions[num].right){
            setScore(score + 1)
        }
    }

    const next = (): void => {
        setNum(num + 1)
        setChosen(-1)
    }

    const restart = (): void => {
        setNum(0)
        setChosen(-1)
        setScore(0)
    }

    return (
        <div className={cn(styles['main-container'])}>
            <section className={cn(styles['section-container'])}>
                <PageHead center big eyebrow={t.quiz.eyebrow} title={t.quiz.title} />
                {num < questions.length ?
                <div className={cn(styles['quiz'])}>
                    <p className={cn(styles['quiz-count'])}>{t.quiz.question} {num + 1} {t.quiz.of} {questions.length}</p>
                    <h2 className={cn(styles['quiz-q'])}>{questions[num].q}</h2>
                    <div className={cn(styles['answers'])}>
                        {questions[num].a.map((ans: string, index: number) => (
                            <button key={index} onClick={() => {choose(index)}} className={cn(styles['answer'], chosen != -1 && index == questions[num].right ? styles['right'] : '', chosen == index && index != questions[num].right ? styles['wrong'] : '')}>{ans}</button>
                        ))}
                    </div>
                    {chosen != -1 ? <>
                        <p className={cn(styles['explain'])}>{questions[num].e}</p>
                        <button className={cn(styles['btn-primary'])} onClick={next} style={{background: `${theme}`}}>{num == questions.length - 1 ? t.quiz.result : t.quiz.next}</button>
                    </> : null}
                </div>
                :
                <div className={cn(styles['quiz'])} style={{textAlign: 'center'}}>
                    <p className={cn(styles['quiz-count'])}>{t.quiz.done}</p>
                    <h2 className={cn(styles['quiz-q'])}>{score} {t.quiz.of} {questions.length} {t.quiz.right}</h2>
                    <button className={cn(styles['btn-primary'])} onClick={restart} style={{background: `${theme}`}}>{t.quiz.again}</button>
                </div>
                }
            </section>
            <Footer theme={theme} />
        </div>
    );
}
export default Quiz;

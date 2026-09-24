import { create } from 'zustand'

export const useStore = create((set) => ({
	theme: '',
	refreshHeader: false,
	lang: localStorage.getItem('lang') || 'ru',
	setTheme: (theme: string) => set(() => ({ theme: theme })),
	setRefreshHeader: () => set((state: any) => ({ refreshHeader: !state.refreshHeader })),
	setLang: (lang: string) => {
		localStorage.setItem('lang', lang)
		set(() => ({ lang: lang }))
	},
}))

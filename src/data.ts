// const ACCENT: string = '#2F5D4C';
const ACCENT: string = '#436A58';

// тексты про героинь лежат в lang/ru.ts и lang/be.ts (people), тут только то что не переводится
// epoch - номер в списке epochs из lang (0 - Все)
const PORTRAITS: any[] = [
    {id: 'efrosinia', epoch: 1, photo: '/portraits/efrosinia.jpg', source: 'https://edu.gov.by/news/sozvuchie-proshlogo-i-nastoyashchego--obraz-evfrosinii-polotskoy-yavlyaetsya-simvolom-dukhovnoy-sily/'},
    {id: 'tsyotka', epoch: 2, photo: '/portraits/tsyotka.jpg', source: 'https://dzyannica.by/content/poetessa-aktrisa-uchitel-i-patriot-kak-edinstvennyy-v-belarusi-muzey-tetki-hranit-ee'},
    {id: 'myadzyolka', epoch: 2, photo: '/portraits/myadzyolka.jpg', source: 'https://www.narasveta.by/vse-novosti/5532-pa-lina-myadzjolka-muza-paeta-i-zyamnaya-zhanchyna-yakoe-dachynenne-yana-mela-da-pa-linki'},
    {id: 'kononova', epoch: 3, photo: '/portraits/kononova.jpg', source: 'https://esoligorsk.by/novosti/novosti-regiona/286-lyudi/70194-ona-ne-vydala-svoikh-istoriya-selskoj-uchitelnitsy-stavshej-legendoj-podpolya'},
    {id: 'marinenko', epoch: 3, photo: '/portraits/marinenko.jpg', source: 'https://partizany.by'},
    {id: 'kazei', epoch: 4, photo: '/portraits/kazei.jpg', source: 'https://warheroes.ru/hero/hero.asp?Hero_id=12508'},
    {id: 'zanko', epoch: 4, photo: 'https://www.warheroes.ru/content/images/heroes/GST%2067-91/Zanko_Alr_Fdr_gst78.jpg', source: 'https://warheroes.ru/hero/hero.asp?Hero_id=16806'},
]

const OTHER_SOURCES: any[] = [
    {title: 'Белстат: 87% учителей в белорусских школах — женщины (Sputnik, 28.08.2026)', link: 'https://sputnik.by/20260828/belstat-87-uchiteley-v-belorusskikh-shkolakh--zhenschiny-1110287957.html'},
    {title: 'На одного педагога — в среднем 11 учеников (Belarus.by)', link: 'https://www.belarus.by/ru/press-center/press-release/na-odnogo-pedagoga---v-srednem-11-uchenikov-belstat-predstavil-obzor-ko-dnju-znanij_i_0000218855.html'},
    {title: 'Операция «Дети»: как учительница Матрёна Вольская спасла 3225 детей (The Voice)', link: 'https://www.thevoicemag.ru/social/stories/operaciya-deti-kak-uchitelnica-matryona-volskaya-spasla-ot-fashistov-3225-detey/'},
    {title: 'Женщины, получившие ордена Ленина (СБ. Беларусь сегодня)', link: 'https://www.sb.by/articles/damy-zavetnogo-ordena.html'},
]

export { ACCENT, PORTRAITS, OTHER_SOURCES };

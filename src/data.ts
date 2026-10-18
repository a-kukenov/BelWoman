// const ACCENT: string = '#2F5D4C';
const ACCENT: string = '#436A58';

// тексты про героинь лежат в lang/ru.ts и lang/be.ts (people), тут только то что не переводится
// epoch - номер в списке epochs из lang (0 - Все)
const PORTRAITS: any[] = [
    { id: 'efrosinia', epoch: 1, photo: 'https://www.pvestnik.by/wp-content/uploads/2022/06/853.jpg', source: 'https://bspu.by' },
    { id: 'sluckaya', epoch: 1, photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Sofja_Radzivi%C5%82_%28Alelkavi%C4%8D%29._%D0%A1%D0%BE%D1%84%E2%80%99%D1%8F_%D0%A0%D0%B0%D0%B4%D0%B7%D1%96%D0%B2%D1%96%D0%BB_%28%D0%90%D0%BB%D0%B5%D0%BB%D1%8C%D0%BA%D0%B0%D0%B2%D1%96%D1%87%29_%28XVIII%29.jpg/250px-Sofja_Radzivi%C5%82_%28Alelkavi%C4%8D%29._%D0%A1%D0%BE%D1%84%E2%80%99%D1%8F_%D0%A0%D0%B0%D0%B4%D0%B7%D1%96%D0%B2%D1%96%D0%BB_%28%D0%90%D0%BB%D0%B5%D0%BB%D1%8C%D0%BA%D0%B0%D0%B2%D1%96%D1%87%29_%28XVIII%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=parser&utm_content=thumbnail', source: 'https://planetabelarus.by' },
    { id: 'radzivill', epoch: 1, photo: 'https://planetabelarus.by/upload/medialibrary/a57/4v3z0s140dnq1c0jt9uea39dmoe72gas.jpg', source: 'https://planetabelarus.by' },
    { id: 'ruseckaya', epoch: 1, photo: 'https://www.hotimsk.by/wp-content/uploads/2018/09/Resize-of-%D1%80%D1%83%D1%81%D0%B5%D1%86%D0%BA%D0%B0%D1%8F-1.jpg', source: 'https://adukar.com' },


    { id: 'pashkevich', epoch: 2, photo: 'https://upload.wikimedia.org/wikipedia/commons/1/14/A%C5%82aiza_Pa%C5%A1kievi%C4%8D._%D0%90%D0%BB%D0%B0%D1%96%D0%B7%D0%B0_%D0%9F%D0%B0%D1%88%D0%BA%D0%B5%D0%B2%D1%96%D1%87_%281912%29.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original', source: 'https://adukar.com' },
    { id: 'myadzyolka', epoch: 2, photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Pa%C5%ADlina_Miadzio%C5%82ka.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original', source: 'https://narasveta.by' },
    { id: 'marclnkevich', epoch: 2, photo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Kamila_Marcinkievi%C4%8D._%D0%9A%D0%B0%D0%BC%D1%96%D0%BB%D0%B0_%D0%9C%D0%B0%D1%80%D1%86%D1%96%D0%BD%D0%BA%D0%B5%D0%B2%D1%96%D1%87_%281861-62%29.jpg?utm_source=be.wikipedia.org&utm_campaign=index&utm_content=original', source: 'https://minsk-roo.gov.by' },


    { id: 'kononova', epoch: 3, photo: 'https://www.sb.by/upload/medialibrary/384/38442f09547c0470ca8600e60771bf27.jpg', source: 'https://esoligorsk.by' },
    { id: 'marinenko', epoch: 3, photo: 'https://minsknews.by/wp-content/uploads/2023/09/tatyana-marinenko.jpg', source: 'https://partizany.by' },
    { id: 'horuzhaya', epoch: 3, photo: 'https://pinsklib.by/wp-content/uploads/2024/02/ZE4FCXETkY.jpg', source: 'https://warheroes.ru' },
    { id: 'chertkova', epoch: 3, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfbb5lRc8x_RTsQ4NiNAj1jkZ34K4CCTYUodF7tRmyA&s', source: 'https://instagram.com' },


    { id: 'kazei', epoch: 4, photo: 'https://upload.wikimedia.org/wikipedia/ru/b/b6/Kazey_AI.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original', source: 'https://warheroes.ru' },
    { id: 'zanko', epoch: 4, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbc3JfwYWBVHDPCE49Ty6NahUBb9nBnJgoPDstsK5wP8ovCD-keuTaxs&s=10', source: 'https://warheroes.ru' },
    { id: 'avramenko', epoch: 4, photo: 'https://www.budakosh.by/wp-content/uploads/2024/11/IMG_6780.jpg', source: 'https://gomel.by' },
    { id: 'kovalec', epoch: 4, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjyTGhfi0FqjUTxY_J9NLQl9eSc8L6HY8VzkWyZcd-5jjFK69or0KR4dg_&s=10', source: 'https://1prof.by' },
]

const SCHOOLS: any[] = [
    {
        id: 'collegeMinsk',
        epoch: 2,
        photo: 'https://avatars.mds.yandex.net/get-altay/14381528/2a00000193d16cfc230d6894b6b0fbaeab84/orig',
        source: 'http://minsk.edu.by'
    },
    {
        id: 'collegeNesvizh',
        epoch: 2,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yQoWq0Vtx_K38IBInjXNdbH7VFL8XsOXJ2acg0e9nXsWwu5G1OpAJKw&s=10',
        source: 'https://nesvkol.by'
    },
    {
        id: 'collegeGomel',
        epoch: 2,
        photo: 'https://avatars.mds.yandex.net/get-altay/18754568/2a0000019ed208cba3b4778afb9a007a53ce/L_height',
        source: 'https://gpk.by'
    },
    {
        id: 'collegePinsk',
        epoch: 2,
        photo: 'https://cdn.belarus.travel/Files/2025/pinskiy-kolledzh-brestskogo-gosudarstvennogo-universiteta-imeni-as-pushkina/pinskiy-kolledzh-brestskogo-gosudarstvennogo-universiteta-imeni-as-pushkina-4.jpg', 
        source: 'https://brsu.by'
    },
    {
        id: 'collegeOrsha',
        epoch: 2,
        photo: 'https://avatars.mds.yandex.net/get-altay/16264361/2a0000019b239d0675f9f185049f78ff7189/orig', 
        source: 'https://vsu.by'
    },
    {
        id: 'collegeVolkovysk',
        epoch: 2,
        photo: 'https://avatars.mds.yandex.net/get-altay/1811309/2a0000016dd340a25aa35c326c5d906c0ef8/orig',
        source: 'https://grsu.by'
    },
    {
        id: 'collegeGorki',
        epoch: 2,
        photo: 'https://lenino-gpk.by/ivr/media/image4.jpg',
        source: 'https://msu.by'
    },

    // ВУЗЫ

    {
        id: 'vuzBgpu',
        epoch: 3,
        photo: 'https://i.ytimg.com/vi/QtWwQDzk6e4/maxresdefault.jpg',
        source: 'https://bspu.by'
    },
    {
        id: 'vuzMgpu',
        epoch: 3,
        photo: 'https://abiturient.by/files/univer-photos/4_korpus.jpg',
        source: 'http://mspu.by'
    },
    {
        id: 'vuzMsu',
        epoch: 3,
        photo: 'https://msu.by/images/univer/main/07.jpg',
        source: 'https://msu.by'
    },
    {
        id: 'vuzBrsu',
        epoch: 3,
        photo: 'https://adukar.com/images/photo/foto-brsu-im-pushkina-2019-big-0.jpg',
        source: 'https://brsu.by'
    },
    {
        id: 'vuzVsu',
        epoch: 3,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/%D0%92%D0%93%D0%A3_%D0%9C%D0%B0%D1%88%D0%B5%D1%80%D0%BE%D0%B2%D0%B0_2022_%D0%A40253.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original',
        source: 'https://vsu.by'
    },
    {
        id: 'vuzGrsu',
        epoch: 3,
        photo: 'https://abiturient.by/files/univer-photos/grsu_leto_2018_panorama.jpg',
        source: 'https://grsu.by'
    },
    {
        id: 'vuzGsu',
        epoch: 3,
        photo: 'https://abiturient.by/files/univer-photos/k5.jpg',
        source: 'http://gsu.by'
    },
    {
        id: 'vuzMslu',
        epoch: 3,
        photo: 'https://static.tildacdn.biz/tild3164-3331-4535-b461-643030646338/photo.jpg', 
        source: 'https://mslu.by'
    },

    // ШКОЛЫ

    {
        id: 'school83minsk',
        epoch: 1,
        photo: 'https://avatars.mds.yandex.net/get-altay/16413591/2a000001999fcac2270bc8c5537d6bc5d68d/orig',
        source: 'https://sch83.minsk.edu.by/'
    },
    {
        id: 'school6minsk',
        epoch: 1,
        photo: 'https://family.by/uploads/posts/2022-04/1649335173_6.jpg',
        source: 'https://sch6.minsk.edu.by/'
    },
    {
        id: 'school126minsk',
        epoch: 1,
        photo: 'https://avatars.mds.yandex.net/get-altay/11563767/2a00000190367092ef862d2b8e4ca1e668bd/orig',
        source: 'https://sch126.minsk.edu.by/'
    },
    {
        id: 'gymn20minsk',
        epoch: 1,
        photo: 'https://avatars.mds.yandex.net/get-altay/879259/2a000001679f598104c6d60a2a2f9c731572/L_height',
        source: 'https://gimn20.minsk.edu.by/'
    },
    {
        id: 'gymn7molodechno',
        epoch: 1,
        photo: 'https://museum.moiro.by/files/00867/obj/110/36703/img/%D0%B3%D0%B8%D0%BC%D0%BD%D0%B0%D0%B7%D0%B8%D1%8F%207%20%D0%9C%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%87%D0%BD%D0%BE.jpeg',
        source: 'https://gimn7molodechno.schools.by/'
    },
    {
        id: 'school3smolevichi',
        epoch: 1,
        photo: 'https://smolevichi-24.by/app/uploads/2026/08/21-2-1024x769.jpg',
        source: 'https://sch3smolevichi.schools.by/'
    },
    {
        id: 'school40gomel',
        epoch: 1,
        photo: 'https://avatars.mds.yandex.net/get-altay/236825/2a0000015d45bec73ad206848fdfff3df607/L_height',
        source: 'https://sch40gomel.schools.by/'
    },
    {
        id: 'gymn5vitebsk',
        epoch: 1,
        photo: 'https://avatars.mds.yandex.net/get-altay/16329243/2a0000019d62913dda781807a78c2f356953/orig',
        source: 'https://gimn5vitebsk.schools.by/'
    },
    {
        id: 'school1mozyr',
        epoch: 1,
        photo: 'https://avatars.mds.yandex.net/get-altay/1871013/2a0000016dba1d3445353307da55710316ce/orig',
        source: 'https://sch1mozyr.schools.by/'
    },
    {
        id: 'school8slonim',
        epoch: 1,
        photo: 'https://avatars.mds.yandex.net/get-altay/2056672/2a0000016cd779992a43e4451704cc758e17/L_height',
        source: 'https://sch8slonim.schools.by/'
    }
]

const OTHER_SOURCES: any[] = [
    {title: 'Белстат: 87% учителей в белорусских школах — женщины (Sputnik, 28.08.2026)', link: 'https://sputnik.by/20260828/belstat-87-uchiteley-v-belorusskikh-shkolakh--zhenschiny-1110287957.html'},
    {title: 'На одного педагога — в среднем 11 учеников (Belarus.by)', link: 'https://www.belarus.by/ru/press-center/press-release/na-odnogo-pedagoga---v-srednem-11-uchenikov-belstat-predstavil-obzor-ko-dnju-znanij_i_0000218855.html'},
    {title: 'Операция «Дети»: как учительница Матрёна Вольская спасла 3225 детей (The Voice)', link: 'https://www.thevoicemag.ru/social/stories/operaciya-deti-kak-uchitelnica-matryona-volskaya-spasla-ot-fashistov-3225-detey/'},
    {title: 'Женщины, получившие ордена Ленина (СБ. Беларусь сегодня)', link: 'https://www.sb.by/articles/damy-zavetnogo-ordena.html'},
]

export { ACCENT, PORTRAITS, OTHER_SOURCES, SCHOOLS };

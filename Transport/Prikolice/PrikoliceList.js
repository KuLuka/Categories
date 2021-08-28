const Majevica = [
    {
        _id: '1',
        nameUrl: 'prikolice-4t-majevica-1',
        productHeader: 'Prikolice Majevica',
        className: `prikolice-4t-img`,
        desc1: 'Prikolice Majevica sa cinčanim ili obojenim stranicama i sa produženim stranicama',
        desc2: 'Prikolice su namenjene prvenstveno za individualni sektor. Upotrebljavaju se pre svega za transport u poljoprivredi, vinogradarstvu, stočarstvu , građevinarstvu kao i u ostalim delatnostima.',


        teh_kar: 'Tehničke Karakteristike',

        left1Title: 'Prikolice Majevica',
        table1: [
            'Prikolica',
            'sa obojenim stranicama | sa produženim stranicama',
            'Nosivost (t)',
            '4 i 4.1',
            'Potrebna snaga traktora (kW)',
            '25',
            'Max. brzina (km/h)',
            '30',
            'Pneumatici',
            '10.0/75-15.3″12PR',
            'Dimenzije: dužina, širina, visina (m)',
            '4.24; 1.88; 1.39 | 4.24; 1.88; 1.84',
            'Dimenzije sanduka: dužina, širina, visina (m)',
            '2.93; 1.75; 0.45 |  2.93; 1.75; 0.90',
            'Težina (kg)',
            '915 | 1025',
            'Kipovanje',
            'na 3 strane',
            'Kočnice',
            'pneumatske',
        ],

        standardnaOprema: 'Opcija',
        standardLi: [
            ' - Šiber na zadnjoj stranici',
        ],

        standardOprema1: '',
        standardLi1: [

        ],

        standardOprema2: '',
        standardLi2: [

        ],


        brand: 'Majevica',
        category: 'Prikolice'
    },
    {
        _id: '2',
        nameUrl: 'prikolice-4t-majevica-2',
        productHeader: 'Prikolice Majevica',
        className: `prikolice-4t-img`,
        desc1: 'Prikolice Majevica sa duplim stranicama i sa mrežastim nastavcima za stranice',
        desc2: 'Prikolice su namenjene prvenstveno za individualni sektor. Upotrebljavaju se pre svega za transport u poljoprivredi, vinogradarstvu, stočarstvu , građevinarstvu kao i u ostalim delatnostima.',


        teh_kar: 'Tehničke Karakteristike',

        left1Title: 'Prikolice Majevica',
        table1: [
            'Prikolica',
            'sa duplim stranicama | sa mrežastim nastavcima za stranice',
            'Nosivost (t)',
            '4 i 4.1',
            'Potrebna snaga traktora (kW)',
            '25',
            'Max. brzina (km/h)',
            '30',
            'Pneumatici',
            '10.0/75-15.3″12PR',
            'Dimenzije: dužina, širina, visina (m)',
            '4.24; 1.88; 1.84 | 4.24; 1.88; 2.10',
            'Dimenzije sanduka: dužina, širina, visina (m)',
            '2.93; 1.75; 0.90 |  2.93; 1.75; 1.16',
            'Težina (kg)',
            '1035',
            'Kipovanje',
            'na 3 strane | na 3 strane – bez nastavaka',
            'Kočnice',
            'pneumatske',
        ],

        standardnaOprema: 'Opcija',
        standardLi: [
            ' - Šiber na zadnjoj stranici',
        ],

        standardOprema1: '',
        standardLi1: [

        ],

        standardOprema2: '',
        standardLi2: [

        ],


        brand: 'Majevica',
        category: 'Prikolice'
    }
]

const Celmak = [
    {
        _id: '3',
        nameUrl: 'dvoosovinska-prikolica-8-t',
        productHeader: 'Dvoosovinska prikolica 8 T Čelmak',
        className: `dvoosovinska-prikolica-img`,
        desc1: 'Čelmak Prikolice su namenjene prvenstveno za individualni sektor. Upotrebljavaju se pre svega za transport u poljoprivredi, vinogradarstvu, stočarstvu , građevinarstvu kao i u ostalim delatnostima.',
        desc2: 'Prikolice su namenjene prvenstveno za individualni sektor. Upotrebljavaju se pre svega za transport u poljoprivredi, vinogradarstvu, stočarstvu , građevinarstvu kao i u ostalim delatnostima.',


        teh_kar: 'Tehničke Karakteristike',

        left1Title: 'Dvoosovinska prikolica 8 T Čelmak',
        table1: [
            'Kapacitet, t',
            '8',
            'Dužina, mm',
            '5900',
            'Širina, mm',
            '2200',
            'Visina poklopca, mm',
            '700',
            'Dodatna visina, mm',
            '300',
            'Gume',
            '400/60-15,5',
            'Veličina boksa',
            '4500x2100x700'
        ],

        standardnaOprema: '',
        standardLi: [
        ],

        standardOprema1: '',
        standardLi1: [

        ],

        standardOprema2: '',
        standardLi2: [

        ],



        brand: 'Celmak',
        category: 'Prikolice'
    }
]


export const both = [...Majevica, ...Celmak];
export { Majevica, Celmak };
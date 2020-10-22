import './styles/index.sass'
import fonts from 'google-fonts'

fonts.add({
    'Roboto': ['400', '700'],
    'Sansita Swashed': '300'
})

import excel from '@/js/excel';
import header from '@/js/header';
import toolbar from '@/js/toolbar';
import formula from '@/js/formula';
import table from '@/js/table';

const app = document.querySelector('#app')
app.insertAdjacentHTML('beforeend', excel(header, toolbar, formula, table))
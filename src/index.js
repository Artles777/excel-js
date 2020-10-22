import './styles/index.sass'
import fonts from 'google-fonts'

fonts.add({
    'Roboto': ['400', '700'],
    'Sansita Swashed': '300'
})

import Excel from '@/js/excel'
import ExcelHeader from '@/js/excel-header'
import ExcelToolbar from '@/js/excel-toolbar'
import ExcelFormula from '@/js/excel-formula'
import ExcelTable from '@/js/excel-table'

import db from '@/js/db'
import DBHeader from '@/js/db-header'
import DBNew from '@/js/db-new'
import DBTable from '@/js/db-table'


const app = document.querySelector('#app')
// app.insertAdjacentHTML('beforeend', Excel(ExcelHeader, ExcelToolbar, ExcelFormula, ExcelTable))
// app.insertAdjacentHTML('beforeend', db(DBHeader, DBNew, DBTable))
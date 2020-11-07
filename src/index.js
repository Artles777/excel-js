import './styles/index.sass'
import fonts from 'google-fonts'

import {Excel} from '@/components/excel/Excel'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'

fonts.add({
    'Roboto': ['400', '700'],
    'Sansita Swashed': '300'
})

const excel = new Excel('#app', {
    // List classes exports from src/components
    components: [Header, Toolbar, Formula, Table]
})
excel.render()
import {ExcelComponent} from "@core/ExcelComponent"
import {createTable} from '@/components/table/table.tamplate'

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root, options) {
        super($root, {
            name: 'Table',
            // listeners: ['focusin', 'focusout', 'scroll']
        });
    }

    toHTML() {
        return createTable()
    }

    // onFocusin(event) {
    //     event.target.classList.add('selected')
    // }
    //
    // onFocusout(event) {
    //     event.target.classList.remove('selected')
    // }
    //
    // onWindowScroll() {
    //     const documentHeight = Math.max(
    //         document.body.scrollHeight, document.documentElement.scrollHeight,
    //         document.body.offsetHeight, document.documentElement.offsetHeight,
    //         document.body.clientHeight, document.documentElement.clientHeight
    //     )
    //     const currentPositionScroll = window.pageYOffset
    //     const windowHeight = document.documentElement.clientHeight
    //     if (documentHeight < currentPositionScroll + windowHeight + 50) {
    //         console.log('scroll')
    //     }
    // }
}
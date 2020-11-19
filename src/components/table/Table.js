import {ExcelComponent} from "@core/ExcelComponent"
import {createTable} from '@/components/table/table.tamplate'
import {blurCell, focusCell} from "@/components/table/table.logic-cells"
import {keys} from "@/components/table/table.logic-keys"
import {resizeable} from "@/components/table/table.logic-resize"
import {scrollWindow} from "@/components/table/table.logic-scroll"
import {checkDataset} from "@/components/table/table.function";
import {$} from "@core/dom";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root, options, isDrawing = false) {
        super($root, {
            name: 'Table',
            listeners: ['focusin', 'focusout', 'scroll', 'keydown', 'mousedown']
        });
    }

    toHTML() {
        return createTable()
    }

    onFocusin(event) {
        if (checkDataset(event, 'focus')) {
            return focusCell(event, this.$root)
        }
    }

    onFocusout(event) {
        if (checkDataset(event, 'focus')) {
            return blurCell(event)
        }
    }

    onKeydown(event) {
         return keys(event)
    }

    onMousedown(event) {
        if (checkDataset(event, 'resize')) {
            return resizeable(event, this.$root)
        }
    }

    onWindowScroll() {
        return scrollWindow()
    }
}
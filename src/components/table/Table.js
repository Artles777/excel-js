import {ExcelComponent} from "@core/ExcelComponent"
import {$} from "@core/dom"
import {createTable} from '@/components/table/table.tamplate'
import {keysEvents} from "@/components/table/table.logic-keys"
import {resizeable} from "@/components/table/table.logic-resize"
import {checkDataset} from "@/components/table/table.function"
import {TableSelection} from "@/components/table/TableSelection"
import {focusCell} from "@/components/table/table.logic-cells";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root, options) {
        super($root, {
            name: 'Table',
            listeners: ['scroll', 'keydown', 'mousedown', 'input'],
            ...options
        })
    }

    toHTML() {
        return createTable()
    }

    prepare() {
        this.selection = new TableSelection()
    }

    init() {
        super.init()
        const $cell = this.$root.find('[data-id="1:1"]')
        $cell.$el.focus()

        this.selection.select($cell)
        this.selection.scrollTable($cell)

        this.$emit('table:select', $cell)

        this.$on('formula:input', text => {
            this.selection.current.text(text)
        })
        this.$on('formula:done', (event, keys) => {
            if (keys.includes(event.key)) {
                event.preventDefault()
                this.selection.current.focus()
            }
        })
        this.$on('select:text', $target => {
            $target.textContent = this.selection.current.text()
        })
    }

    onKeydown(event) {
        const keys = ['Enter', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

        if (keys.includes(event.key) && !event.shiftKey) {
            return keysEvents(event, this)
        }
    }

    onMousedown(event) {
        if (checkDataset(event, 'resize')) {
            return resizeable(event, this.$root)
        } else if (checkDataset(event, 'focus')) {
            return focusCell(event, this)
        }
    }

    onInput() {
        const text = this.selection.current.text()
        this.$emit('table:cell', text)
    }

    onScroll(event) {
        const $target = $(event.target)
        const $row = $target.find('[data-class="row"]')
        const $rowLast = $target.find('[data-class="row"]:last-child')
        const valueX = $rowLast.getCoords().left
        $row.css({
            marginLeft: `${valueX}px`,
            width: `${$target.getCoords().width - 10 + Math.abs(valueX)}px`
        })
    }
}
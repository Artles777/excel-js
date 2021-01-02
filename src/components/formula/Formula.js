import {ExcelComponent} from "@core/ExcelComponent"
import {$} from "@core/dom"

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown']
        });
    }

    toHTML() {
        return `<div class="info">fx</div>
            <div data-class="formula" class="input" contenteditable spellcheck="false"></div>`
    }

    init() {
        super.init()
        this.formula = this.$root.find('[data-class="formula"]')
        this.$on('table:cell', text => {
            this.formula.text(text)
        })
        this.$on('table:select', cell => {
            this.formula.text(cell.text())
        })
    }

    onInput(event) {
        const text = $(event.target).text()
        this.$emit('formula:input', text)
    }

    onKeydown(event) {
        const keys = ['Enter', 'Tab']
        this.$emit('formula:done', event, keys)
    }
}
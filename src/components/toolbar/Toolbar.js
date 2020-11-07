import {ExcelComponent} from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar'

    toHTML() {
        return `
    <button class="material-icons button">format_bold</button>
    <button class="material-icons button">format_italic</button>
    <button class="material-icons button">format_underlined</button>
    <button class="material-icons button">format_align_left</button>
    <button class="material-icons button">format_align_justify</button>
    <button class="material-icons button">format_align_right</button>
`
    }
}
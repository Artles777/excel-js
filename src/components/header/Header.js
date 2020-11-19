import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {
    static className = 'excel__header'

    toHTML() {
        return `
    <input type="text" class="input" value="Новая таблица">
    
    <div class="button">
        <button class="material-icons">exit_to_app</button>
        <button class="material-icons">delete_outline</button>
    </div>
`
    }
}
export class TableSelection {
    static className = 'focus-visible'
    static styles = {
        border: '',
        outline: '2px solid #3c74ff',
        backgroundColor: '',
        zIndex: 3
    }
    static stylesGroup = {
        border: '1px solid #1e90ff',
        backgroundColor: '#e7f0fd',
        outline: '',
        zIndex: 0
    }

    constructor() {
        this.group = []
        this.current = null
    }

    select($el) {
        this.clear()
        this.group.push($el)
        this.current = $el
        $el.focus().css(TableSelection.styles)
    }

    clear() {
        this.group.forEach($el => $el.cssClear(TableSelection.styles))
        this.group = []
    }

    selectGroup(key, $els) {
        if (key === event.ctrlKey) {
            this.group.push($els)
            this.group.forEach($el => {
                $el.$el.classList.contains(TableSelection.className)
                    ? $el.css(TableSelection.stylesGroup)
                    : $el.css({outline: ''})
            })
            $els.extend(TableSelection.styles, {backgroundColor: '#e7f0fd'})
        } else if (key === event.shiftKey || key === event) {
            this.clear()
            this.group = $els
            this.group.forEach($el => $el.css(TableSelection.stylesGroup))
            this.current.extend(TableSelection.styles, {backgroundColor: '#e7f0fd'})
        }
    }

    scrollTable($el) {
        window.onscroll = () => window.pageYOffset > 0
            ? $el.css({zIndex: 0})
            : $el.css({zIndex: 3})
    }
}
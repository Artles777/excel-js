import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.observer = options.observer
        this.unsubscribers = []

        this.prepare()
    }

    toHTML() {
        return ''
    }

    init() {
        this.initDOMListeners()
    }

    $emit(event, ...args) {
        this.observer.dispatch(event, ...args)
    }

    $on(event, callback) {
        const unsub = this.observer.subscribe(event, callback)
        this.unsubscribers.push(unsub)
    }

    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }

    initWindow() {
        this.initWindowListeners()
    }
}
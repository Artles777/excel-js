import {capitalizeOn, capitalizeWindow} from "@core/utils";

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DOMListener`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = capitalizeOn(listener)

            if (typeof this[method] === "undefined") {
                return this[method]
            } else {
                this[method] = this[method].bind(this)
            }

            if (!this[method]) {
                throw new Error(`This ${method} is not implemented in ${this.name} Component`)
            }
            // "on" is Clone addEventListener
            this.$root.on(listener, this[method])
        })
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = capitalizeOn(listener)
            this.$root.off(listener, this[method])
        })
    }

    initWindowListeners() {
        this.listeners.forEach(listener => {
            const method = capitalizeWindow(listener)
            this.$root.window(listener, this[method])
        })
    }
}
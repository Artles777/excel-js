class Dom {
    constructor(selector) {
        // #app
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    text(text) {
        if (typeof text === 'string') {
            this.$el.textContent = text
            return this
        }
        return this.$el.innerText.trim()
    }

    clear() {
        this.html('')
        return this
    }

    append(node) {
        if (node instanceof Dom) node = node.$el

        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this
    }

    addClass(tokens) {
        this.$el.classList.add(tokens)
        return this
    }

    removeClass(tokens) {
        this.$el.classList.remove(tokens)
        return this
    }

    toggleClass(tokens) {
        this.$el.classList.toggle(tokens)
        return this
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
        return this
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
        return this
    }

    window(eventType, callback) {
        window.addEventListener(eventType, callback)
    }

    closest(selector) {
        return $(this.$el.closest(selector))
    }

    getCoords() {
        return this.$el.getBoundingClientRect()
    }

    clone(deep) {
        return this.$el.cloneNode(deep)
    }

    find(selector) {
        return $(this.$el.querySelector(selector))
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }

    css(styles = {}) {
        if (this.$el) {
            Object.keys(styles).forEach(key => this.$el.style[key] = styles[key])
            return this
        }
    }

    cssClear(styles = {}) {
        Object.keys(styles).forEach(key => this.$el.style[key] = '')
        return this
    }

    extend(...styles) {
        styles.forEach(array => {
            Object.keys(array).forEach(key => this.$el.style[key] = array[key])
        })
        return this
    }

    id(parse = false) {
        if (parse) {
            const parsed = this.id().split(':')
            return {
                row: +parsed[0],
                col: +parsed[1]
            }
        }
        return this.data.id
    }

    focus() {
        this.$el.focus()
        return this
    }

    get data() {
        if (this.$el) {
            return this.$el.dataset
        }
        return false
    }

    get count() {
        return this.$el.childElementCount
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes) el.classList.add(classes)

    return $(el)
}
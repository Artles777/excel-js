export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot(className) {
        const $root = document.createElement('div')
        $root.className = className

        this.components.forEach(Component => {
            const component = new Component()
            $root.insertAdjacentHTML('beforeend', component.toHTML())
        })

        return $root
    }

    render() {
        this.$el.append(this.getRoot('excel'))
    }
}
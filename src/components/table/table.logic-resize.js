import {$} from "@core/dom";

export function resizeable(event, $root) {
    const $target = $(event.target)
    const $parent = $target.closest('[data-class="column"], [data-class="row"]')
    const coords = $parent.getCoords()
    let value
    $target.addClass('resize')

    document.onmousemove = e => {
        const delta = $target.data.resize === 'column'
            ? e.clientX - coords.right
            : e.clientY - coords.bottom

        document.body.ondragstart = () => false
        if (event.target.dataset.resize === 'column') {
            document.body.style.cursor = 'ew-resize'

            value = coords.width + delta
            $target.css({transform: `translateX(${delta}px)`})
        } else {
            document.body.style.cursor = 'ns-resize'

            value = coords.height + delta
            $target.css({transform: `translateY(${delta}px)`})
        }
    }

    document.onmouseup = () => {
        $target.removeClass('resize')
        if (event.target.dataset.resize === 'column') {
            $root.findAll(`[data-id="${$parent.data.id}"]`)
                .forEach($el => $el.style.width = value + 'px')
        } else {
            $parent.css({height: value + 'px'})
        }
        document.body.style.cursor = 'default'

        $target.css({transform: null})
        document.onmousemove = null
        document.onmouseup = null
    }
}
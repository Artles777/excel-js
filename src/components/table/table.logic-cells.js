import {$} from "@core/dom";

export function focusCell(event, $root) {
    const $target = $(event.target)
    // toggle cell table | delete all classes selected and add one class selected
    const $el = $root.findAll('[data-focus="selected"]')

    $el.forEach(node => {
        node.classList.remove('selected')
        node.style.zIndex = null
    })
    $target.closest('[data-focus="selected"]').addClass('selected')
    $target.css({
        overflow: 'visible',
        zIndex: 3
    })

    window.onscroll = () => {
        if (window.pageYOffset > 0) {
            $target.css({zIndex: 0})
        } else {
            $target.css({zIndex: 3})
        }
    }
}

export function blurCell(event) {
    const $target = $(event.target)
    $target.css({
        overflow: 'hidden'
    })
}
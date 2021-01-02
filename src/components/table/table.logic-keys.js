import {$} from "@core/dom";

export function keysEvents(event, ctx) {
    event.preventDefault()

    const id = ctx.selection.current.id(true)
    const $next = ctx.$root.find(nextSelector(event.key, id))
    ctx.selection.select($next)
    ctx.$emit('table:select', $next)
}

function nextSelector(key, {row, col}) {
    const MIN_VALUE = 1
    switch (key) {
        case 'Enter' :
        case 'ArrowDown' :
            row++
            break
        case 'Tab' :
        case 'ArrowRight' :
            col++
            break
        case 'ArrowLeft' :
            col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1
            break
        case 'ArrowUp' :
            row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
            break
    }
    return `[data-id="${row}:${col}"]`
}
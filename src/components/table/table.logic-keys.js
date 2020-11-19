import {$} from "@core/dom";

export function keys(event) {
    const $target = $(event.target)
    if (event.key === 'Enter') {
        event.preventDefault()
    }
    if (event.key === 'Control') {
        $target.css({whiteSpace: 'pre-wrap'})
    }
}
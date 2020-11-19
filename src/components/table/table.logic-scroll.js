import {$} from "@core/dom";

export function scrollWindow() {
    const $table = $('.excel__table')
    const $row = $table.find('[data-class="row"]:last-child')
    const $clone = $row.cloneNode(true)
    const $info = $row.querySelector('[data-class="info"]')
    const count = $table.count
    const documentHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )
    const currentPositionScroll = window.pageYOffset
    const windowHeight = document.documentElement.clientHeight
    if (documentHeight < currentPositionScroll + windowHeight + 100 && count <= 1000) {
        $info.childNodes[0].textContent = count.toString()
        $table.append($clone)
    }
}
import {$} from "@core/dom";

export function scrollWindow() {
    const $table = $('.excel__table')
    const $row = $table.find('[data-class="row"]:last-child')
    const $clone = $row.clone(true)
    const $info = $row.find('[data-class="info"]')
    const $cells = $clone.querySelectorAll('[data-class="cell"]')
    const count = $table.count
    const documentHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )
    const currentPositionScroll = window.pageYOffset
    const windowHeight = document.documentElement.clientHeight
    if (documentHeight < currentPositionScroll + windowHeight + 100 && count <= 1000) {
        $clone.dataset.id = count.toString()
        $cells.forEach($cell => $cell.dataset.row = count.toString())
        $cells.forEach(($cell, index) => {
            return $cell.dataset.id = `${count.toString()}:${index + 1}`
        })
        $info.$el.childNodes[0].textContent = count.toString()
        $table.append($clone)
    }
}
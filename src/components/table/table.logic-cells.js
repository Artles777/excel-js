import {$} from "@core/dom"
import {matrix} from "@/components/table/table.function";

export function focusCell(event, ctx) {
    const $target = $(event.target)
    if (event.shiftKey) {
        const $cells = matrix($target, ctx.selection.current)
            .map(id => ctx.$root.find(`[data-id="${id}"]`))
        ctx.selection.selectGroup(event.shiftKey, $cells)
    } else if (event.ctrlKey) {
        ctx.selection.selectGroup(event.ctrlKey, $target)
    } else {
        ctx.selection.select($target)
        ctx.selection.scrollTable($target)

        document.onmousemove = e => {
            const $target = $(e.target)
            const $cells = matrix($target, ctx.selection.current)
                .map(id => ctx.$root.find(`[data-id="${id}"]`))
            ctx.selection.selectGroup(e, $cells)
        }

        document.onmouseup = () => {
            document.onmousemove = null
            document.onmouseup = null
        }
    }
}
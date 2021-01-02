import {range} from "@core/utils";

export function checkDataset(event, value) {
    return Object.keys(event.target.dataset).includes(value)
}

export function matrix($target, $current) {
    const target = $target.id(true)
    const current = $current.id(true)
    const columns = range(current.col, target.col)
    const rows = range(current.row, target.row)

    return columns.reduce((acc, column) => {
        rows.forEach(row => acc.push(`${row}:${column}`))
        return acc
    }, [])
}
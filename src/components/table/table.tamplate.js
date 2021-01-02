const CODES = {
    A: 65,
    Z: 90
}

function toColumn(cols = 0, index) {
    return `
    <div class="column" data-col="${index + 1}" data-class="column">
        ${cols}
        <div class="column__resize" data-resize="column"></div>
    </div>
`
}

function toCell(row) {
    return function(_, col) {
        return `<div
            class="cell"
            data-class="cell"
            data-focus="selected"
            data-col="${col + 1}"
            data-row="${row + 1}"
            data-id="${row + 1}:${col + 1}"
            data-cell="${toChar(_, col)}${row + 1}"
            contenteditable
        ></div>`
    }
}

function createRow(cell = '', index = '') {
    return `
        <div class="row" data-class="row" data-id="${index}">
            <div class="row-info" data-class="info">
                ${index}
                ${index ? `<div class="row__resize" data-resize="row"></div>` : ''}
            </div>
            <div class="row-data" data-class="data">${cell}</div>
        </div>
    `
}

const toChar = (_, index) => String.fromCharCode(CODES.A + index)
const countedRows = Math.trunc(window.innerHeight / 20)

export function createTable(rowCount = countedRows, row = 0, rows = []) {
    const cellCount = new Array(CODES.Z - CODES.A + 1)
    const cols = cellCount
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(cols))
    while (row < rowCount) {
        const cell = cellCount
            .fill('')
            // .map((_, i) => toCell(_, i, row + 1))
            .map(toCell(row))
            .join('')
        rows.push(createRow(cell, ++row))
    }
    return rows.join('')
}
const CODES = {
    A: 65,
    Z: 90
}

function toColumn(cols = 0, index) {
    return `
    <div class="column" data-id="${index}" data-class="column">
        ${cols}
        <div class="column__resize" data-resize="column"></div>
    </div>
`
}

function toCell(_, index) {
    return `<div class="cell" data-class="cell" data-focus="selected" data-id="${index}" contenteditable></div>`
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

export function createTable(rowCount = countedRows, index = 0, rows = []) {
    const cellCount = new Array(CODES.Z - CODES.A + 1)
    const cols = cellCount
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    const cell = cellCount
        .fill('')
        .map((_, i) => i + 1)
        .map(toCell)
        .join('')

    index ? rows.push() : rows.push(createRow(cols))
    while (index < rowCount) {
        rows.push(createRow(cell, ++index))
    }
    return rows.join('')
}
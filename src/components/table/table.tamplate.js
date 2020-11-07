// `
//  <div class="row">
//         <div class="row-info"></div>
//         <div class="row-data">
//             <div class="column">A</div>
//             <div class="column">B</div>
//             <div class="column">C</div>
//         </div>
//     </div>
//
//     <div class="row">
//         <div class="row-info">1</div>
//         <div class="row-data">
//             <div class="cell" contenteditable>1</div>
//             <div class="cell" contenteditable>2</div>
//             <div class="cell" contenteditable>3</div>
//         </div>
//     </div>
//
//     <div class="row">
//         <div class="row-info">2</div>
//         <div class="row-data">
//             <div class="cell" contenteditable>1</div>
//             <div class="cell" contenteditable>2</div>
//             <div class="cell" contenteditable>3</div>
//         </div>
//     </div>
// `

const CODES = {
    A: 65,
    Z: 90
}

function toColumn(cols = '') {
    return `<div class="column">${cols}</div>`
}

function toCell() {
    return `<div class="cell" contenteditable></div>`
}

function createRow(cell = '', index = '') {
    return `
        <div class="row">
            <div class="row-info">${index}</div>
            <div class="row-data">${cell}</div>
        </div>
    `
}

const toChar = (_, index) => String.fromCharCode(CODES.A + index)
const countedRows = Math.trunc(window.innerHeight / 20)

export function createTable(rowCount = countedRows, rows = [], index = 1) {
    const cellCount = new Array(CODES.Z - CODES.A + 1) // created new array numbers from characters
    const cols = cellCount
        .fill('') // filling in empty lines
        .map(toChar) // converting to symbols
        .map(toColumn) // converting to DOM Nodes
        .join('') // converting from array to string

    const cell = cellCount
        .fill('') // filling in empty lines
        .map((_, i) => i + 1)
        .map(toCell) // converting to DOM Nodes
        .join('')

    rows.push(createRow(cols))
    while (index <= rowCount) {
        rows.push(createRow(cell, index++))
    }
    return rows.join('')
}
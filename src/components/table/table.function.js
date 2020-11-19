export function checkDataset(event, value) {
    return Object.keys(event.target.dataset).includes(value)
}
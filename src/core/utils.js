export function capitalize(string) {
    if (typeof string !== 'string') {
        return ''
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function capitalizeOn(eventType) {
    return 'on' + capitalize(eventType)
}

export function capitalizeWindow(eventType) {
    return 'onWindow' + capitalize(eventType)
}

export function range(start, end) {
    if (start > end) {
        [end, start] = [start, end]
    }
    return new Array(end - start + 1)
        .fill('')
        .map((_, i) => start + i)
}
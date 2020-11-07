// Pure functions

export function capitalize(string) {
    if (typeof string !== 'string') {
        return ''
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
}

// input => onInput
export function capitalizeOn(eventType) {
    return 'on' + capitalize(eventType)
}

// input => onWindowInput
export function capitalizeWindow(eventType) {
    return 'onWindow' + capitalize(eventType)
}
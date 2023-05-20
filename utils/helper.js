export const UserAvatar = require('assets/images/profile.png')

export function getImageFile(cropResult) {
    const nameIndx = cropResult.path.lastIndexOf('/') + 1
    return {
        name: cropResult.path.substr(nameIndx),
        type: cropResult.mime,
        uri: cropResult.path,
        size: cropResult.size,
        aspect_ratio: cropResult.width / cropResult.height
    }
}

export function formatNumber(num) {
    const formatter = Intl.NumberFormat('en', { notation: 'compact' })
    return formatter.format(num)
}

export function debounce(callback, delay) {
    let intervalId = undefined
    let returnValue

    function debounced(...args) {
        // very first run
        if (intervalId === undefined) {
            intervalId = null
            returnValue = callback(...args)
            return returnValue
        }

        clearInterval(intervalId)
        intervalId = setTimeout(
            () => { returnValue = callback(...args) }, delay
        )
        return returnValue
    }

    function resetDebounce() {
        clearInterval(intervalId)
        intervalId = undefined
    }

    return [debounced, resetDebounce]
}
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
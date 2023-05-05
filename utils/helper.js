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
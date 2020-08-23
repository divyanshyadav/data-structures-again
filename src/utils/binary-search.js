function binarySearch (array, target) {
    let low = 0
    let high = array.length - 1

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2)

        if (target === array[mid]) {
            return mid
        } else if (target < array[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return -1
}

module.exports = binarySearch

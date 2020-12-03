function hashCode (string) {
    string = string.toString()

    let hash = 0
    for (let i = 0; i < string.length; i++) {
        let chr = string.charCodeAt(i)
        hash = ((hash << 5) - hash) + chr
        hash |= 0 // Convert to 32bit integer
    }

    return hash
}

module.exports = {
    hashCode
}

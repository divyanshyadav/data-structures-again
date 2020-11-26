function hashCodePoly (string) {
    string = string.toString()
    const x = 31

    return string.split('').reduce((acc, cur, index) => {
        acc += cur.charCodeAt() * Math.pow(x, index)
        return acc
    }, 0)
}

module.exports = {
    hashCodePoly
}

function numberWithOrdinal (n) {
    if (!Number(n)) {
        return n
    }
    let s = ["th", "st", "nd", "rd"],
        v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

module.exports = numberWithOrdinal;

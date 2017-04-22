exports.timestamp = (date = new Date()) => {
  const addZero = (i) => {
    if (i < 10) {
      i = '0' + i
    }
    return i
  }

  const d = typeof date === 'number' ? new Date(date) : date
  const year = addZero(d.getUTCFullYear())
  const month = addZero(d.getUTCMonth() + 1)
  const day = addZero(d.getUTCDate())
  const hours = addZero(d.getUTCHours())
  const minutes = addZero(d.getUTCMinutes())
  const seconds = addZero(d.getUTCSeconds())

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

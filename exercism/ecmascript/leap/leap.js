class Year {
  isLeap(date) {
    return (date % 4 === 0 && date % 100 !== 0 || date % 400 === 0)
    }
}

export default Year
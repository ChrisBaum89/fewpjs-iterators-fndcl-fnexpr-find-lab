
function superbowlWin(record) {
  let result = record.find(record => record.result === "W")
  //return year if result is truthy, else return undefined
  return !!result ? result.year : undefined
}

superbowlWin

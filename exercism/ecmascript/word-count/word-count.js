export default class Words {
  count(phase){
    let totals = {}
    totals = Object.create(null)

    phase.trim()
      .toLowerCase()
      .split(/\s+|\n|\t/)
      .forEach(function(e){
          if(!totals[e]){
              totals[e] = 1
          } else {
              totals[e] = totals[e] + 1
          }
      })
    return totals
    }
}

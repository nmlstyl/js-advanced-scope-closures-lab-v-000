function produceDrivingRange(blockRange){
  return function (a, b){
    let first = parseFloat(a)
    let second = parseFloat(b)
    let length = second - first
    let result = ''
    if (length > blockRange){
      result = `${length - blockRange} blocks out of range`
    } else {
      result = `within range by ${blockRange - length}`
    }
    return result
  }
}

function produceTipCalculator(percentage){
  return function (cost){
    return cost * percentage;
  }
}

function createDriver(){
  let driverId = 0
  return class Driver {
    constructor(name){
      this.id = driverId++
      this.name = name
    }
  }
}

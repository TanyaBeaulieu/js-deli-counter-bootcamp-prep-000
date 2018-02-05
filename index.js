function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
  var a = katzDeliLine.indexOf(customer);
  return (`Welcome, ${customer}. You are number ${a+1} in line.`);
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
      return ("There is nobody waiting to be served!")
      }
  else {
      var served = katzDeliLine.shift()
      return (`Currently serving ${served}.`)
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
      return ("The line is currently empty.")
      }
  else {
    do {
        array.pop();
    } while (array.length > 0 && maybeTrue());  
    return array;

      for (let i = 0; i < 25; i++) {
      return (`Currently serving ${served}.`)
  }
}
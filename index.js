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
      return katzDeliLine.pop()
  }
}

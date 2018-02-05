function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
  var a = katzDeliLine.indexOf(customer);
  return (`Welcome, ${customer}. You are number ${a} in line.`);
}

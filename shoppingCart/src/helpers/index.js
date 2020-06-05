const toCurrency = function(value, unit= 'USD', dir = 'right'){
  if(dir = 'right'){
    return value + ' ' + unit;
  }else {
    return unit + ' ' + value;
  }
}
export {
  toCurrency
}

const toCurrency = function(value, unit= 'USD', dir = 'right'){
  if(dir = 'right'){
    return value + ' ' + unit;
  }else {
    return unit + ' ' + value;
  }
}

// Kiem tra xem string ep ve int co hop le hay khong? - Check quantity > 1 hay khong?
const validateQuantity = function(quantity){
  let num = parseInt(quantity);
  if(num == quantity && !isNaN(num)){
    return num >= 1;
  }
  return false;
}
export {
  toCurrency,
  validateQuantity
}


//reduce - executes reducer callback and returns accumulated result

let cost=[35,22,556,585,12];
let cartTotal = cost.reduce((total,el) => total+el, 1000);  //1000 - initial value
console.log(cartTotal);
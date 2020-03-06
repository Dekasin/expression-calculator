function eval() {
    // Do not use eval!!!
    return ;
}

function expressionCalculator(expr) {
    // write your solution here
    if (expr.includes("+")) {
      let  arr=expr.split("+");
        return arr[0]*1 + arr[1]*1;
    }

    if (expr.includes("-")) {
        let  arr=expr.split("-");
          return (arr[0]*1) - (arr[1]*1);
      }

    if (expr.includes("*")) {
    let  arr=expr.split("*");
        return (arr[0]*1) * (arr[1]*1);
    }  

    if (expr.includes("/")) {
    let  arr=expr.split("/");
       if ( arr[1]*1 != 0 ) {
            
        return arr[0]*1 / arr[1]*1 
       } else {  
        throw("TypeError: Division by zero.")
       };
    }  
    return 0;
}

module.exports = {
    expressionCalculator
}
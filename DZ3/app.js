for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) 
        console.log("FizzBuzz");
    else if (i % 3 === 0) 
        console.log("Fizz");
    else if (i % 5 === 0) 
        console.log("Buzz");
    else console.log(i);
    }

var liquid = ['milk', 'beer', 'beer', 'milk', 'milk']
var unhealthyLiquid = ['beer']
for(var i = 0; i < liquid.length; i++){ 
    if(unhealthyLiquid.includes(liquid[i])){ 
        console.warn( ${liquid[i]} bad) 
        continue
    }
    console.log(good ${liquid[i]})
    }
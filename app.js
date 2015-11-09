$(document).ready(function Buzztimator() {

 var x =  prompt("Enter a Value","0");
 var num1 = parseInt(x);

  for(var num = 1;num < x ; num++){

  if(num % 3 === 0 && num % 5 === 0){
  $("body").append("FizzBuzz<br>");
  }
  else if (num % 5 === 0){
   $("body").append("Buzz<br>");
  }
  else if (num % 3 === 0 ){
   $("body").append("Fizz<br>");
  } 
  else if (num % 3 > 0 && num % 5 > 0){
    $("body").append(num).append("<br>");
  }
    

  
}

})
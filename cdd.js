// //Challenge 1
function stringy(size) {
  var k= [];
  var f= true;
  for(i=0; i<size; i++){
    if(f==true){
      f=false;
      k.push(1);
    }
    else if(f==false){
      f=true;
      k.push(0);
    }
  }
  return k;
}
console.log(stringy(4));
console.log(stringy(6));

//Challenge 2
function reverse(int){
  var k=[];
  for(i= int.length-1; i>=0; i--){
    k.push(int[i]);
  }
  return k;
}
var array1= [1, 2, 3, 4, 5, 6, 7];
var array2= [4, 45, 7, 908, 609];
console.log(reverse(array1));
console.log(reverse(array2));

//Challenge 3
function fibonacci(num){
  var k=[];
  var f=1;
  var l=0;
  var m;
  for(i=0; i<num; i++){
    k.push(f);
    m= f;
    f= l+f;
    l= m;
  }
  return k;
}
console.log(fibonacci(15));

// Challenge 4
var validCode=12345;
var expirationDate= "April 20, 2017";
function convertMonth(monthName) {
    var myDate = new Date(monthName + " 1, 2000");
    var monthDigit = myDate.getMonth();
    return isNaN(monthDigit) ? 0 : (monthDigit + 1);
}
function checkCoupon(code){
  var date= new Date();
  var k= expirationDate.split(" ");
 if(code == validCode){
  if(date.getFullYear() <= k[2]){
    if(date.getMonth() < convertMonth(k[0])){
        var t= k[1].split(",")
        if(date.getDate() <= t[0]){
          return true;
        }
        else {
          return false;
        }
    }
    else{
      return false;
    }
  }
 else{
    return false;
  }
}
else{
  return false;
}
}
console.log(checkCoupon(12345));
console.log(checkCoupon(1234));

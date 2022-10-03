/*
for(let n =0; n<50000;n++){
  console.log(n+1)
}
*/


//program to add first  n natural number
/*let sum = 0;
let n = prompt("Enter the  number -")
n = Number.parseInt(n)
for ( let  s = 0; s <  n ; s++){
  sum += (s+1)
  // console.log((s+1), "+" )
}
console.log("sum of first " + n + "natural number is =" + sum)
console.log(s)//here this shows an error because "let" only work on block level  but "var" defines global 
*/

let obj = {
  anish:60,
  shub:70,
  lal:90,
  aryan:50,
  rocky:30,
  
}

//for in loop
for(let a in obj){  
console.log("Marks of "+ a +"is " + obj[a])
} 
// for of loop
for(let c of "obj"){  
console.log(c )
} 



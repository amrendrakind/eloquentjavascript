// Your code here.
function isEven(n){
	let num=Math.abs(n);
  	if (num==0){return true;}
  	else if(num==1){return false;}
  	else return isEven(num-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ?? 
console.log(isEven(-10));
//→ true
// Your code here.
function countBs(word){
	let Bs=0;	
  for(let i=0;i<word.length;i++)
    {
    	if(word[i]==="B")
          Bs++;
    }
  return Bs;
}
function countChar(word,key){
	let counter=0;
  for (let i=0;i<word.length;i++)
  {
  	if(word[i]===key)
      counter++;
  }
  return counter;
}
console.log(countBs("BBBC"));
// → 2
console.log(countChar("kakamramreamkerlak", "a"));
// → 5
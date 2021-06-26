function reverseString(word){
    var wordLength=0, String="";
    var i=0;
    for (i=word.length-1;i>=0;i--)
    {
  	if(word[i]!=" "){
        wordLength++;
    }
    else if (word[i]==" ") {
        for(let j=0;j<wordLength;j++){
            String+=word[i+j+1] //added 1 for space calculation
        }
        String+=" "
        wordLength=0    
    } 
  }
  String+=word[0];
  return String;
}
console.log(reverseString("I am Arfat"));
// Arfat am I
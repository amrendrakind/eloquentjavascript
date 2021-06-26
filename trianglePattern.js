function trianglePattern(str,size){
    let str1=str
    for(let i=0;i<size;i++){
        console.log(str1)
        str1+=str
    }
}
console.log(trianglePattern("#",7))

function gridBoard(str,size){
    let str1=""
    for (let i=0;i<size;i++){
        for(let j=1;j<=size;j++){
            if(i%2==0){
                if(j%2==1){
                    str1+=" "
                }
                else {
                    str1+=str
                }
            }
            else{
                if(j%2==1){
                    str1+=str
                }
                else {
                    str1+=" "
                }

            }
        }
        console.log(str1)
        str1=""
    }
}
console.log(gridBoard("*",8))

function numberPrint(){
    for(let i=3;i<=100;i++)
        {
            if(i%15==0){
                console.log(i+" FizzBuzz")
            }
            else if(i%3==0){
                console.log(i+" Fizz")
            }
            else if(i%5==0){
                console.log(i+" Bizz")
            }
        }
}
console.log(numberPrint())

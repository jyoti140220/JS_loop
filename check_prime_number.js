let readlinesync=require('readline-sync').question
let num=parseInt(readlinesync("enter number :-"))
let i=2;
let my=true;
while (i<num){
    if (num%i==0){
        my=false;
        break
    }
    i++;
}
if (my){
    console.log(`${num} is a prime number`)
}else{
    console.log(`${num} is not prime number`)
}
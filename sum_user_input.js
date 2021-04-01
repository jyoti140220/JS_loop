let readlinesync=require('readline-sync').question
let num=readlinesync("enter the number :")
let i=1;
let sum=0;
while (i<=num){
    let n=parseInt(readlinesync("enter number :-"))
    sum+=n;
    i++

}
console.log(sum)
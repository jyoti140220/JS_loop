let readlinesync=require('readline-sync').question
let num1=parseInt(readlinesync("enter the 1st number :-"))
let num2=parseInt(readlinesync("enter the 2nd number :-"))
i=1;
let sum=0;
while (i<=num1){
    sum+=num2;
    i=i+1

}console.log(sum)
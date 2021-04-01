let i=1;
let sum=0;
while (i<=10){
    let readlinesync=require('readline-sync').question
    let num=parseInt(readlinesync("enter the number :"))
    sum+=num
    i++;
}
console.log(sum)


let readlinesync=require('readline-sync').question
let num=parseInt(readlinesync("enter the number :"))
let i=1;
let a=0;
let b=1;
let z;
while (i<=num){
    console.log(a)
    z=a+b
    a=b
    b=z
    i++;

}
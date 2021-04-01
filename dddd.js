let readlinesync=require('readline-sync').question
let num=parseInt(readlinesync("enter :"))
console.log(typeof(num))


const x = Symbol('hey');
console.log(x.description); // hey


var a=[1,2,1,2,3,1,3]
var c=0
var i=0
while (true){
    if (a[i]!=null){
        c=c+1

    }else{
        break
    }
    i++;
}console.log(c)
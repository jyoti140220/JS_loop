const number=5;
let i=1;
while (i<=5){
    let readlinesync=require('readline-sync').question
    let n=parseInt(readlinesync("guess number 1 to 10 :-"));
    if (n==number){
        console.log("congress, you won!");
        break
    }else if (i==5 && n!=number){
        console.log("wrong guess & your change is over")
    }else{
        console.log("oops! wrong guess, try again")
    }
    i++;
}
const number=5;
let i=1;
while (i<=5){
    let readlinesync=require('readline-sync').question
    let num=parseInt(readlinesync("guess the number between 1 - 10 :-"))
    if (num==number){
        console.log("congress you won!")
        break
    }else if (i==5 && number!=num){
        console.log("your change is over")
    }
    else if (num>number){
        console.log("your guess number is large..try once again")

    }else if (num<number){
        console.log("your guess is small..try once again")
    }
    i++;
}
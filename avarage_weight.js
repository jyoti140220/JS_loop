let i=1;
let sum=0;
while (i<=11){
    let readlinesync=require('readline-sync').question
    let num=parseInt(readlinesync("enter the weight ;-"))
    sum+=num;
    i++;
}
const avarage=sum/11;
console.log(avarage)
if (avarage%5==0){
    console.log("avarage weight 5 ka multiple hai")
}else{
    console.log("avarage weight 5 ka multiple nhi h")
}



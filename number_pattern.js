// let i=5;
// let my=" ";
// while (i>=1){
//     a=String(i)
//     console.log(a.repeat(5))
//     i--;

// }

let i=5;
while (i>=1){
    let j=1;
    let my=''
    while (j<=5){
        my+=i+" "
        j++;
    }
    console.log(my)
    i--;
}
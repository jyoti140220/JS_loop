let i=1;
while (i<=5){
    let j=i;
    let my=""
    let c=0
    while (true){
        if (c==5){
            break
        }
        my+=j+" "
        c=c+1
        j=j+5
    }
    console.log(my)
    i++;
}
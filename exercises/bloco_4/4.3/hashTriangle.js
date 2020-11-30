let n = 5;
let leftSide = '';
let rightSide = '';
let top = '';
let base = (n * 2) + 1;

for ( let index = 0 ; index < n ; index += 1){
    for ( let secondIndex = 0 ; secondIndex < n ; secondIndex += 1){
        leftSide = leftSide + ' ';
        rightSide = rightSide + ' ';
        if (secondIndex = n -1){
            top = top + '*';
            console.log(leftSide + top + rightSide)
            leftSide = leftSide - ' ';
            rightSide = rightSide - ' ';
        }
    }
}
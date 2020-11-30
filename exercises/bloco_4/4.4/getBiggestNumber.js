function whichIsTheBiggest (array){
    let biggestNum;

    for (let counter = 0 ; counter < array.length ; counter += 1 ) {
        if (array[counter] > counter) {
            biggestNum = array[counter];
        }
    }

    for (let counter = 0 ; counter < array.length ; counter += 1){
        if(array[counter] == biggestNum)
        console.log(counter)
    }
}

let testArray = [2, 4, 6, 7, 10, 0, -3];
whichIsTheBiggest(testArray)
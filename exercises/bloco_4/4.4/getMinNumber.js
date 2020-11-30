function whichIsTheSmallest (array){
    let biggestNum;
    let smallestNum;

    for (let counter = 0 ; counter < array.length ; counter += 1 ) {
        if (array[counter] > counter) {
            biggestNum = array[counter];
        }
    }

    for (let counter = 0 ; counter < array.length ; counter += 1){
        if(array[counter] < biggestNum){
            smallestNum = array[counter];
            if(array[counter] == smallestNum){
                console.log(counter)
            }
        }
    }
}
let testArray = [2, 4, 6, 7, 10, 0, -3];
whichIsTheSmallest(testArray)
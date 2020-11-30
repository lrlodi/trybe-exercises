var unit = prompt("Type a unit: ");

switch(unit.toLowerCase()){
    case 'knight':
        console.log("The knight moves 4 squares in L shape.")
        break;
    
    case 'bishop':
        console.log("The bishop moves unlimited squares diagonally.")
        break;

    case 'tower':
        console.log("The tower moves unlimited squares in straight lines.")
        break;

    case 'pawn':
        console.log("The pawn moves one square in straight lines.")
        break;

    case 'queen':
        console.log("The queen moves unlimited squares in any direction.")
        break;

    case 'king':
        console.log("The king moves one square in any direction")
        break;

    default:
        console.log("That's not a unit in earthly chess.")
}
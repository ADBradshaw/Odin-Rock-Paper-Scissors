console.log("Hello, world!")
/*
Steps:
1. Randomly generate computers selection
    a. generate random number between 1 and 3
    b. map number to rock/scissors/paper
    c. output computer selection
2. Request player selection
    a. prompt player to input their selection (allow different versions e.g. rock/Rock/RocK/ROCK/r/R etc)
    b. (optional) error handling when player enters an invalid option
3. Determine who winner is
    a. convert both player and computer selections to numbers between 1-3
    b. if numbers are same draw
    c. if numbers are consecutive just compare
    d. if numbers are not consecutive add 3 to smaller of two then compare
    e. output game result message
4. Display message declaring winner

Other requirements:
1. number to r/s/p mapping:
    1=paper
    2=scissors
    3=rock
2. function to convert from number to r/s/p
    a. use switch/case

3. function to conver from r/s/p to number
    a. use switch case
*/

let computerSign = generateRSP();

let playerSign = "";

while (playerSign !== "r" && playerSign !== "s" && playerSign !== "p") {
    playerSign = prompt("Enter sign (R)ock, (S)cissors or (P)aper: ","");
    playerSign = playerSign.substring(0,1).toLowerCase();
}

alert("The computer chose " + computerSign.toUpperCase())

alert(determinWinner(computerSign, playerSign));

function converNumToRSP(num) {
    let RSP = "";
    switch(num) {
        case 1:
            RSP = "p";
            break;
        case 2:
            RSP = "s";
            break;
        case 3:
            RSP = "r";
            break;
        default:
            RSP = "how could you let this happen!!!";
    }
    return RSP;
}

function converRSPToNum(RSP) {
    let num = 0;
    switch(RSP) {
        case "p":
            num = 1;
            break;
        case "s":
            num = 2;
            break;
        case "r":
            num = 3;
            break;
        default:
            num = 9999;
    }
    return num;
}

function generateRSP() {
    let num = Math.floor(Math.random()*3 + 1);
    return converNumToRSP(num);
}

function determinWinner(computerSign, playerSign) {
    let computerValue = converRSPToNum(computerSign);
    let playerValue = converRSPToNum(playerSign);

    if(computerValue === playerValue) {
        return "It's a draw. What are the chances!";
    }

    let difference = Math.abs(computerValue - playerValue);

    if(difference !== 1) {
        computerValue *= -1;
        playerValue *= -1;
    }

    return computerValue > playerValue ? "The computer beat you DUMMY!!!" : "you won...";
}
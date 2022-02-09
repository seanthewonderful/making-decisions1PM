/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let eowynAttack = 50;
let witchKingAttack = 45;

if(eowynAttack > witchKingAttack){
    console.log("Eowyn is stronger.");
} else if(eowynAttack < witchKingAttack){
    console.log("Witch King is stronger.");
} else {
    console.log("They are equal in strength and must call on allies to settle this.");
};

let eowynHealth = 100;
let eowynDefense = 0;

if(eowynHealth + eowynDefense <= witchKingAttack){
    console.log("Eowyn has been slain.");
} else {
    //eowynHealth -= witchKingAttack;
    //above is the same as eowynHealth = eowynHealth - witchKingAttack
    console.log(`Eowyn is down to ${eowynHealth} health.`);
    //console.log("She is down to " + eowynHealth + ".")
};

let coinLandsHeads = false;

if(coinLandsHeads === true){
    console.log("Witch King can run away.");
} else {
    console.log("Eowyn may now slay Witch King.");
};

// for(let i = 0; i < 5; i++) {
//     if(eowynHealth > 0) {
//         eowynHealth = eowynHealth - witchKingAttack;
//         console.log(`Eowyn has ${eowynHealth} left.`);
//     } else {
//         console.log(`Eowyn died.`);
//     };
// };

while(eowynHealth > 0) {
    eowynHealth -= witchKingAttack;
    console.log(`Eowyn has ${eowynHealth} left.`);
    if(eowynHealth <= 0) {
        console.log("Eowyn has been slain.");
    };
};
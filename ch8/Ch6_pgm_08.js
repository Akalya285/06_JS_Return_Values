var getPlayerHealth;
var getPlayerPlace;

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

var showPlayerInfo = function (playerName, playerHealth, playerPlace) {
    console.log(getPlayerHealth(playerName, playerHealth));
    console.log(getPlayerPlace(playerName, playerPlace));
};

console.log(getPlayerHealth("Kandra", 50));
console.log(getPlayerPlace("Kandra", "The Dungeon of Doom"));

showPlayerInfo("Dax", 50, "The Bath");

var getPlayerName;
var getPlayerHealth;
var getPlayerPlace;
var getPlayerInfo;
var getBorder;

getPlayerName = function (playerName) {
    return playerName || "Unknown Player";
};

getPlayerHealth = function (playerName, playerHealth) {
    return (playerName || "Unknown Player") + " has health " + (playerHealth !== undefined ? playerHealth : "Unknown");
};

getPlayerPlace = function (playerName, playerPlace) {
    return (playerName || "Unknown Player") + " is in " + (playerPlace || "Unknown Place");
};

getBorder = function () {
    return "********************";
};

getPlayerInfo = function (playerName, playerPlace, playerHealth) {
    var playerInfo;

    playerInfo = "\n" + getPlayerName(playerName);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n" + getPlayerPlace(playerName, playerPlace);
    playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n";

    return playerInfo;
};

// First call to getPlayerInfo
console.log(getPlayerInfo("Kandra", "The Dungeon of Doom", 50));

// Second call to getPlayerInfo with different player information
console.log(getPlayerInfo("Dax", "The Enchanted Forest", 75));

// Exploring what happens if you call getPlayerInfo without any arguments
console.log(getPlayerInfo());

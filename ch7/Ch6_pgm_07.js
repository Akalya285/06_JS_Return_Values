var getPlayerName;

getPlayerName = function (playerName) {
    var prefixSuffix = "====";
    var formattedName = prefixSuffix + " " + playerName + " " + prefixSuffix;
    var borderedName = "|\n| " + playerName + "\n|";
    return {
        formattedName: formattedName,
        borderedName: borderedName
    };
};

var player1 = getPlayerName("Kiki");
console.log(player1.formattedName); // ==== Kiki ====
console.log(player1.borderedName);  // |
                                    // | Kiki
                                    // |

var player2 = getPlayerName("Mahesha");
console.log(player2.formattedName); // ==== Mahesha ====
console.log(player2.borderedName);  // |
                                    // | Mahesha
                                    // |

var player3 = getPlayerName("Jahver");
console.log(player3.formattedName); // ==== Jahver ====
console.log(player3.borderedName);  // |
                                    // | Jahver
                                    // |

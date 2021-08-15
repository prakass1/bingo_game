function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateRandomNumbers(board_length){
    let array = [];
    while (array.length < board_length){
        var random_number = generateRandomInteger(board_length);
        if (array.indexOf(random_number) == -1){
            array.push(random_number);
        }
    }
    return array;        
}

function generateBoard(size) {
    let gameContent = "<table class='game-board table table-bordered'><thead><tr class='game-header'><td id='game-header-cell' class='game-header-cell'>B</td><td class='game-header-cell'>I</td><td class='game-header-cell'>N</td><td class='game-header-cell'>G</td><td class='game-header-cell'>O</td></tr></thead>"
    $('#game-start').empty();
    let board_length = size * size;
    var randoms = generateRandomNumbers(board_length);
    let counter = 0;
    console.log(randoms)
    for (let i = 0; i < size; i++) {
        let subContent = "<tr>"
        for (let j = 0; j < size; j++) {
            subContent += "<td class='game-cell' id='game-cell-" + i + '-' + j + "'>" + randoms[counter] + "</td>"
            counter += 1;
            if (j == 4){
                subContent += "</tr>"
            }
        }
        gameContent += subContent;
        if (i == 4){
            gameContent += "</table>"
        }
    }
    return gameContent;
}


export {
    generateBoard,
    generateRandomInteger,
    generateRandomNumbers,
};

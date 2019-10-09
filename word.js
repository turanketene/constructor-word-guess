// Requiring letter.js because it is needed for this file
var Letter = require("./letter.js");

function Word(answer) {
    //Letter objects array
    this.objArray = [];
    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.objArray.push(letter);
    }
    this.log = function () {
        answerLog = "";
        for (var i = 0; i < this.objArray.length; i++) {
            answerLog += this.objArray[i] + " ";
        }
        console.log(answerLog + "\n");
    }
    this.userGuess = function (input) {
        for (var i = 0; i < this.objArray.length; i++) {
            this.objArray[i].guess(input);
        }
    }
}
// Making sure this file can be retrieved by other files
module.exports = Word;
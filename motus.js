let joueur1 = new Joueurs("swanou", 27)
let partie1 = new Parties(joueur1, this, "julie", 1, false)

console.log(partie1.tourSuivant());































// class Game {
//     constructor(player1, player2) {
//         this.player1 = player1;
//         this.player2 = player2;
//         this.currentPlayer = player1;
//         this.gameBoard = [[null, null, null], [null, null, null], [null, null, null]];
//     }

// get playMove (){
//     return this.play(this)
// }

//     play(move) {
//         const [row, col] = move;
//         if (this.gameBoard[row][col] !== null) {
//             throw new Error("Illegal move");
//         }
//         this.gameBoard[row][col] = this.currentPlayer;
//         if (this.checkWin()) {
//             console.log(`${this.currentPlayer} wins!`);
//         } else if (this.checkDraw()) {
//             console.log("It's a draw!");
//         } else {
//             this.switchPlayers();
//         }
//     }

//     switchPlayers() {
//         if (this.currentPlayer === this.player1) {
//             this.currentPlayer = this.player2;
//         } else {
//             this.currentPlayer = this.player1;
//         }
//     }

//     checkWin() {
//         // Check rows
//         for (let row = 0; row < 3; row++) {
//             if (
//                 this.gameBoard[row][0] !== null &&
//                 this.gameBoard[row][0] === this.gameBoard[row][1] &&
//                 this.gameBoard[row][1] === this.gameBoard[row][2]
//             ) {
//                 return true;
//             }
//         }

//         // Check columns
//         for (let col = 0; col < 3; col++) {
//             if (
//                 this.gameBoard[0][col] !== null &&
//                 this.gameBoard[0][col] === this.gameBoard[1][col] &&
//                 this.gameBoard[1][col] === this.gameBoard[2][col]
//             ) {
//                 return true;
//             }
//         }

//         // Check diagonals
//         if (
//             this.gameBoard[0][0] !== null &&
//             this.gameBoard[0][0] === this.gameBoard[1][1] &&
//             this.gameBoard[1][1] === this.gameBoard[2][2]
//         ) {
//             return true;
//         }
//         if (
//             this.gameBoard[0][2] !== null &&
//             this.gameBoard[0][2] === this.gameBoard[1][1] &&
//             this.gameBoard[1][1] === this.gameBoard[2][0]
//         ) {
//             return true;
//         }

//         return false;
//     }

//     checkDraw() {
//         for (let row = 0; row < 3; row++) {
//             for (let col = 0; col < 3; col++) {
//                 if (this.gameBoard[row][col] === null) {
//                     return false;
//                 }
//             }
//         }
//         return true;
//     }
// }

// const player1 = "X";
// const player2 = "O";

// const game1 = new Game(player1, player2);
// game1.play([0, 0]);
// game1.play([1, 1]);
// game1.play([0, 1]);
// game1.play([1, 2]);
// game1.play([0, 2]);
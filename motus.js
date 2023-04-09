let joueur1 = new Joueurs("swanou", 27)
let partie1 = new Parties(joueur1, this, "julie", 1, false)

partie1.lancementPartie()
console.log(`La fonction aGagner() est égal à : ${partie1.aGagne()}`);

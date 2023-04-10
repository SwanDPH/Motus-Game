let joueur1 = new Joueurs("swanou", 27)
let partie1 = new Parties(joueur1, this, this, 1, false)
let bouttonLancement = document.querySelector('.valideChoixUser')

bouttonLancement.addEventListener('click', function () {
    partie1.lancementPartie()
})
// console.log(`La fonction aGagner() est égal à : ${partie1.aGagne()}`);


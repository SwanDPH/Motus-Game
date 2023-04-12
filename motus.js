let joueur1 = new Joueurs("swanou", 27)
let partie1 = new Parties(joueur1,this,this,this)
let bouttonValideChoix = document.querySelector('.valideChoixUser')
let boutonLancementJeu = document.querySelector('.bouttonCommencerLaPartie')
 

partie1.afficherIndice()
console.log(partie1.motADetecter);

console.log(`L'index du random tableau est : ${partie1.indexTabRandom}`);
console.log(`Le mot est ${(partie1.motADetecter)}`);
console.log(`L'indice est : ${(partie1.indiceMotADetecter)}`);

boutonLancementJeu.addEventListener('click', function () {
    joueur1.recuperationDuSurnom()
    console.log(`Le nom du joueur est ${joueur1.surnom}`);
    partie1.afficherTabPremiereFois()
    joueur1.recuperationDuSurnom()
})

bouttonValideChoix.addEventListener('click', function () {
    partie1.algorithmeDunTour()
})
// console.log(`La fonction aGagner() est égal à : ${partie1.aGagne()}`);


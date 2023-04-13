let joueur1 = new Joueurs("swanou", 27)
let partie1 = new Parties(joueur1, this, this, this)
let boutonLancementJeu = document.querySelector('.bouttonCommencerLaPartie')
let bouttonValideChoix = document.querySelector('.valideChoixUser')
let bouttonRejouer = document.querySelector('.rejouer')

partie1.afficherIndice()

boutonLancementJeu.addEventListener('click', function () {
    joueur1.recuperationDuSurnom()
    partie1.afficherTabPremiereFois()
})

bouttonValideChoix.addEventListener('click', function () {
    partie1.algorithmeDunTour()
})
bouttonRejouer.addEventListener('click', function () {
    partie1.rejouer()
})
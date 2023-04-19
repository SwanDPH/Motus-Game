window.addEventListener('load', () => {
        let joueur1 = new Joueurs("swanou", 27)
        let partie1 = new Parties(joueur1, this, this, this)
        let boutonLancementJeu = document.querySelector('.bouttonCommencerLaPartie')
        let bouttonValideChoix = document.querySelector('.valideChoixUser')
        let bouttonRejouer = document.querySelector('.rejouer')
        let bouttonQuitter = document.querySelector('.quitterJeu')
        let bouttonInfo = document.querySelector('.info')

                boutonLancementJeu.addEventListener('click', function () {
                    joueur1.recuperationDuSurnom()
                    partie1.afficherIndice()
                    partie1.afficherTabPremiereFois()
                })

                bouttonValideChoix.addEventListener('click', function () {
                    partie1.algorithmeDunTour()
                })

                bouttonRejouer.addEventListener('click', function () {
                    partie1.rejouer()
                })
                
                bouttonQuitter.addEventListener('click', function () {
                    partie1.rejouer()
                })

                bouttonInfo.addEventListener('click', function () {
                    partie1.affichageZoneInfo()
                })
})
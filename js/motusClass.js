class Joueurs {
    constructor() {
        this.surnom = this.recuperationDuSurnom
    }

    recuperationDuSurnom() {
        sessionStorage.setItem("Surnom Joueur",`${document.querySelector('.nomJoueur').value}`)
        
        if (sessionStorage.getItem("Surnom Joueur") == "") {
            alert('Il nous faut impérativement un nom')
            return false
        } else {
            this.surnom = sessionStorage.getItem("Surnom Joueur")

            let premierePageJeu = document.querySelector('.premierePage')
            let deuxiemePageJeu = document.querySelector('.deuxiemePage')
            premierePageJeu.classList.add('invisible')
            deuxiemePageJeu.classList.remove('invisible')
            return true
        }
    }
}


class Parties {
    constructor(joueurActuel, motADetecter, motDonner, tour) {
        this.tableauMotsAleatoire = ["Pomme", "chien", "Fleur", "Table", "Faute", "Livre", "gazon", "plage"]
        this.tableauIndice = ["Fruit, rouge ou vert, comestible, riche en vitamines", "Animal domestique, mammifère, souvent utilisé comme animal de compagnie ou de garde", "Choses colorées, souvent utilisée pour décorer et offrir en cadeau", "Meuble plat, souvent utilisé pour manger, travailler ou étudier", "Erreur, quelque chose de mal fait ou dit", "Objet imprimé, souvent relié, contenant des informations, des histoires ou des instructions", "il est souvent tondu en été pour garder une pelouse bien entretenue.", "une étendue de sable ou de galets au bord de la mer, où les gens peuvent se baigner, se détendre ou pratiquer des sports nautiques."]
        this.indexTabRandom = Math.floor(Math.random() * (this.tableauMotsAleatoire.length - 0) + 0)
        this.motADetecter = this.tableauMotsAleatoire[this.indexTabRandom].toLowerCase()
        this.indiceMotADetecter = this.tableauIndice[this.indexTabRandom]
        this.joueurActuel = joueurActuel
        this.motDonner = ""
        this.tabMotADetecter = []
        this.tabMotDonne = []
        this.tour = 0
    }

    rejouer() {
        let affichageGagne = document.querySelector('.zoneGagne')
        affichageGagne.classList.add('invisible')

        this.indexTabRandom = Math.floor(Math.random() * (this.tableauMotsAleatoire.length - 0) + 0)
        this.motADetecter = this.tableauMotsAleatoire[this.indexTabRandom].toLowerCase()
        this.indiceMotADetecter = this.tableauIndice[this.indexTabRandom]
        this.motDonner = "?????"

        let classHTMLaDetecter = document.querySelectorAll('.lettreMotDonne')
            for (let i = 0; i < this.motDonner.length; i++) {
                classHTMLaDetecter[i].innerHTML = this.motDonner[i]
            }

        this.tour = 0
        this.algorithmeDunTour()
    }

    algorithmeDunTour() {
        let i = 0
        let y = 0
        this.motDonner = document.querySelector('.promptUser').value.toLowerCase()
        this.tabMotADetecter = []
        this.tabMotDonne = []
        let tourMax = 10

        this.verifValeurMotDonner()

        if (this.verifValeurMotDonner() == false) {
            let modalErreur5Lettres = document.querySelector('.modale')
            modalErreur5Lettres.style.display = 'block'

            let fermetureModal = document.querySelector('.fermeture')
            fermetureModal.addEventListener('click', function () {
                modalErreur5Lettres.style.display = 'none'
            })

        } else {
            this.aGagner(this.motDonner, this.motADetecter)

            if (this.aGagner() == true) {
                let zoneGagne = document.querySelector('.zoneGagne')
                zoneGagne.classList.remove('invisible')
            } else {
                while (this.aGagner() != true && this.tour < tourMax) {
                    this.afficherIndice()
                    this.nettoyageCase()

                    while (i < this.motADetecter.length) {
                        this.tabMotADetecter.push(this.motADetecter[i])
                        i++
                    }

                    while (y < this.motDonner.length) {
                        this.tabMotDonne.push(this.motDonner[y])
                        y++
                    }

                    this.afficherLesTableaux(this.tabMotADetecter, this.tabMotDonne)
                    this.comparaisonDeuxTableaux(this.tabMotADetecter, this.tabMotDonne)
                    this.tourSuivant(tourMax)

                    if (this.motDonner == this.motDonner) {
                        this.motDonner = document.querySelector('.promptUser').value
                        console.log('Rentrer un NOUVEAU mot')
                        break
                    }

                }
            }
        }
    }

    afficherIndice() {
        let indiceHTML = document.querySelector('.indiceHTML')
        indiceHTML.innerHTML = this.indiceMotADetecter
    }

    nettoyageCase() {
        let spanHTML = document.querySelectorAll("span")
        for (let i = 0; i < spanHTML.length; i++) {
            spanHTML[i].classList.remove('wellplaced')
            spanHTML[i].classList.remove('misplaced')
        }
    }

    comparaisonDeuxTableaux(motADetecter, motDonner) {
        let classHTMLaDetecter = document.querySelectorAll('.lettreMotADetecter')
        let classHTMDonner = document.querySelectorAll('.lettreMotDonne')

        for (let i = 0; i < motADetecter.length; i++) {
            if (motDonner[i].includes(motADetecter[i])) {
                classHTMDonner[i].classList.add('wellplaced')
                continue
            }

            if (motADetecter.includes(motDonner[i]) && motDonner[i].includes(motADetecter[i]) == false) {
                classHTMDonner[i].classList.add('misplaced')
                continue
            }
        }
    }

    afficherLesTableaux(motADetecter, motDonner) {
        let classHTMLaDetecter = document.querySelectorAll('.lettreMotADetecter')
        let classHTMDonner = document.querySelectorAll('.lettreMotDonne')

        for (let i = 0; i < motADetecter.length; i++) {
            classHTMLaDetecter[i].innerHTML = motADetecter[i]
        }

        for (let i = 0; i < motDonner.length; i++) {
            classHTMDonner[i].innerHTML = motDonner[i]
        }
    }

    afficherTabPremiereFois() {
        let classHTMLaDetecter = document.querySelectorAll('.lettreMotADetecter')
        for (let i = 0; i < this.motADetecter.length; i++) {
            classHTMLaDetecter[i].innerHTML = this.motADetecter[i]
        }
    }

    tourSuivant(tourMax) {
        let tourHTML = document.querySelector('.tourActuel')
        let tourMaxHTML = document.querySelector('.tourMax')

        this.tour++

        tourHTML.innerHTML = this.tour
        tourMaxHTML.innerHTML = tourMax

        if (this.tour == tourMax) {
            let zonePerdue = document.querySelector('.zonePerdue')
            let motADetecterHTML = document.querySelector('.motAdeviner')
            zonePerdue.classList.remove('invisible')
            motADetecterHTML.innerHTML = this.motDonner
        }
    }

    verifValeurMotDonner() {
        if (this.motDonner.length < 5) {
            return false
        }
        return true
    }

    aGagner() {
        if (this.motDonner == this.motADetecter) {
            let affichageGagne = document.querySelector('.affichageGagne')
            let motADetecterHTML = document.querySelector('.motAdeviner')
            let nbTourHTML = document.querySelector('.nbTourActuel')
            let quitterJeuHTML = document.querySelector('.quitterJeu')
            affichageGagne.classList.remove('invisible')
            motADetecterHTML.innerHTML = this.motDonner
            nbTourHTML.innerHTML = this.tour

            quitterJeuHTML.addEventListener('click', function () {
                alert('A la prochaine')
            })


            return true
        }
    }


    affichageZoneInfo(){
        let zoneInfoHTML = document.querySelector('.zoneInfo')
        zoneInfoHTML.classList.toggle('invisible')
    }
}
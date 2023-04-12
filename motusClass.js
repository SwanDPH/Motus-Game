class Joueurs {
    constructor(surnom, age) {
        this.surnom = surnom
        this.age = age
    }
}


class Parties {
    constructor(joueurActuel, motADetecter, motDonner, tour) {
        this.tableauMotsAleatoire = ["Pomme", "chien", "Fleur", "Table", "Faute", "Livre", "Idée", "Oiseau"]
        this.tableauIndice = ["Fruit, rouge ou vert, comestible, riche en vitamines", "Animal domestique, mammifère, souvent utilisé comme animal de compagnie ou de garde", "Choses colorées, souvent utilisée pour décorer et offrir en cadeau", "Meuble plat, souvent utilisé pour manger, travailler ou étudier", "Erreur, quelque chose de mal fait ou dit", "Objet imprimé, souvent relié, contenant des informations, des histoires ou des instructions", "une pensée ou un concept abstrait dans l'esprit d'une personne", "un animal volant avec des plumes et un bec pointu."]
        this.joueurActuel = joueurActuel
        this.motADetecter = "chien"
        this.motDonner = ""
        let tabMotADetecter = []
        let tabMotDonne = []
        this.tour = 0
    }
algorithmeDunTour(){
    let i = 0
    let y = 0
    this.motDonner = document.querySelector('.promptUser').value
    this.tabMotADetecter = []
    this.tabMotDonne = []
    let tourMax = 10

        this.verifValeurMotDonner()
        
        this.aGagner(this.motDonner, this.motADetecter)

                while (this.aGagner() != true && this.tour < tourMax) {
                    this.nettoyageCase()
                    
                    while (i< this.motADetecter.length) {
                        this.tabMotADetecter.push(this.motADetecter[i])
                        i++
                    }
                    console.log(`tableau lettre à detecter = ${this.tabMotADetecter}`);
    
                    while (y< this.motDonner.length) {
                        this.tabMotDonne.push(this.motDonner[y])
                        y++
                    }
                    console.log(`tableau lettre à donner = ${this.tabMotDonne}`);
    
                    this.afficherLesTableaux(this.tabMotADetecter, this.tabMotDonne)
                    this.comparaisonDeuxTableaux(this.tabMotADetecter, this.tabMotDonne)
                    this.tourSuivant(tourMax)
                            
                            if (this.motDonner == this.motDonner) {
                                this.motDonner = document.querySelector('.promptUser').value
                                console.log(("Rentre un NOUVEAU mot"));
                                break
                            }
                    
                }
            }

nettoyageCase(){
    let spanHTML = document.querySelectorAll("span")
    for (let i = 0; i < spanHTML.length; i++) {
        spanHTML[i].classList.remove('wellplaced')
        spanHTML[i].classList.remove('misplaced')
    }
}
    
comparaisonDeuxTableaux(motADetecter, motDonner){
    let classHTMLaDetecter = document.querySelectorAll('.lettreMotADetecter')
    let classHTMDonner = document.querySelectorAll('.lettreMotDonne')

    for (let i = 0; i < motADetecter.length; i++) {
        if (motDonner[i].includes(motADetecter[i])) {
            console.log(`Input User LETTRE BIEN PLACE : ${motDonner[i]}`);
            classHTMDonner[i].classList.add('wellplaced')
            continue
        }

        if (motADetecter.includes(motDonner[i]) && motDonner[i].includes(motADetecter[i]) == false) {
            console.log(`Input User mais lettre MAL PLACE : ${motADetecter[i]}`);
            classHTMDonner[i].classList.add('misplaced')
            continue
        }
    }
}

afficherLesTableaux(motADetecter, motDonner){
    let classHTMLaDetecter = document.querySelectorAll('.lettreMotADetecter')
    let classHTMDonner = document.querySelectorAll('.lettreMotDonne')

    for (let i = 0; i < motADetecter.length; i++) {
        classHTMLaDetecter[i].innerHTML = motADetecter[i]
    }

    for (let i = 0; i < motDonner.length; i++) {
        classHTMDonner[i].innerHTML = motDonner[i]
    }
}

tourSuivant(tourMax) {
    let tourHTML = document.querySelector('.tourActuel')
    let tourMaxHTML = document.querySelector('.tourMax')

    this.tour++
    
    tourHTML.innerHTML = this.tour
    tourMaxHTML.innerHTML = tourMax
}

verifValeurMotDonner(){
    if (this.motDonner.length < 5) {
        alert('Il faut renseigné un mot de 5 lettre minimum')
        return false
    }
    return true
}

aGagner(){
    if (this.motDonner == this.motADetecter) {
        let affichageGagne = document.querySelector('.affichageGagne')
        let motADetecterHTML = document.querySelector('.motAdeviner')
        let nbTourHTML = document.querySelector('.nbTourActuel')
        
        
        affichageGagne.classList.remove('invisible')
        motADetecterHTML.innerHTML= this.motDonner
        nbTourHTML.innerHTML= this.tour

        
        return true
    }
        if (this.tour == 10) {
            console.log("vous avez perdu");
        }
    }
}
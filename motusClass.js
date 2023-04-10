class Joueurs {
    constructor(surnom, age) {
        this.surnom = surnom
        this.age = age
    }
}


class Parties {
    constructor(joueurActuel, motADetecter, motDonner, tour) {
        this.tableauMotsAleatoire = ["Pomme", "chien", "Fleur", "Table", "Faute", "Livre", "Idée", "Oiseau"]
        this.joueurActuel = joueurActuel
        this.motADetecter = "chien"
        this.motDonner = ""
        this.tour = 0
    }

    affichagePremiereLettreMotADetecter(){
        let premiereLettreMotDonner = this.motADetecter[0]
        let lettre1 = document.querySelector(".L1")

        lettre1.innerHTML = premiereLettreMotDonner
    }


    lancementPartie() {
        let tourMax = 10
        let divDeRefereferenceHTML = document.querySelector('.affichageChoixUtilisateur')
        let LigneDivDeRefereferenceHTML = document.createElement('div')
                                        LigneDivDeRefereferenceHTML.classList.add('zoneMot')
                                        divDeRefereferenceHTML.appendChild(LigneDivDeRefereferenceHTML)
        
                while (this.aGagne() == false && this.tour < tourMax) {
                    // this.motDonner = prompt("Donner un mot")
                    this.motDonner = document.querySelector('.promptUser').value

                    if (this.motDonner == "") {
                        console.log(("nous avons besoin d un mot"));
                        break
                    }

                    // C'est ici que nous entrons dans les différents string et affichons le resultat du 1er tour

                    for (let i = 0; i < this.motADetecter.length; i++) {
                        for (let y = 0; y < this.motDonner.length; y++) {
                            this.afficherLettreDansHtml(i, y)
                            let lettreDuMotDonner = this.motDonner[y]
                            console.log(`voici les lettres ${lettreDuMotDonner}`)
                        }
                    this.affichageMotDonner(LigneDivDeRefereferenceHTML,i)
                    }
                    this.aGagne()
                    this.tourSuivant()

                    if (this.motDonner == this.motDonner) {
                        this.motDonner = document.querySelector('.promptUser').value
                        console.log(("Rentre un NOUVEAU mot"));
                        break
                    }
                }
                return true
    }

    affichageMotDonner(LigneDivDeRefereferenceHTML,indexMotDonner){
        let nouvelleCaseHTML = document.createElement("div")
                                nouvelleCaseHTML.classList.add('case')
        let nouveauSpanHTML = document.createElement("span")
                                nouveauSpanHTML.classList.add('lettre')
                                nouveauSpanHTML.innerHTML = this.motDonner[indexMotDonner]
    
        LigneDivDeRefereferenceHTML.appendChild(nouvelleCaseHTML)
        nouvelleCaseHTML.appendChild(nouveauSpanHTML)
    }

    tourSuivant() {
        console.log(`debut, tout n°${this.tour}`);
        this.tour++
        console.log(`FIN, tout n°${this.tour}`);
        return true
    }

    aGagne() {
        if (this.motDonner == this.motADetecter) {
            console.log('tu as gagné!');
        } else {
            console.log("Tente encore ta chance !");
            return false
        }
        return true
    }


    

    afficherLettreDansHtml(indexMotADetecter, indexMotDonner) {
        let lettresHtml = document.querySelectorAll('span')


        if (this.motADetecter[indexMotADetecter] == this.motDonner[indexMotDonner]) {
            console.error("MOT DONNER " +"Gagné " + "/" + this.motDonner[indexMotDonner] + "/" +" qui est à l'index "+[indexMotDonner])
            console.error("MOT A DETECTER " +"Gagné " + "/" + this.motADetecter[indexMotADetecter] + "/" +" qui est à l'index "+[indexMotADetecter])

            if (indexMotADetecter == indexMotDonner) {
                console.error(`Ici, nous mettrons "Lettre BIEN PLACEE" car ${this.motADetecter[indexMotADetecter]} est à l'index ${[indexMotADetecter]}`)
            
            }

            lettresHtml[indexMotADetecter].innerHTML = this.motDonner[indexMotDonner]
            lettresHtml[indexMotADetecter].classList.add('visible')
        }
    }
}
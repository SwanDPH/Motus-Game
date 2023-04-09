class Joueurs {
    constructor(surnom, age) {
        this.surnom = surnom
        this.age = age
    }
}


class Parties {
    constructor(joueurActuel, motADetecter, motDonner, tour) {
        this.joueurActuel = joueurActuel
        this.motADetecter = "chien"
        this.motDonner = motDonner
        this.tour = 0
    }


    lancementPartie() {
        let lettre1 = document.querySelector('.L1')
        let lettre2 = document.querySelector('.L2')
        let lettre3 = document.querySelector('.L3')
        let lettre4 = document.querySelector('.L4')
        let lettre5 = document.querySelector('.L5')

        let tourMax = 7
        while (this.aGagne() == false && this.tour < tourMax) {
            // this.motDonner = prompt("Donner un mot")
            this.motDonner = document.querySelector('.valideChoixUser').value
            console.log(`AGagner est sur  : ${this.aGagne()}`);
            console.log(`Voici le mot donner : ${this.motDonner}`);
            console.log(`Voici le mot a détecter : ${this.motADetecter}`);


            let i = 0

            // C'est ici que nous entrons dans les différents string et affichons le resultat du 1er tour
            for (let i = 0; i < this.motADetecter.length; i++) {
                console.log(`mot a DETECTER index : ${i} et Lettre : "${this.motADetecter[i]}"`);

                for (let y = 0; y < this.motDonner.length; y++) {
                    console.log(`mot PROMPT index : ${y} et Lettre : "${this.motDonner[y]}"`);
                }
                
            }
            this.afficherLettreDansHtml()
            this.tourSuivant()
            i++
        }
        return true
    }

    tourSuivant() {
        // si le mot donné ne correspond pas totalement ou si les lettres qu'il
        // vient de trouver match avec toutes les autres lettres a trouver
        console.log(`voici le tour précédent : ${this.tour}`);
        this.tour++
        console.log(`voici le tour actuel : ${this.tour}`);
        this.aGagne()
        return true
    }


    aGagne() {
        if (this.motDonner == this.motADetecter) {
            console.log('tu as gagné');
        } else {
            console.log("Tente encore ta chance !");
            return false
        }
        return true
    }

    afficherLettreDansHtml(){
        let tableauMots = ["Pomme", "chien", "Fleur", "Table", "Faute", "Livre", "Idée", "Oiseau"]
        let lettresHtml = document.querySelectorAll('span')

        for (let i = 0; i < this.motADetecter.length; i++) {
            console.log(`mot choisit index : ${i} et Lettre : "${this.motADetecter[i]}"`);
        
            for (let y = 0; y < this.motDonner.length; y++) {
                console.log(`mot this.motDonner index : ${y} et Lettre : "${this.motDonner[y]}"`);
        
                if (this.motADetecter[i] == this.motDonner[y]) {
                    console.error("Gagné " + "/" + this.motADetecter[i] + "/");
                    lettresHtml[i].innerHTML = this.motDonner[y]
                    lettresHtml[i].classList.add('visible')
                }
            }
        }         
    }
}
class Joueurs {
    constructor(surnom, age) {
        this.surnom = surnom
        this.age = age
    }
}


class Parties {
    constructor(joueurActuel, motADetecter, motDonner, tour, plateauDeJeu) {
        this.joueurActuel = joueurActuel
        this.motADetecter = "chien"
        this.motDonner = motDonner
        this.tour = 0
    }

    
    lancementPartie() {
        let i = 0
        
        while (i < 3) {
            this.motDonner = prompt("Donner un mot")
            console.log(`Voici le mot donner : ${this.motDonner}`);
            console.log(`Voici le mot a détecter : ${this.motADetecter}`);
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
        if (this.tour > 6){
            console.log("tu as perdu");
            return false
        } 
        else if (this.motDonner == this.motADetecter) {
            console.log('tu as gagné');
            return true
        } 
        else {
            console.log("Tente encore ta chance !");
            return false
        }

        return true
    }
}
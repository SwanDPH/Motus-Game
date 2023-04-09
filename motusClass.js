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
        let tourMax = 7
        while (this.aGagne() == false && this.tour < tourMax) {
            this.motDonner = prompt("Donner un mot")
            console.log(`AGagner est sur  : ${this.aGagne()}`);
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
        if (this.motDonner == this.motADetecter) {
            console.log('tu as gagné');
        } else {
            console.log("Tente encore ta chance !");
            return false
        }
        return true
    }
}
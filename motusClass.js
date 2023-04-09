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
    LancementPartie() {
        // si Le PROMPT Donné correspond au Mot chercher
        this.motDonner = prompt("Donner un mot")

        this.tourSuivant()
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
        if (this.motADetecter == this.motDonner && this.tour < 6) {
            console.log("vous avez GAGNER");
        } else {
            console.log("vous avez PERDU");
            return false
        }
        return true
    }
}
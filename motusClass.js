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
        this.motDonner = ""
        this.tour = 0
    }

    lancementPartie() {
        let tourMax = 7
        
        while (this.aGagne() == false && this.tour < tourMax) {
            this.motDonner = prompt("Donner un mot")
            // this.motDonner = document.querySelector('.promptUser').value
            // console.log(`Mot donner est  : ${this.motDonner()}`);

            // C'est ici que nous entrons dans les différents string et affichons le resultat du 1er tour
            for (let i = 0; i < this.motADetecter.length; i++) {
                console.log(`mot a DETECTER index : ${i} et Lettre : "${this.motADetecter[i]}"`);

                for (let y = 0; y < this.motDonner.length; y++) {
                    console.log(`mot PROMPT index : ${y} et Lettre : "${this.motDonner[y]}"`);
                }
                this.afficherLettreDansHtml()
            }
            this.tourSuivant()
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
        let lettre1 = document.querySelector('.L1')
        let lettre2 = document.querySelector('.L2')
        let lettre3 = document.querySelector('.L3')
        let lettre4 = document.querySelector('.L4')
        let lettre5 = document.querySelector('.L5')

        if (this.motDonner == this.motADetecter) {
            console.log('tu as gagné en une fois, Trop Fort !');
        } else if (lettre1.classList.contains('visible')==true && lettre2.classList.contains('visible')==true && lettre3.classList.contains('visible')==true && lettre4.classList.contains('visible')==true && lettre5.classList.contains('visible')==true) {
            console.log(`tu as gagné au bout du ${this.tour}`);
        } else {
            console.log("Tente encore ta chance !");
            return false
        }
        return true
    }

    afficherLettreDansHtml(){
        let tableauMots = ["Pomme", "chien", "Fleur", "Table", "Faute", "Livre", "Idée", "Oiseau"]
        let lettresHtml = document.querySelectorAll('span')
        let lettresMotDonner = []

        for (let i = 0; i < this.motADetecter.length; i++) {
            console.log(`mot choisit index : ${i} et Lettre : "${this.motADetecter[i]}"`);
        
            for (let y = 0; y < this.motDonner.length; y++) {
                console.log(`mot motDonner index : ${y} et Lettre : "${this.motDonner[y]}"`);
        
                if (this.motADetecter[i] == this.motDonner[y]) {
                    console.error("Gagné " + "/" + this.motADetecter[i] + "/");

                    lettresMotDonner.push(this.motADetecter[i])
                    console.error("Voici le tableau des gagnes Lettre " + "/" + lettresMotDonner + "/");

                    lettresHtml[i].innerHTML = this.motDonner[y]
                    lettresHtml[i].classList.add('visible')
                }
                console.log("1111 "+lettresMotDonner);
            }
            console.log("2222 "+lettresMotDonner);
        }  
        console.log("3333 "+lettresMotDonner);       
    }
}
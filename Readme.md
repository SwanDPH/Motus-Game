**Descriptif projet :**
=======================

Nb de Dev = 1

Convention d'écriture = camelCase

Explication  = Ce jeu, se base sur le célèbre jeu "Motus", qui consiste à faire
deviner un mot à un joueur. Chaque lettre du mot donné par le joueur est
analyser afin de détecter si elle est à la bonne position ou pas

 

 

Processus de pensée :
---------------------

1- Dans ce jeu il y a 2 entrées à comparer:

		\* 1 entrée qui est le "mot à deviner"

		\* 1 entrée qui est le "mot donner par le joueur"

 

2- Il me fallait donc :

		a/ Détecter et Afficher le mot entré par le joueur

		b/ Détecter chaque lettre de l'entrée "mot à deviner"

		c/ Détecter chaque lettre de l'entrée "mot donner par le joueur"

		d/ Comparer chaque lettre de l'entrée "mot à deviner" à l'entrée "mot donner par
le joueur"

		e/ Indiquer grâce à une classe CSS, si la lettre est présente dans le mot

				e-1 /  Si la lettre est présente dans le mot, alors, détecter si elle est bien
position grâce àune autre classe CSS

		f/ Comptabiliser le nombre de tour

		g/ Stopper le jeu, quand le nombre de tour est égal à 10

 

 

 

Explication technique du projet :
---------------------------------

### `Les Class :`

J'ai créé deux class :

Joueurs = Celle-ci, permet d'humaniser le code. Grâce à elle nous avons
connaissance du surnom du joueur actuel.

Parties = Celle-la est une représentation d'une partie. C'est le coeur du
programme.

 

### `Le SESSIONstorage :`

J'ai utilisé le SESSIONstorage afin de sauvegarder le Surnom du joueur.

Il m'a semblé préférable d'utiliser cette technique afin que le navigateur
puisse l'effacer une fois la fenêtre du jeu fermée.

 

### `Ma fonction "algorithmeDunTour()" dans la class Parties :`

	Principal algorithme du jeu, "algorithmeDunTour()" rappel une grande partie des
autres fonctions créées.

	Elle est principalement composé de boucle while et de "if/else"

 

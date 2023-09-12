# MasterMind

MasterMind est un jeu de logique classique où le joueur doit deviner la combinaison de couleurs générée par l'ordinateur. Ce jeu a été développé en utilisant JavaScript, HTML, et CSS.

## Comment jouer

1. Ouvrez le fichier `index.html` dans votre navigateur pour lancer le jeu.

2. Vous verrez un plateau de jeu composé de lignes de points (dots) et d'espaces pour insérer votre proposition de combinaison.

3. Cliquez sur les dots pour sélectionner la couleur que vous souhaitez insérer dans votre proposition.

4. Une fois que vous avez sélectionné une couleur pour chaque dot de la ligne, cliquez sur le bouton "Valider" pour soumettre votre proposition.

5. L'ordinateur générera une combinaison de couleurs secrètes au début du jeu.

6. Après chaque soumission, des notes vous indiqueront à quel point votre proposition est correcte :
   - Une note noire signifie que vous avez une couleur correcte à la bonne place.
   - Une note blanche signifie que vous avez une couleur correcte, mais elle n'est pas à la bonne place.

7. Répétez ces étapes jusqu'à ce que vous deviniez la combinaison secrète de l'ordinateur ou que vous atteigniez la fin du jeu.

## Fichiers du projet

- `index.html`: Le fichier HTML principal qui affiche l'interface utilisateur du jeu.
- `style.css`: Le fichier CSS qui définit la mise en page et l'apparence du jeu.
- `Couleur.js`: Le fichier JavaScript qui définit la classe `Couleur` utilisée pour représenter les couleurs du jeu.
- `main.js`: Le fichier JavaScript principal qui contient la logique du jeu.

## Commentaires dans le code

Le code JavaScript (`main.js`) est largement commenté pour expliquer chaque partie de la logique du jeu. Il utilise également une classe `Couleur` définie dans le fichier `Couleur.js` pour représenter les couleurs.

## Personnalisation des couleurs

Les couleurs utilisées dans le jeu sont définies dans le fichier CSS (`style.css`). Vous pouvez personnaliser ces couleurs en modifiant les variables CSS définies en haut du fichier.

```css
:root {
  --black: #000000;
  --blue: #0000ff;
  --green: #00ff00;
  --red: #ff0000;
  --white: #ffffff;
  --yellow: #ffff00;
}
```

Vous pouvez remplacer les valeurs hexadécimales des couleurs pour personnaliser l'apparence du jeu selon vos préférences.

Amusez-vous à jouer à MasterMind ! Si vous avez des questions ou des commentaires, n'hésitez pas à les partager.

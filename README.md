# Mots Fous - Palabras Locas 🎲

Un jeu éducatif interactif pour pratiquer l'expression orale en espagnol de manière ludique et créative.

## 🎮 À propos du jeu

**Mots Fous (Palabras Locas)** est une application web conçue pour aider les apprenants d'espagnol à améliorer leur expression orale. Le jeu propose des défis variés basés sur 4 types de consignes :

- 🟢 **Thèmes** : Parle pendant 30 secondes sur un sujet donné
- 🔵 **Émotions** : Exprime-toi avec une émotion spécifique
- 🔴 **Mots Fous** : Invente une histoire avec un mot surprenant
- 🟣 **Situations** : Improvise un dialogue selon un contexte

## 🚀 Technologies utilisées

- **React** - Bibliothèque UI
- **Vite** - Build tool et dev server
- **React Router** - Navigation
- **CSS3** - Styling avec animations
- **JavaScript** - Logique du jeu

## 📦 Installation

1. Clonez le dépôt :
```bash
git clone <votre-repo>
cd jeux-soussou
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur à l'adresse indiquée (généralement `http://localhost:5173`)

## 🎯 Comment jouer

1. Lance le dé pour avancer sur le plateau (30 cases)
2. Lis la consigne selon la couleur de ta case
3. Démarre le chronomètre et parle en espagnol pendant 30 secondes
4. Gagne des points :
   - +2 points si tu parles sans t'arrêter
   - +1 point bonus pour du vocabulaire original
5. Atteins la case finale pour terminer le jeu !

## 📁 Structure du projet

```
jeux-soussou/
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── Plateau.jsx   # Plateau de jeu
│   │   ├── De.jsx        # Dé virtuel
│   │   ├── CarteConsigne.jsx  # Affichage des consignes
│   │   ├── Timer.jsx     # Chronomètre
│   │   └── Scoreboard.jsx # Tableau des scores
│   ├── pages/            # Pages principales
│   │   ├── Home.jsx      # Page d'accueil
│   │   ├── Regles.jsx    # Règles du jeu
│   │   └── Jeu.jsx       # Page de jeu
│   ├── data/
│   │   └── cartes.js     # Données des cartes et plateau
│   ├── App.jsx           # Composant racine
│   └── main.jsx          # Point d'entrée
├── index.html
├── package.json
└── vite.config.js
```

## 🌐 Déploiement sur GitHub Pages

1. Modifiez le `base` dans `vite.config.js` avec le nom de votre dépôt :
```javascript
base: '/votre-nom-de-repo/',
```

2. Modifiez le `basename` dans `src/main.jsx` :
```javascript
<BrowserRouter basename="/votre-nom-de-repo">
```

3. Déployez avec :
```bash
npm run build
npm run deploy
```

## 🎨 Personnalisation

### Ajouter de nouvelles consignes

Éditez le fichier `src/data/cartes.js` pour ajouter de nouveaux thèmes, émotions, mots fous ou situations.

### Modifier les couleurs

Les couleurs principales sont définies dans les fichiers CSS de chaque composant. Les couleurs du thème sont :
- Violet principal : `#764ba2`
- Bleu violet : `#667eea`
- Rose : `#f5576c`

### Ajuster la durée du chronomètre

Dans `src/pages/Jeu.jsx`, modifiez la prop `duree` du composant `Timer` :
```jsx
<Timer duree={30} ... />
```

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm run preview` - Prévisualise la version de production
- `npm run deploy` - Déploie sur GitHub Pages

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

Ce projet est open source et disponible sous licence MIT.

## 🎓 Objectif pédagogique

Ce jeu a été créé pour encourager la pratique orale de l'espagnol dans un contexte ludique. Il est particulièrement adapté pour :
- Les cours d'espagnol en classe
- L'apprentissage autonome
- Les groupes de conversation
- La préparation aux examens oraux

## 💡 Conseils d'utilisation

- N'aie pas peur de faire des erreurs !
- Utilise des gestes pour t'aider à t'exprimer
- Si tu bloques, continue avec des mots simples
- Plus tu joues, plus tu progresseras naturellement

---

**Amusez-vous bien et progressez en espagnol ! 🎉**

# 📘 Guide de Déploiement sur GitHub Pages

## 🚀 Étapes pour déployer votre jeu

### 1️⃣ Créer un repository sur GitHub

1. Allez sur [GitHub](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"New"** ou **"+"** → **"New repository"**
3. Donnez un nom à votre repository (ex: `jeux-soussou` ou `mots-fous`)
4. Laissez-le **Public**
5. **NE COCHEZ PAS** "Initialize this repository with a README"
6. Cliquez sur **"Create repository"**

### 2️⃣ Configurer votre projet local

**IMPORTANT** : Avant de pousser votre code, vous devez modifier 2 fichiers :

#### A) Modifier `vite.config.js`
Remplacez `/jeux-soussou/` par le nom de votre repository :
```javascript
base: '/VOTRE-NOM-DE-REPO/',
```

#### B) Modifier `src/main.jsx`
Remplacez `/jeux-soussou` par le nom de votre repository :
```javascript
<BrowserRouter basename="/VOTRE-NOM-DE-REPO">
```

### 3️⃣ Initialiser Git et pousser le code

Ouvrez un terminal PowerShell dans le dossier du projet et exécutez :

```powershell
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Mots Fous game"

# Renommer la branche en main
git branch -M main

# Ajouter le repository distant (remplacez USERNAME et REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Pousser le code
git push -u origin main
```

### 4️⃣ Configurer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Dans **Source**, sélectionnez **"GitHub Actions"**

### 5️⃣ Déploiement automatique

Le déploiement se fait automatiquement à chaque push sur la branche `main` grâce au workflow GitHub Actions.

1. Le workflow se lance automatiquement
2. Attendez quelques minutes
3. Votre site sera disponible à : `https://USERNAME.github.io/VOTRE-REPO/`

### 6️⃣ Vérifier le déploiement

1. Allez dans l'onglet **Actions** de votre repository
2. Vous verrez le workflow en cours d'exécution
3. Une fois terminé (coche verte ✅), votre site est en ligne !

## 🔄 Mettre à jour le jeu

Après avoir fait des modifications :

```powershell
git add .
git commit -m "Description de vos modifications"
git push
```

Le déploiement se fera automatiquement !

## ⚠️ Problèmes courants

### Le site ne s'affiche pas correctement
- Vérifiez que vous avez bien modifié `vite.config.js` et `src/main.jsx` avec le bon nom de repository
- Le nom doit correspondre EXACTEMENT au nom de votre repository GitHub

### Page 404
- Assurez-vous que GitHub Pages est activé dans les paramètres
- Vérifiez que le workflow GitHub Actions s'est bien exécuté (onglet Actions)
- Attendez quelques minutes après le premier déploiement

### Le workflow GitHub Actions échoue
- Vérifiez que vous avez bien les permissions dans Settings → Actions → General
- Assurez-vous que "Read and write permissions" est activé

## 🎉 Félicitations !

Votre jeu est maintenant en ligne et accessible à tous !

Partagez le lien : `https://USERNAME.github.io/VOTRE-REPO/`

---

**Besoin d'aide ?** Consultez la [documentation GitHub Pages](https://docs.github.com/en/pages)

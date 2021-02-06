# Instagram Bot

-    [Installation](#Installation)
-    [Démarrer le bot](#Démarrer-le-bot)
-    [Commande Disponible](#Commande-Disponible)
     -    [Commande bot](#Bot)
     -    [Commande Jeux](#Jeux)
     -    [Commande Images](#Images)
     -    [Commande Utils](#Utils)
-    [Crédits](#Crédits)

## Installation

Si cela n'est pas encore fait, installer [npm](https://nodejs.org/fr/). *(De préférence la version LTS)*

Ensuite faites cette commande de le terminal de votre dossier ou vous avez mis le template :

```javascript
npm install
```
(Vous ne savez pas comment ouvrir le terminal d'un dossier [rendez vous ici](https://github.com/TheHuman00/bot-insta-template/blob/master/TERMINAL.md))

Vous devrez ensuite configurer votre fichier `config.js` ce trouvant à la racine
- **defaultPrefix** sera votre préfix par défault


Vous devrez ensuite configurer votre fichier `.env` ce trouvant à la racine
- Mettez vos identifiens du compte instagram au endroit approprié
- Ensuite y inscrire votre **lien mongoDB**. ([Comment avoir un lien mongoDB ?](https://github.com/TheHuman00/bot-insta-template/blob/master/MONGODB.md))


## Démarrer le bot

```bash
node index.js
```
ou
```bash
npm start
```
Ensuite vous aurez une message **PRET** donnant les statistiques du compte et cela signifie que le bot est prêt à être utilisé



# Commande Disponible

## Bot
- !ping: Voir le ping du bot.
- !help: Voir toute les commandes que le bot a.
- !eval: Lancer un code javascript.
- !prefix: Changer le préfixe du bot pour les groupes ou les discussions privées.

## Jeux
- !numero: Trouvez un nombre entre 1 et 100 en 2 minutes.

## Images 
Envoie votre photo de profil avec un petit montage

- !annonce
- !beau
- !flou
- !gay
- !poubelle
- !poutine.
- !rip.
- !supprimer

## Utils
- !mesinfos: Voir les infos de votre compte.


# Crédits

[Androz2091](https://github.com/Androz2091) pour [Insta.js](https://github.com/Androz2091/insta.js).

[Mr-KayJayDee](https://github.com/Mr-KayJayDee/) pour [instagram-bot](https://github.com/Mr-KayJayDee/instagram-bot).
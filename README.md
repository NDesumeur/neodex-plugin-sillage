# Sillage

Un jeu de rythme en vol : ton vaisseau file sur quatre altitudes au-dessus d'une ville de nuit. Monte et descends pour cueillir les étoiles au rythme de la musique, suis les rubans et franchis les portes d'énergie d'un coup de turbo. Joue les 200 morceaux du plugin Rythme, ou ta propre musique.

*English version: [README.en.md](README.en.md)*

## Commandes

- **↑** (ou **Z** / **W**) et **↓** (ou **S**), ou la **souris** : changer d'altitude.
- **Espace**, **Entrée**, **D**, **→** ou **clic** : turbo.
- **P** : pause · **Plein écran** pendant la partie.

## Comment jouer

- **Étoiles** : elles arrivent à l'altitude de leur son, les graves en bas, les aigus en haut. Sois à la bonne hauteur quand elles touchent le vaisseau.
- **Rubans** (notes longues) : reste à leur altitude jusqu'au bout.
- **Portes jaunes** : déclenche le turbo au moment où elles passent ; elles blanchissent au bon moment.

## Précision et points

Chaque note est jugée selon l'écart avec le bon moment : **Parfait**, **Bien**, **OK** ou ratée. Les points d'une note augmentent de 1 % par note de combo, jusqu'au double à 100 notes de suite ; une note ratée remet le combo à zéro. À la fin, la précision donne une note : **S** à partir de 95 %, **A** à 90 %, **B** à 80 %, **C** à 70 %, **D** en dessous.

## Chansons et difficulté

L'onglet **Chansons** reprend les 200 morceaux de Rythme. La difficulté de chaque niveau est calculée d'après ses notes, de 1 à 10 étoiles.

## Mes musiques

Dans **Mes musiques**, crée un niveau à partir d'un **fichier audio** importé ou d'une musique de ta bibliothèque **NeoMusic** : le jeu trouve son tempo et ses temps forts et en fait un niveau, à la **difficulté** choisie.

## Réglages

- **Volume** de la musique.
- **Décalage** (−300 à +300 ms) : il se règle tout seul après chaque partie selon ton retard ou ton avance moyens ; tu peux aussi le changer à la main.

## Données et synchronisation

Tes scores et notes par niveau et tes réglages sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Sillage → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).

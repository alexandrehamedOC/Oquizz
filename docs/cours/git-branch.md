# Git Branch

Une `branch` permet de créer un espace de travail isolé pour travailler sur une fonctionnalité.

## Voir les branches

```bash
# Voir les branches locales.
git branch
```

## Créer une branch

```bash
# Je crée une branch `nom-de-la-branch` et je me positionne dessus.
# La branch qui est créer, est toujours fait à partir de la branch actuelle.
git checkout -b nom-de-la-branch

# Example
git checkout -b feat/model-sequelize
```

## Se déplacer sur une branch

```bash
# Je me déplace sur la branch `nom-de-la-branch`.
git checkout nom-de-la-branch
# Je me déplace sur la branch `master`.
git checkout master
```

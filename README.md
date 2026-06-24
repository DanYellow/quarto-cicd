# Exemple projet quarto

Voici un petit exemple de projet basé sur Quarto (architecture "blog") avec intégration continue permettant de mettre à jour le blog sur action d'un bouton dans l'onglet "Actions" du dépôt. Le projet nécessite impérativement d'avoir installé Quarto.

## Processus de création

Pour réaliser ce projet, la commande `quarto create` a été utilisée, elle crée automatiquement les fichiers nécessaires au projet (ici un blog).

Ensuite un environnement virtuel Python a été crée via la commande `python3 -m venv __nom-dossier__`  car Python ne supporte plus l'installation directe de dépendances via pip, il faut impérativement créer un env virtuel.

Une fois l'env crée, il est possible de l'activer via `source venv/bin/__nom-dossier__` pour ensuite installer les dépendances Python [(voir documentation de Quarto)](https://quarto.org/docs/get-started/hello/vscode.html#overview)

A noter que si on souhaite utiliser d'autres dépendences Python, il faudra les installer via pip dans l'environnement virtuel. Par exemple `python3 -m pip install pandas numpy`.

L'ensemble des dépendances du projet sont listées dans le fichier requirements.txt. On peut installer toutes les dépendances via : `pip install -r requirements.txt` (dans l'environnement virtuel).

## Développement

Une fois le projet prêt, il faut lancer la commande `quarto preview` **dans l'environnement virtuel** de Python. Elle va lancer un serveur qui mettra à jour le navigateur après chaque changement.

### Commandes

- [Documentation de la cli - command line interface](https://quarto.org/docs/reference/)

- `quarto preview`: Permet de lancer le projet en mode développement. Chaque mise à jour de code mettra à jour le navigateur
    > S'il ne se passe rien, il est possible qu'il y ait une erreur dans le Terminal

- `quarto render` : Compile le projet dans un langage/format spécifié (défault html)



## Déploiement

Le site est déployé via GitHub Actions et rsync, et le site est compilé avant chaque commit, via `quarto render`. Pour effectuer la compilation automatique, il faut avoir le hook pre-commit. Faites soit un lien symbolique vers ./git/hooks ou copiez le fichier githooks/pre-commit dans le dossier ./git/hooks.

# Projet Azure Cloud Gaming

Le but de ce projet est de fournir un portail web qui permet de lancer un jeu déployé sur une machine virtuelle [Microsoft Azure](https://azure.microsoft.com/fr-fr/).

## Requirement

 - intaller docker (https://docs.docker.com/engine/install/)
 - installer docker-compose (https://docs.docker.com/compose/install/)

## Lancement du projet

```shell
sudo docker-compose up -d --build
```
ouvrez votre navigateur préféré à l'adress http://localhost:4200

## Nota Bene

 - Veillez à autoriser les pop-ups pour le lancement du jeu, sans quoi la fenêtre n'apparaîtra pas.
 - Il existe 2 comptes utilisateurs :
   * login: `joueur1` / password: `joueur1` qui dispose des droits pour l'éxecution d'un jeu
   * login: `joueur2` / password: `joueur2` qui ne peut lancer aucun jeu
 - Vous avez la possibilité de configurer la VM à utiliser. Pour cela, éditez le fichier `var.env` en renseignant les variables correspondantes.
   Vous devez également éditer le fichier `angular-client/src/environments/environment.prod.ts` en modifiant la valeur de la variable `gameUri`
   pour lui fournir l'adresse du jeu sur la VM. Il faudra alors executer la commande suivante afin de lancer l'application :
   `docker-compose --env-file var.env up -d --build`
   
## Choix techniques

### Architecture
L'application a été conçue à l'aide d'une base de données [mongoDB](https://www.mongodb.com/fr-fr) dans laquelle sont stockées les utilisateurs 
et les jeux présentés sur la page de liste des jeux. Le script `mongo/mongo-init.js` permet l'ajout automatique de données dans la base. 

Une API a été développée à l'aide du framework [Flask](https://flask.palletsprojects.com/en/2.0.x/) qui permet la mise en place d'applications web facilement.

Le portail a quant à lui été développé à l'aide du framework [Angular](https://angular.io/).

### Authentification

Le système d'authentification a été réalisée à l'aide d'un token [JWT](https://jwt.io/) stocké par le navigateur. Un intercepteur HTTP a été mis
en place afin d'injecter ce token à chaque requête effectuée en direction de l'API depuis l'application Angular. En plus de cet intercepteur, 
un Guard lui a été couplé afin d'empêcher l'accès au listing des jeux aux utilisateurs non identifiés en les redirigeant vers la page de login.

### Azure SDK

Le [SDK Microsoft azure pour python](https://docs.microsoft.com/fr-fr/azure/developer/python/azure-sdk-overview) m'a permis d'interagir avec une instance Azure.

### Build / Run

Afin de faciliter le dépoiement et de limiter l'installation de dépendances (node, python, angular ...) sur l'environnement d'exécution, 
j'ai fait le choix d'utiliser docker. Ainsi, au lancement du projet 3 conteneurs seront lancés :
 - azure-client pour le front
 - azure-back pour l'api
 - azure-gaming-project-mongo pour la base de données


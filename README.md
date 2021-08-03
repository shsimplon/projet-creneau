Explication pour lancer l'app:
l'app est une application accessible via une seule page html, pour aller d'une page à une autre j'ai utilisé la navigation via React on utilisant les links .
j'ai créé trois surfaces utilisateurs : profil, admin, rendez-vous.

le but de l'app est que l'admin peut voir les réservations, les valider, les modifier et notifier le client que le créneau est modifié ou validé mais l'user n'a le droit que d'accèder à la page rendez-vous, donc pour gérer les conflits entre créneaux, les rôles j'ai créé deux utilisateurs avec deux roles :admin et user , ce dernier peut utiliser que la surface réservation de créneau contrairement à l'admin peut accèder aux deux pages (booking et page ) .
Pour lancer l'application il devrait s'inscrire tous a bord puis se connceter et selon le role indiqué par le client soit il sera dirigé vers le page admin ou à la page rendez-vous .

- Comment avez-vous trouvé l’exercice ?
l'exercice en soit n'est pas difficile mais peut etre il me faut plus de temps pour le faire tranquillement car j'ai pris deux jour pour le realiser et tellement j'avais beaucoup de bug j'ai pas pu le faire comme je le voulais.
- Commentaire libre pour améliorer l'exercice (facultatif)
Laisser libre le choix au candidat d'utiliser le langage qui veut c'est bien mais sa le mit aussi dans le stress on voulou faire un autre langage que vous utilisez plus dans l'entreprise .

-https://github.com/socketio/socket.io
https://www.npmjs.com/package/react-time-picker
https://www.npmjs.com/package/react-datetime
https://practicalprogramming.fr/socket-io
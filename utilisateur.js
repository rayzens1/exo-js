let utilisateur = new Object();
utilisateur.nom = "John";
utilisateur.prenom = "Smith";

utilisateur.nom = "Pete";
delete utilisateur.nom;

console.log(utilisateur)
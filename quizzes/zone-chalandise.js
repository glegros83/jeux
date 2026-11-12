/* Quiz : la zone de chalandise (PMCV2)
   Format :
     q           : l'énoncé
     choix       : les propositions (l'ordre est mélangé à l'affichage)
     bonnes      : numéro(s) des bonnes réponses dans "choix" (0 = la 1re, 1 = la 2e…)
                   plusieurs numéros = plusieurs bonnes réponses
     temps       : secondes pour répondre (plus long pour les calculs)
     indice      : facultatif — l'utiliser divise les points de la question par 2
     explication : affichée après la réponse
*/
window.QUIZ_DATA = {
  id: "zone-chalandise",
  titre: "La zone de chalandise",
  classe: "PMCV2 · Enseignement pro",
  retour: "index.html#pmcv2/pro/chalandise",
  couleur: "#ff5a36",
  rappel: "Seuils : zone primaire 0-10 min · secondaire 10-20 min · tertiaire 20-30 min · hors zone au-delà de 30 min.",
  melangerQuestions: false,
  questions: [
    {
      q: "Qu'est-ce que la zone de chalandise d'un commerce ?",
      choix: [
        "La zone géographique d'où viennent la plupart de ses clients",
        "La liste de tous ses concurrents",
        "Le quartier où se trouve son siège social",
        "La zone où il fait de la publicité à la télévision"
      ],
      bonnes: [0],
      temps: 30,
      explication: "La zone de chalandise est l'espace géographique d'où provient la clientèle d'un point de vente. On la mesure ici par le temps de trajet jusqu'au commerce.",
      indice: "Pense à « d'où viennent les clients ? »"
    },
    {
      q: "Quelle est la différence entre une courbe isochrone et une courbe isométrique ?",
      choix: [
        "Isochrone = même temps de trajet (courbe déformée) ; isométrique = même distance (cercle)",
        "Isochrone = même distance (cercle) ; isométrique = même temps de trajet",
        "Il n'y a aucune différence, ce sont deux mots pour la même chose",
        "Isochrone = même nombre d'habitants ; isométrique = même revenu"
      ],
      bonnes: [0],
      temps: 45,
      explication: "Une courbe isométrique relie les points à la même distance : c'est un cercle. Une courbe isochrone relie les points au même temps de trajet : elle se déforme selon les routes, la voie rapide, la rivière ou les obstacles.",
      indice: "« Chrono » renvoie au temps."
    },
    {
      q: "Une commune est à 24 minutes en voiture du commerce. Dans quelle zone se situe-t-elle ?",
      choix: ["Zone primaire", "Zone secondaire", "Zone tertiaire", "Hors zone"],
      bonnes: [2],
      temps: 30,
      explication: "Primaire 0 à 10 min, secondaire 10 à 20 min, tertiaire 20 à 30 min, hors zone plus de 30 min. 24 min, c'est donc la zone tertiaire.",
      indice: "Reprends les seuils."
    },
    {
      q: "Une commune est à 9 km du commerce mais à 24 min à cause d'un seul pont. Avec la distance seule on la mettrait en zone primaire. Que faut-il retenir ?",
      choix: [
        "La courbe isochrone est plus pertinente : elle tient compte du temps réel, donc c'est la zone tertiaire",
        "La courbe isométrique est plus pertinente car 9 km, c'est proche",
        "Les deux courbes donnent toujours la même zone",
        "Il faut ignorer cette commune"
      ],
      bonnes: [0],
      temps: 60,
      explication: "Le client décide de venir selon le temps de trajet réel, pas selon la distance à vol d'oiseau. Les obstacles (rivière, pont) rendent la commune plus difficile d'accès. L'isochrone est donc plus pertinente pour un commerce.",
      indice: "Qu'est-ce qui compte pour un client : les km ou les minutes ?"
    },
    {
      q: "Dans une zone, il y a 2 000 familles avec enfants et le taux d'attractivité est de 40 %. Combien y a-t-il de familles clientes ?",
      choix: ["40 familles", "800 familles", "1 200 familles", "2 040 familles"],
      bonnes: [1],
      temps: 75,
      explication: "Familles clientes = familles avec enfants × taux d'attractivité = 2 000 × 40 % = 800.",
      indice: "2 000 × 0,40"
    },
    {
      q: "800 familles clientes dépensent chacune 150 € par an. Quelles sont les dépenses annuelles de la zone ?",
      choix: ["950 €", "12 000 €", "120 000 €", "1 200 000 €"],
      bonnes: [2],
      temps: 75,
      explication: "Dépenses de la zone = familles clientes × budget annuel par famille = 800 × 150 = 120 000 €.",
      indice: "800 × 150"
    },
    {
      q: "Comment évolue le taux d'attractivité quand on s'éloigne du commerce, de la zone primaire vers la zone tertiaire ?",
      choix: ["Il augmente", "Il reste identique", "Il baisse", "Il est toujours de 100 %"],
      bonnes: [2],
      temps: 30,
      explication: "Plus on est loin, moins les familles ont de chances de venir. Par exemple 50 % en zone primaire, 25 % en secondaire et 10 % en tertiaire.",
      indice: "Un client vient plus facilement s'il habite à côté."
    },
    {
      q: "Un concurrent est situé à 27 min du commerce, donc en zone tertiaire. Son CA annuel est de 90 000 € et 40 % vient de la zone. Pourquoi faut-il quand même le compter, et combien de CA prend-il à la zone ?",
      choix: [
        "Il est trop loin : on ne le compte pas (0 €)",
        "Les zones se superposent, il peut attirer des clients de la zone ; il prend 90 000 €",
        "Les zones se superposent, il peut attirer des clients de la zone ; mais seulement 40 % de son CA en vient : 36 000 €",
        "Il prend 40 000 € car c'est 40 %"
      ],
      bonnes: [2],
      temps: 105,
      explication: "Les zones de chalandise des commerces se chevauchent : un concurrent en zone tertiaire peut donc toucher nos clients. Mais seule une partie de son chiffre d'affaires vient de notre zone : 90 000 × 40 % = 36 000 €. Le reste vient d'autres communes.",
      indice: "Il y a deux idées : les zones qui se superposent et la part du CA."
    },
    {
      q: "Les dépenses de la zone sont de 260 000 €. Les concurrents prennent 90 000 € de CA à la zone. Le seuil de rentabilité est de 150 000 €. Quel est le CA potentiel et le projet est-il rentable ?",
      choix: [
        "350 000 € : rentable",
        "170 000 € : rentable (écart de +20 000 €)",
        "170 000 € : non rentable",
        "110 000 € : rentable"
      ],
      bonnes: [1],
      temps: 120,
      explication: "CA potentiel = dépenses de la zone − CA pris par les concurrents = 260 000 − 90 000 = 170 000 €. On compare au seuil : 170 000 − 150 000 = +20 000 €, donc le projet est rentable.",
      indice: "CA potentiel = dépenses − CA pris. Puis on compare au seuil."
    },
    {
      q: "À quoi sert le scénario pessimiste dans l'étude d'une zone de chalandise ?",
      choix: [
        "À supprimer les concurrents de la zone",
        "À tester si le projet reste rentable quand les concurrents prennent une plus grande part de clientèle de la zone",
        "À calculer le nombre d'habitants",
        "À choisir la couleur des courbes sur la carte"
      ],
      bonnes: [1],
      temps: 45,
      explication: "On augmente la part du CA des concurrents qui vient de la zone (par exemple 60 % devient 75 %). Le CA potentiel baisse. Si le projet passe sous le seuil, il y a un risque et le conseil doit le dire.",
      indice: "Pessimiste = on se met dans le cas le plus défavorable."
    }
  ]
};

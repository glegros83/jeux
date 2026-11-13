/* =====================================================================
   CATALOGUE DE LA SALLE DE JEUX
   - CLASSES    : les classes et leurs cours
   - SEQUENCES  : les séquences d'un cours
   - RESSOURCES : jeux, quiz, fiches PDF, cours en ligne
       type : "jeu" | "quiz" | "fiche" | "cours"
       cls / course / seq : où la ressource est rangée (seq facultatif)
   Ce qui est ouvert / à venir / masqué se règle dans la page admin
   (fichier etat.json), pas ici.
   ===================================================================== */
window.CATALOGUE = {
  CLASSES: [
    { id: "pmcv2", name: "PMCV2", emoji: "🛍️", color: "#ff5a36",
      full: "Première Métiers du Commerce et de la Vente",
      courses: [
        { id: "pro",  emoji: "🏪", name: "Enseignement pro", sub: "Tronc commun" },
        { id: "optA", emoji: "🎯", name: "Option A", sub: "Animation et gestion de l'espace commercial" },
      ] },
    { id: "smrc2", name: "SMRC2", emoji: "🤝", color: "#3b6fe0",
      full: "Seconde Métiers de la Relation Client",
      courses: [
        { id: "accueil",  emoji: "🛎️", name: "Enseignement pro", sub: "Accueil" },
        { id: "ecodroit", emoji: "⚖️", name: "Éco-droit", sub: "Économie et droit" },
        { id: "soutien",  emoji: "🧭", name: "Soutien au parcours", sub: "Construire son orientation" },
        { id: "pfmp",     emoji: "🧳", name: "PFMP", sub: "Préparer sa période en entreprise" },
      ] },
  ],

  SEQUENCES: [
    { cls: "pmcv2", course: "pro", id: "chalandise", emoji: "🗺️",
      name: "La zone de chalandise",
      notions: "Isochrones et isométriques · zones primaire, secondaire, tertiaire · CA potentiel et rentabilité" },
    { cls: "pmcv2", course: "pro", id: "veille", emoji: "🔎",
      name: "La veille commerciale",
      notions: "Sources internes et externes · les 5 étapes de la veille · critères d'une information utile" },
  ],

  RESSOURCES: [
    // ---- PMCV2 · Enseignement pro · Zone de chalandise
    { type: "fiche", id: "fiche-chalandise", cls: "pmcv2", course: "pro", seq: "chalandise", emoji: "📄",
      title: "Fiche : la zone de chalandise", desc: "L'essentiel à retenir + je sais utiliser",
      url: "fiches/zone-de-chalandise.pdf", color: "#e8a400" },
    { type: "quiz", id: "zone-chalandise", cls: "pmcv2", course: "pro", seq: "chalandise", emoji: "🧠",
      title: "Quiz : la zone de chalandise", desc: "10 questions chronométrées · calculatrice",
      url: "quiz.html?q=zone-chalandise", color: "#ff5a36" },
    { type: "jeu", id: "pion", cls: "pmcv2", course: "pro", seq: "chalandise", emoji: "📍",
      title: "Le Pion Rouge", desc: "Explore la zone de chalandise.",
      url: "Le-Pion-Rouge.html", color: "#d6336c" },

    // ---- PMCV2 · Enseignement pro · Veille commerciale
    { type: "fiche", id: "fiche-veille", cls: "pmcv2", course: "pro", seq: "veille", emoji: "📄",
      title: "Fiche : la veille commerciale", desc: "Sources, 5 étapes, critères d'une info utile",
      url: "fiches/veille-commerciale.pdf", color: "#1f9d6b" },

    // ---- SMRC2
    { type: "jeu", id: "accueil", cls: "smrc2", course: "accueil", emoji: "🛎️",
      title: "Panique à l'accueil", desc: "Gère la foule et garde ton calme.",
      url: "Panique-a-l-accueil.html", color: "#ff5a36" },
    { type: "jeu", id: "springfield", cls: "smrc2", course: "ecodroit", emoji: "⚡",
      title: "Panne à Springfield", desc: "Trouve l'origine de la panne.",
      url: "Panne-a-Springfield.html", color: "#e8a400" },
    { type: "jeu", id: "cap", cls: "smrc2", course: "soutien", emoji: "🧭",
      title: "Mon cap pour la Première", desc: "Trace ta route pour l'an prochain.",
      url: "Mon-cap-pour-la-Premiere.html", color: "#3b6fe0" },
    { type: "jeu", id: "pfmp-parcours", cls: "smrc2", course: "pfmp", emoji: "🎒",
      title: "PFMP : le parcours", desc: "6 niveaux pour être prêt(e) le jour J · 25-30 min",
      url: "pfmp-parcours.html", color: "#1f4fd8" },
  ],
};

/* Règles d'accès (partagées par le site et la page admin)
   États : "ouvert" | "grise" (visible, « À venir ») | "masque" (invisible)
   - Séquence absente de etat.json  → "grise"  (une nouvelle séquence reste fermée tant que vous ne l'ouvrez pas)
   - Ressource absente de etat.json → "ouvert" (elle suit sa séquence)
   - Une ressource ne peut pas être plus ouverte que sa séquence. */
window.ACCES = {
  seqKey: (s) => s.cls + "/" + s.course + "/" + s.id,
  seqState(etat, s) { return (etat.sequences || {})[this.seqKey(s)] || "grise"; },
  resOwnState(etat, r) { return (etat.ressources || {})[r.id] || "ouvert"; },
  resState(etat, r) {
    const rank = { ouvert: 0, grise: 1, masque: 2 };
    let st = this.resOwnState(etat, r);
    if (r.seq) {
      const s = window.CATALOGUE.SEQUENCES.find(x => x.cls === r.cls && x.course === r.course && x.id === r.seq);
      if (s) { const ss = this.seqState(etat, s); if (rank[ss] > rank[st]) st = ss; }
    }
    return st;
  },
};

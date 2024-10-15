// Ouvrir le chat en affichant la modale
function openChat() {
  document.getElementById("chat-modal").style.display = "flex";
}

// Fermer le chat en cachant la modale
function closeChat() {
  document.getElementById("chat-modal").style.display = "none";
}

// Fonction pour envoyer un message
function sendMessage() {
  const message = document.getElementById("message").value.toLowerCase();
  const chatbox = document.getElementById("chatbox");

  if (message) {
    // Afficher le message de l'utilisateur
    chatbox.innerHTML += "<div><strong>Vous:</strong> " + message + "</div>";
    document.getElementById("message").value = ''; // Réinitialiser le champ texte
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll vers le bas

    // Appeler la fonction pour obtenir une réponse
    const response = getResponse(message);

    // Ajouter la réponse du bot
    chatbox.innerHTML += "<div><strong style='color: #37757a;'>Bot:</strong> " + response + "</div>";
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll vers le bas
  }
}

// Écouter le clic sur le bouton envoyer
document.getElementById("send").addEventListener("click", sendMessage);

// Ajouter un écouteur d'événements pour la touche Enter
document.getElementById("message").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Empêche le saut de ligne
    sendMessage(); // Appeler la fonction d'envoi
  }
});

// Fonction pour générer une réponse en fonction des mots-clés
function getResponse(message) {
  // Mots-clés et réponses correspondantes (avec plusieurs options pour chaque mot-clé)
  const responses = {
    "site internet": [
      "Je propose des services de création de sites internet sur mesure adaptés à vos besoins. Pouvez-vous préciser le type de site que vous souhaitez créer (vitrine, e-commerce, etc.) ?",
      "Je peux vous accompagner dans la création d'un site internet moderne et responsive. Quel est votre projet exactement ?",
      "J'aide à la conception de sites internet. Avez-vous une idée précise de ce que vous souhaitez ?"
    ],
    "prix": [
      "Le coût dépend des fonctionnalités. Pour un devis personnalisé, visitez ma page de contact : <a href='/fr/contact.html'>Page de contact</a>.",
      "Chaque projet est unique. Contactez-moi pour discuter de votre projet et obtenir un devis : <a href='/fr/contact.html'>Page de contact</a>."
    ],

    "langages": [
      "Je travaille principalement avec HTML, CSS, JavaScript, ainsi que des frameworks comme React et Node.js. Utilisez-vous déjà un langage ou une technologie en particulier ?",
      "Pour le développement web, j'utilise des technologies modernes telles que JavaScript, HTML5, CSS3, et des frameworks comme React. Avez-vous une préférence pour un langage ou une technologie ?",
      "Les langages et frameworks comme JavaScript, React, et Node.js sont ma spécialité. Quel type de technologie cherchez-vous pour votre projet ?"
    ],
    "seo": [
      "Pour améliorer le SEO de votre site, je propose des services d'optimisation de contenu, de balises et de structure. Souhaitez-vous en savoir plus sur mes services SEO ?",
      "Le SEO est essentiel pour la visibilité en ligne. Je peux vous aider à améliorer les performances de votre site sur les moteurs de recherche. Vous avez des questions précises à ce sujet ?",
      "Je propose des services complets pour optimiser le référencement de votre site. Avez-vous déjà un site ou souhaitez-vous en créer un ?"
    ],
    "maintenance": [
      "Je propose un service de maintenance pour garder votre site à jour, sécurisé et performant. Souhaitez-vous plus d'informations sur ce service ?",
      "La maintenance de votre site est essentielle pour garantir sa sécurité et son bon fonctionnement. Avez-vous déjà un site en place ou avez-vous besoin de maintenance pour un projet en cours ?",
      "Je peux m'occuper de la maintenance de votre site, y compris la gestion des mises à jour et de la sécurité. Quels sont vos besoins actuels en matière de maintenance ?"
    ],
    "responsive": [
      "Tous les sites que je développe sont optimisés pour être parfaitement responsives, s'adaptant à tous les écrans. Avez-vous un projet en cours nécessitant un design responsive ?",
      "Je m'assure que chaque site web que je développe est responsive, s'adaptant aux mobiles, tablettes et ordinateurs. Avez-vous des questions sur le design de votre futur site ?",
      "Le responsive design est essentiel de nos jours. Si vous avez besoin d'un site qui s'adapte à tous les appareils, je peux vous aider. Quel est votre projet ?"
    ],
    "rendez-vous": [
      "Vous pouvez prendre un rendez-vous directement avec moi pour discuter de votre projet via Calendly : <a href='https://calendly.com/ton-calendly'>Prendre rendez-vous</a>.",
      "N'hésitez pas à réserver un créneau pour que nous puissions discuter de vos besoins. Rendez-vous sur mon Calendly : <a href='https://calendly.com/ton-calendly'>Prendre rendez-vous</a>.",
      "Pour parler de votre projet plus en détail, vous pouvez réserver un rendez-vous ici : <a href='https://calendly.com/ton-calendly'>Prendre rendez-vous</a>."
    ],
    "devis": [
      "Pour obtenir un devis détaillé, vous pouvez me contacter directement via ma page de contact : <a href='/fr/contact.html'>Page de contact</a>.",
      "Je vous invite à me contacter pour un devis personnalisé, adapté à votre projet : <a href='/fr/contact.html'>Page de contact</a>.",
      "Le devis dépendra de vos besoins spécifiques. Contactez-moi pour en discuter : <a href='/fr/contact.html'>Page de contact</a>."
    ],
    "bonjour": [
      "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
      "Bonjour ! Que puis-je faire pour vous aider avec votre projet ?",
      "Bonjour ! En quoi puis-je vous être utile aujourd'hui ?"
    ],
    "salut": [
      "Salut ! Comment puis-je vous aider ?",
      "Bonjour ! Que puis-je faire pour vous aujourd'hui ?",
      "Salut ! En quoi puis-je vous assister ?"
    ],
    "hello": [
      "Salut ! Comment puis-je vous aider ?",
      "Bonjour ! Que puis-je faire pour vous aujourd'hui ?",
      "Salut ! En quoi puis-je vous assister ?"
    ],
    "delais": [
      "Le délai de réalisation dépend de la complexité du projet. Pour un site vitrine, comptez environ 2 à 4 semaines.",
      "Le délai varie selon la taille du projet. Pour un site simple, cela peut prendre entre 2 et 4 semaines.",
      "La réalisation d'un projet dépend de vos besoins spécifiques. Contactez-moi pour que nous puissions évaluer ensemble un planning réaliste."
    ],
    "marche a suivre": [
      "Pour démarrer un projet, nous discutons d'abord de vos besoins. Ensuite, je vous envoie un devis détaillé.",
      "La première étape consiste à discuter de vos besoins en détail. Ensuite, je vous fournis un devis et un planning.",
      "Nous commençons par une discussion pour cerner vos attentes. Puis, je vous envoie un devis et un échéancier."
    ],
    "documents a fournir": [
      "Pour commencer, vous devez me fournir tous les textes, images, et éventuellement les informations techniques nécessaires.",
      "Les documents essentiels incluent les textes que vous souhaitez sur le site, les images, et les informations techniques.",
      "Je vous demanderai de préparer les textes, les images, ainsi que les informations techniques comme l'accès à votre serveur."
    ],
    "services": [
      "Je propose une large gamme de services, notamment la création de sites web, l'optimisation SEO, et le développement d'applications web.",
      "Mes services incluent la création de sites web responsives, l'UI/UX design, et bien plus encore. Consultez ma page services.",
      "J'offre des services sur mesure pour la création de sites web et d'applications. Consultez ma page pour plus de détails."
    ],
    "temps de developpement": [
      "Le temps de développement varie selon la complexité du projet. Un site vitrine prend généralement 2 à 4 semaines.",
      "La durée du développement dépend du projet. En général, pour un site simple, comptez 2 à 4 semaines.",
      "La durée du développement est ajustée en fonction des fonctionnalités demandées. Nous établirons un planning ensemble."
    ],
    "demarrer un projet": [
      "Pour démarrer, nous pouvons fixer un rendez-vous via Calendly pour discuter de vos besoins en détail : <a href='https://calendly.com/ton-calendly'>Prendre rendez-vous</a>.",
      "Pour lancer le projet, je vous invite à réserver un créneau sur mon Calendly afin que nous puissions discuter de vos attentes : <a href='https://calendly.com/ton-calendly'>Prendre rendez-vous</a>.",
      "Nous pouvons démarrer rapidement. Prenez rendez-vous pour en discuter ici : <a href='https://calendly.com/ton-calendly'>Prendre rendez-vous</a>."
    ],
    "services": [
      "Je propose des services de création de sites web, de développement d'applications web, et d'optimisation SEO. Vous pouvez consulter mes services sur mon site."
    ],
    "type de site web": [
      "Je peux créer des sites vitrines, des sites e-commerce, des applications web, et bien plus. Quel type de site avez-vous en tête ?"
    ],
    "cms": [
      "Je travaille avec différents CMS comme WordPress, Drupal, et autres selon vos besoins."
    ],
    "maintenance": [
      "Oui, je propose des services de maintenance pour garantir la sécurité et la mise à jour régulière de votre site web."
    ],
    "technologies préférées": [
      "J'utilise des technologies modernes comme HTML5, CSS3, JavaScript, React, Node.js, et Flutter Flow pour le développement mobile."
    ],
    "processus de travail": [
      "Mon processus inclut la découverte du projet, la définition des objectifs, le design, le développement, les tests, et enfin la mise en ligne."
    ],
    "tarifs": [
      "Mes tarifs varient selon la complexité du projet. Pour obtenir un devis personnalisé, vous pouvez me contacter via ma page de contact."
    ],
    "exemples projets": [
      "Oui, vous pouvez consulter mon portfolio en ligne pour voir certains de mes projets récents."
    ],
    "besoins spécifiques": [
      "Nous commencerons par définir vos besoins, ensuite je vous proposerai une solution adaptée avec un devis."
    ],
    "delai site web": [
      "Un site vitrine peut prendre entre 2 à 4 semaines, tandis qu'un projet plus complexe prendra plus de temps."
    ],
    "cout projet": [
      "Le coût varie selon les fonctionnalités et les spécificités de votre projet. Je vous recommande de demander un devis personnalisé."
    ],
    "integration logo charte": [
      "Oui, je peux intégrer votre logo et votre charte graphique dans le design du site."
    ],
    "assistance informatique": [
      "Bien sûr ! Je vous accompagne tout au long du projet pour rendre les choses aussi simples que possible."
    ],
    "contact": [
      "Vous pouvez me contacter via ma page de contact ou prendre un rendez-vous directement sur Calendly."
    ],
    "delai livraison": [
      "Le délai dépend de la complexité du projet, mais un projet simple prend généralement entre 2 à 4 semaines."
    ],
    "garanties": [
      "Je propose une garantie de qualité et de satisfaction, ainsi qu'un suivi après la mise en ligne du site."
    ],
    "referencement naturel": [
      "Oui, j'assure le référencement naturel (SEO) pour que votre site soit bien positionné sur les moteurs de recherche."
    ],
    "responsive": [
      "Tous les sites que je développe sont responsives, ils s'adaptent aux différents types d'appareils."
    ],
    "outils performance": [
      "Oui, j'utilise des outils comme Google Analytics pour suivre les performances de votre site."
    ],
    "situation": [
      "Je suis situé à Portet sur Garonne, mais je travaille avec des clients partout en France."
    ],
    "tarifs horaires": [
      "Mes tarifs horaires sont ajustés en fonction du projet. Contactez-moi pour discuter de vos besoins."
    ],
    "forfaits": [
      "Oui, je propose des forfaits pour certains types de projets comme la création de sites vitrine ou e-commerce."
    ],
    "devis": [
      "Le devis est basé sur la complexité du projet, le nombre de pages, les fonctionnalités, et les technologies utilisées."
    ],
    "paiements echelonnes": [
      "Oui, des paiements échelonnés sont possibles pour certains projets."
    ],
    "delai estimation": [
      "Je peux vous donner une estimation après avoir discuté des détails de votre projet."
    ],
    "service urgence": [
      "Oui, pour des besoins urgents, je propose des services accélérés avec des délais plus courts."
    ],
    "technologies mobile": [
      "Pour le développement mobile, j'utilise Flutter, Flutter Flow, et React Native."
    ],
    "compatibilite navigateurs": [
      "Tous les sites que je développe sont compatibles avec les principaux navigateurs."
    ],
    "contrat maintenance": [
      "Je propose des contrats de maintenance pour garantir la sécurité et la mise à jour de votre site."
    ],
    "support technique": [
      "Je propose un support technique par email et téléphone pour répondre à vos questions ou résoudre des problèmes."
    ],
    "collaboration": [
      "Je travaille en étroite collaboration avec mes clients en restant disponible à chaque étape du projet."
    ],
    "outils gestion projet": [
      "J'utilise des outils comme Trello, Notion, et TimeMate, notre propre solution de gestion du temps, pour suivre l'avancement du projet."
    ],
    "avancement projet": [
      "Je vous propose des mises à jour régulières selon un planning que nous définissons ensemble."
    ],
    "etapes livraison": [
      "Après validation finale, je mets en ligne le site et je vous fournis une formation pour que vous puissiez gérer son contenu."
    ],
    "mise en ligne": [
      "Je m'occupe de la mise en ligne sur votre hébergement et je m'assure que tout fonctionne correctement."
    ],
    "formats livraison": [
      "Je vous fournis les fichiers du site téléchargeables depuis la rubrique client de mon site, ainsi qu'une copie sur clé USB."
    ],
    "confidentialite donnees": [
      "Je respecte les réglementations sur la protection des données et m'assure que votre site est sécurisé."
    ],
    "tendances web": [
      "Les tendances actuelles incluent le responsive design, l'optimisation SEO, et l'intégration d'intelligence artificielle."
    ]


  };

  // Boucler sur les mots-clés pour trouver une réponse
  for (let keyword in responses) {
    if (message.includes(keyword)) {
      // Sélectionner une réponse aléatoire parmi les options disponibles
      const options = responses[keyword];
      return options[Math.floor(Math.random() * options.length)];
    }
  }

  // Réponse par défaut si aucun mot-clé trouvé
  return "Je suis désolé, je n'ai pas compris votre question. Pouvez-vous préciser votre besoin concernant un site internet ou une application web ?";
}
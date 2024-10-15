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
    chatbox.innerHTML += "<div><strong>Bot:</strong> " + response + "</div>";
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
    "bonjour": [
      "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
      "Salut ! Que puis-je faire pour vous ?"
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
      "Salut ! Que puis-je faire pour vous aider avec votre projet ?",
      "Bonjour ! En quoi puis-je vous être utile aujourd'hui ?"
    ],
    "salut": [
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
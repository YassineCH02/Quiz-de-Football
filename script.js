const quizData = [
    {
        question: "Quel joueur a raté un penalty crucial en finale de la Coupe du Monde 1994 ?",
        options: ["Roberto Baggio", "Franco Baresi", "Paolo Maldini", "Dunga"],
        correct: "Roberto Baggio",
        image: "images/baggio.jpg"
    },
    {
        question: "En quelle année Zinedine Zidane a-t-il remporté son premier Ballon d’Or ?",
        options: ["1998", "2000", "1997", "1999"],
        correct: "1998",
        image: "images/zidane.jpg"
    },
    {
        question: "Quel club a remporté la Ligue des Champions en 1999 avec une victoire spectaculaire contre le Bayern Munich ?",
        options: ["Manchester United", "Real Madrid", "AC Milan", "Ajax"],
        correct: "Manchester United",
        image: "images/manchester1999.jpg"
    },
    {
        question: "Francesco Totti a joué toute sa carrière professionnelle dans un seul club. Quel est ce club ?",
        options: ["AS Roma", "Juventus", "Inter Milan", "AC Milan"],
        correct: "AS Roma",
        image: "images/totti.jpg"
    },
    {
        question: "Quel joueur brésilien a marqué deux buts en finale de la Coupe du Monde 2002 ?",
        options: ["Ronaldo Nazário", "Ronaldinho", "Kaká", "Rivaldo"],
        correct: "Ronaldo Nazário",
        image: "images/ronaldo2002.jpg"
    },
    {
        question: "Quel pays a remporté l’Euro 2004 contre toute attente ?",
        options: ["Grèce", "Portugal", "Espagne", "Italie"],
        correct: "Grèce",
        image: "images/grece2004.jpg"
    },
    {
        question: "Quel club italien a remporté la Ligue des Champions en 2010 ?",
        options: ["Inter Milan", "Juventus", "AS Roma", "Napoli"],
        correct: "Inter Milan",
        image: "images/inter2010.jpg"
    },
    {
        question: "Paolo Maldini est une légende de quel club de Serie A ?",
        options: ["AC Milan", "Juventus", "Napoli", "AS Roma"],
        correct: "AC Milan",
        image: "images/maldini.jpg"
    },
    {
        question: "Quel joueur a inscrit un triplé en finale de la Coupe du Monde 2022 ?",
        options: ["Kylian Mbappé", "Lionel Messi", "Olivier Giroud", "Cristiano Ronaldo"],
        correct: "Kylian Mbappé",
        image: "images/mbappe2022.jpg"
    },
    {
        question: "Quel gardien légendaire a joué pour la Juventus pendant plus de 20 ans ?",
        options: ["Gianluigi Buffon", "Dino Zoff", "Wojciech Szczęsny", "Petr Čech"],
        correct: "Gianluigi Buffon",
        image: "images/buffon.jpg"
    },
    {
        question: "Dans quel pays se trouve le club du Boca Juniors ?",
        options: ["Argentine", "Brésil", "Uruguay", "Chili"],
        correct: "Argentine",
        image: "images/boca.jpg"
    },
    {
        question: "Daniele De Rossi a remporté la Coupe du Monde 2006 avec l’Italie, mais quel rôle jouait-il principalement ?",
        options: ["Milieu défensif", "Défenseur central", "Attaquant", "Gardien de but"],
        correct: "Milieu défensif",
        image: "images/derossi.jpg"
    },
    {
        question: "Quel club est surnommé 'Les Blaugranas' ?",
        options: ["FC Barcelone", "Real Madrid", "Atletico Madrid", "Valence"],
        correct: "FC Barcelone",
        image: "images/barcelona.jpg"
    },
    {
        question: "Qui est l’actuel meilleur buteur de l’histoire de la Ligue des Champions (2024) ?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Karim Benzema", "Robert Lewandowski"],
        correct: "Cristiano Ronaldo",
        image: "images/cristiano.jpg"
    },
    {
        question: "Quel joueur a marqué le fameux but de la 'main de Dieu' ?",
        options: ["Diego Maradona", "Lionel Messi", "Pelé", "Roberto Baggio"],
        correct: "Diego Maradona",
        image: "images/maradona.jpg"
    },
    {
        question: "Quel club a remporté la Serie A en 2023 après plus de 30 ans d’attente ?",
        options: ["Napoli", "AC Milan", "Inter Milan", "Juventus"],
        correct: "Napoli",
        image: "images/napoli.jpg"
    },
    {
        question: "Quel joueur portugais est surnommé 'CR7' ?",
        options: ["Cristiano Ronaldo", "Luis Figo", "João Félix", "Eusebio"],
        correct: "Cristiano Ronaldo",
        image: "images/cr7.jpg"
    },
    {
        question: "Quel pays a remporté la Coupe du Monde 2018 ?",
        options: ["France", "Croatie", "Brésil", "Allemagne"],
        correct: "France",
        image: "images/france2018.jpg"
    },
    {
        question: "Qui a remporté la Coupe du Monde 2014 en battant l’Argentine en finale ?",
        options: ["Allemagne", "Brésil", "Espagne", "France"],
        correct: "Allemagne",
        image: "images/germany2014.jpg"
    },
    {
        question: "Quel club a remporté la Premier League pour la première fois en 2016 contre toute attente ?",
        options: ["Leicester City", "Liverpool", "Chelsea", "Manchester City"],
        correct: "Leicester City",
        image: "images/leicester.jpg"
    },
    {
        question: "Qui a remporté le Ballon d’Or en 2022 ?",
        options: ["Karim Benzema", "Lionel Messi", "Robert Lewandowski", "Kylian Mbappé"],
        correct: "Karim Benzema",
        image: "images/benzema.jpg"
    },
    {
        question: "Quel joueur est célèbre pour avoir remporté trois Coupes du Monde ?",
        options: ["Pelé", "Maradona", "Zidane", "Ronaldo Nazário"],
        correct: "Pelé",
        image: "images/pele.jpg"
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");

function loadQuiz() {
    const currentQuiz = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <h2>${currentQuiz.question}</h2>
        <img src="${currentQuiz.image}" alt="Image de la question ${currentQuestion + 1}">
        <div>
            ${currentQuiz.options
                .map(
                    (option, index) =>
                        `<input type="radio" id="option${index}" name="answer" value="${option}">
                        <label for="option${index}">${option}</label>`
                )
                .join("")}
        </div>
    `;
}

function showResults() {
    quizContainer.innerHTML = `
        <h2>Résultat</h2>
        <p>Vous avez obtenu ${score} / ${quizData.length} bonnes réponses.</p>
        <img src="${getResultImage(score)}" alt="Résultat">
        <p>${getResultText(score)}</p>
    `;
    nextBtn.style.display = "none";
}

function getResultImage(score) {
    if (score <= 7) return "images/faible.jpg"; // Immagine per "faible"
    if (score <= 14) return "images/bien.jpg";  // Immagine per "bien"
    return "images/excellent.jpg";             // Immagine per "excellent"
}

function getResultText(score) {
    if (score <= 7) return "Faible. Vous devez revoir vos connaissances sur le football.";
    if (score <= 14) return "Bien ! Vous avez une bonne connaissance du football.";
    return "Excellent ! Vous êtes un véritable expert du football.";
}

nextBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (!selectedOption) {
        alert("Veuillez sélectionner une réponse !");
        return;
    }

    if (selectedOption.value === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
});

loadQuiz();
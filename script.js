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
    if (score <= 3) return "images/faible.jpg";
    if (score <= 7) return "images/bien.jpg";
    return "images/excellent.jpg";
}

function getResultText(score) {
    if (score <= 3) return "Faible. Vous devez revoir vos connaissances sur le football.";
    if (score <= 7) return "Bien ! Vous avez une bonne connaissance du football.";
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
let Gryffindor = 0;
let Ravenclaw = 0;
let Hufflepuff = 0;
let Slytherin = 0;

const questions = [
    "Do you like Dawn or Dusk? 1. Dawn, 2. Dusk:",
    "When I'm dead, I want people to remember me as: 1. The Good, 2. The Great, 3. The Wise, 4. The Bold:",
    "Which kind of instrument most pleases your ear? 1. The violin, 2. The trumpet, 3. The piano, 4. The drum:",
    "Which character did you liked the most? 1. Cedric, 2. Hagrid, 3.Neville, 4.Luna",
    "If I'm bored I probably would do: 1.Binge Watch shows, 2.Paint, 3.Read, 4.Go out"
    
];

// const answers = [
//     [1, "Gryffindor", "Ravenclaw"], // question 1
//     [2, "Hufflepuff", "Slytherin"],
//     [3, "Ravenclaw", "Hufflepuff"],
//     [4, "Slytherin", "Gryffindor"]
// ];

let currentQuestion = 0;

document.getElementById('next').addEventListener('click', function() {
    const answer = parseInt(document.getElementById('ans').value, 10);
    if (isNaN(answer) || answer < 1 || answer > 4) {
        alert("Please enter a valid number between 1 and 4.");
        return;
    }

    if (currentQuestion === 0) {
        if (answer === 1) {
            Gryffindor++;
            Ravenclaw++;
        } else if (answer === 2) {
            Hufflepuff++;
            Slytherin++;
        }
    } else if (currentQuestion === 1) {
        if (answer === 1) {
            Hufflepuff += 2;
        } else if (answer === 2) {
            Slytherin += 2;
        } else if (answer === 3) {
            Ravenclaw += 2;
        } else if (answer === 4) {
            Gryffindor += 2;
        }
    } else if (currentQuestion === 2) {
        if (answer === 1) {
            Hufflepuff++;
        } else if (answer === 2) {
            Slytherin += 2;
        } else if (answer === 3) {
            Ravenclaw++;
        } else if (answer === 4) {
            Gryffindor += 2;
        }
    } else if (currentQuestion === 3) {
        if (answer === 1) {
            Gryffindor++;
        } else if (answer === 2) {
            Slytherin += 2;
        } else if (answer === 3) {
            Ravenclaw++;
        } else if (answer === 4) {
            Hufflepuff += 2;
        }
    } else if (currentQuestion === 4) {
        if (answer === 1) {
            Hufflepuff++;
        } else if (answer === 2) {
            Ravenclaw += 2;
        } else if (answer === 3) {
            Slytherin++;
        } else if (answer === 4) {
            Gryffindor += 2;
        }
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestion];
        document.getElementById('ans').value = "";
    } else {
        const maxPoints = Math.max(Gryffindor, Ravenclaw, Hufflepuff, Slytherin);
        let house = "";

        if (Gryffindor === maxPoints) house = "Gryffindor";
        if (Ravenclaw === maxPoints) house = "Ravenclaw";
        if (Hufflepuff === maxPoints) house = "Hufflepuff";
        if (Slytherin === maxPoints) house = "Slytherin";

        document.getElementById('question').classList.add('hidden');
        document.getElementById('answer').classList.add('hidden');
        document.getElementById('next').classList.add('hidden');
        document.getElementById('result-text').innerText = `According to your choices, you are a ${house}!!!`;
        document.getElementById('result').classList.remove('hidden');
    }
});
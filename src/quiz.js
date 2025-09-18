class Question {
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
        
    }
    shuffleChoices() {
        for(let i = this.choices.length - 1;  i > 0; i--) {
            const v = Math.floor(Math.random() * (i + 1));
            [this.choices[i], this.choices[v]] = [this.choices[v], this.choices[i]];
        }
    }
}

    class Quiz {
        constructor(questions, timeLimit, timeRemaining){
            this.questions = questions;
            this.timeLimit = timeLimit;
            this.timeRemaining = timeRemaining;
            this.correctAnswers = 0;
            this.currentQuestionIndex = 0;
        }

        getQuestion() {
            return this.questions[this.currentQuestionIndex];

        }

        moveToNextQuestion() {
            this.currentQuestionIndex += 1;
        }

        shuffleQuestions() {
            for(let i = this.questions.length -1; i > 0;  i--) {
                const b = Math.floor(Math.random() * (i + 1));
                [this.questions[i], this.questions[b]] = [this.questions[b], this.questions[i]];

            }
            }
        checkAnswer(answer) {
            const q = this.getQuestion();
            if (!q) return false;
            const isCorrect = answer === q.answer;
        }
        }
    
    


    
   
    

    // 2. getQuestion()
    
    // 3. moveToNextQuestion()

    // 4. shuffleQuestions()

    // 5. checkAnswer(answer)

    // 6. hasEnded()

#! /usr/bin/env node
import inquirer from "inquirer";
// Define the list of questions for the quiz
const questions = [
    {
        question: "What does TypeScript bring to JavaScript development? ",
        choices: ["Static typing", "Dynamic typing", "Functional programming", "Object-oriented programming"],
        correctAnswer: "Static typing"
    },
    {
        question: "In TypeScript, what keyword is used to declare a variable with a specific type?",
        choices: ["var", "let", "const", "type"],
        correctAnswer: "type"
    },
    {
        question: "What is the purpose of TypeScript's interface keyword?",
        choices: ["To declare a new class", "To define a specific data structure", "To create a private method", "To implement inheritance"],
        correctAnswer: "To define a specific data structure"
    },
    {
        question: "How does TypeScript handle type inference?",
        choices: ["By always requiring explicit type declarations", "By automatically inferring types based on usage", "By throwing errors when types are ambiguous", "By ignoring type declarations altogether"],
        correctAnswer: "By automatically inferring types based on usage"
    },
    {
        question: "What is a union type in TypeScript?",
        choices: ["A type that represents a single value", "A type that combines multiple types using the | operator", "A type that represents an array of values", "A type that represents a function"],
        correctAnswer: "A type that combines multiple types using the | operator",
    },
    {
        question: "How does TypeScript support the concept of type 'assertion'?",
        choices: ["By converting one type to another implicitly", "By forcing a value to be of a specific type", "By allowing any value to be assigned to any variable", "By throwing errors when types don't match"],
        correctAnswer: "By forcing a value to be of a specific type"
    },
    {
        question: "What does the 'readonly' keyword do in TypeScript?",
        choices: ["It prevents a property from being changed after initialization", "It allows a property to be changed multiple times", "It makes a property accessible from outside the class", "It restricts access to a property to certain classes"],
        correctAnswer: "It prevents a property from being changed after initialization"
    },
    {
        question: "What is the key difference between 'interface' and 'type' declarations in TypeScript?",
        choices: ["Interfaces can only describe object shapes, while types can describe any data structure", "Types can only be used for primitive types, while interfaces are more versatile", "Interfaces are mutable, while types are immutable", "There is no difference, they are interchangeable"],
        correctAnswer: "Interfaces can only describe object shapes, while types can describe any data structure"
    },
    {
        question: "How does TypeScript handle 'null' and 'undefined' types?",
        choices: ["By treating them as separate primitive types", "By combining them into a single type called 'nullish'", "By treating them as equivalent to each other", "By throwing errors when they are encountered"],
        correctAnswer: "By treating them as separate primitive types"
    },
    {
        question: "What is the role of 'Generics' in TypeScript, and how are they used?",
        choices: ["Generics allow for dynamic typing of variables", "Generics enable the creation of reusable components with dynamic types", "Generics enforce strict typing rules in functions", "Generics are used for pattern matching in TypeScript"],
        correctAnswer: "Generics enable the creation of reusable components with dynamic types"
    },
];
// Function to conduct the quiz
async function conductQuiz(student) {
    for (const q of questions) {
        const answer = await inquirer.prompt({
            type: "list",
            name: "answer",
            message: q.question,
            choices: q.choices
        });
        // Check if the answer is correct
        if (answer.answer === q.correctAnswer) {
            student.score++;
        }
    }
}
// Function to display the result of the quiz
function displayResult(student) {
    console.log(`Congratulations ${student.name}!`);
    console.log(`You scored ${student.score} out of ${questions.length}.`);
}
// Function to start the quiz app
async function startQuiz() {
    console.log("Welcome to the Quiz App!");
    // Prompt for student's name
    const { name } = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Enter your name:"
    });
    // Create a new student with initial score 0
    const student = { name, score: 0 };
    // Conduct the quiz
    await conductQuiz(student);
    // Display the result
    displayResult(student);
}
// Start the quiz app
startQuiz();

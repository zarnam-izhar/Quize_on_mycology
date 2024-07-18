#! /usr/bin/env node

import inquirer from "inquirer"
const quiz: {
    question_1 : string,
    question_2 : string,
    question_3 : string,
    question_4 : string,
    question_5 : string,
} = await inquirer.prompt([{

    name: "question_1",
    type: "list",
    message: "What causes pulmonary zygomycosis?",
    choices:["rhizopus oryzae", "candida albican", "aspergillus niger", "cryptococcus neoformans"]
}, 
{
    name: "question_2",
    type: "list",
    message: "which one is the most dangerous strain of e.coli",
    choices:["EPEC", "ETEC", "EHEC", "EIEC"]
},
{
    name: "question_3",
    type: "list",
    message: "what is the major cause of peptic ulcer?",
    choices:["S.epnteric", "S.aureus", "H.pylori", "E.coli"]
},
{
    name: "question_4",
    type: "list",
    message: "what binds to ergosterol,causing oxidative membrane damage of fungi",
    choices:["Glucocorticoid", "Penicillin", "Ketoconazole", "Amphotericin B"]
}, {
    name: "question_5",
    type: "list",
    message: "What is the key symptoms of PCOS",
    choices:["Irregular Menstrual Cycles", "Excess Androgen Levels", "Polycystic Ovaries:", "All of the above"]
}
]);

let score:number = 0;

switch(quiz.question_1) {
    case "rhizopus oryzae" :
            console.log("1. Correct!");

        ++score;
        break;
        default:
            console.log("nall",quiz?.question_1);
};

switch(quiz.question_2){
    case "EHEC" :
        console.log("2. Correct!");

        ++score;
        break;
        default:
            console.log("2. Incorrect!");
};
switch(quiz.question_3){
    case "H.pylori" :
        console.log("3. Correct!");

        ++score;
        break;
        default:
            console.log("3. Incorrect!");
};

switch(quiz.question_4){
    case "Amphotericin B" :
        console.log("4. Correct!");
        ++score;
        break;
        default:
            console.log("4. Incorrect!");
};

switch(quiz.question_5){
    case "All of the above" :
        console.log("5. Correct!");

        ++score;
        break;
        default:
            console.log("5. Incorrect!");
};

console.log(`Score:${score}`);

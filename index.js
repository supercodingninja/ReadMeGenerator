var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require('inquirer');

// questions to ask the user //
let questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    },{
        type: "input",
        message: "Please give your logo information.",
        name: "logo"
    },{
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    },{
        type: "input",
        message: "Please give your GitHub profile link.",
        name: "GitHub"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
    },{
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices : [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },{
        type: "input",
        message: "Please describe the repository.",
        name: "description"

    },{
        type: "input",
        message: "Please state if others can contribute.",
        name: "contribute"
    },{
        type: "input",
        message: "Please state any test(s) require (1/3).",
        name: "test"
    },{
        type: "input",
        message: "Please state any test(s) require(2/3).",
        name: "test2"
    },{
        type: "input",
        message: "Please state any test(s) require (3/3).",
        name: "test3",
    },{
        type: "input",
        message: "State your accomplishments.",
        name: "accomplish"
    },{
        type: "input",
        message: "Please state provide a screenshot (1 of 3).",
        name: "scriptjs"
    },{
        type: "input",
        message: "Please state provide a screenshot (2 of 3).",
        name: "fileGnerator"
    },{
        type: "input",
        message: "Please state provide a screenshot (3 of 3).",
        name: "ReadMe"
    },{
        type: "input",
        message: "Please supply two references (1/2).",
        name: "ref1"
    },{
        type: "input",
        message: "Please supply two references (2/2).",
        name: "ref2"
    },{
        type: "input",
        message: "Please state your end-goal.",
        name: "endgoal"
    }
];


// Function to write to my ReadMe.md file. //
inquirer.prompt(questions).then(function(response) {
   console.log(response);
   
    var content = fileGenerator(response);
    console.log(content);
     fs.writeFile("./ReadMe.md", content, function(err){
         if (err) throw err
         console.log("success");
     });
} ); 
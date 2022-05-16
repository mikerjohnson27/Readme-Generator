const inquirer = require("inquirer")
const fs = require("fs")

//User Questions For README.md File
inquirer
    .prompt({
        type: "input",
        message: "What is the title of this heading?",
        name: "Title"
    },{
        type:"input",
        message: "Add a one sentance discription for the sub-heading of your project.",
        name: "subheading"
    },{
        type: "input",
        message: "Add a full discription for your project.",
        name: "discription"
    },{
        type: "input",
        message: "What is your username?",
        name: "username"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
    },{
        type: "input",
        message: "What is your name?",
        name: "name"
    },{
        type: "input",
        message: "What is the link to your repo?",
        name: "repoLink"
    },{
        type: "input",
        message: "Live link to your project?",
        name:"liveLink"
    },{
        type: "list",
        message: "What license would you link to use for this project?",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost",
          ],
        name: "license"
    })
// TODO: Include packages needed for this application
const inquire = require("inquire");
const fs = require("fs");
const generateFile = require("./utils/generatemarkdown");
console.log('Hello! Welcome to my README markdown generator.')
// TODO: Create an array of questions for user input
const questions = ({
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
            "GNUPLv3",
            "MIT",
            "ISC",
          ],
        name: "license"
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName,data,(err)=>{
    if(err){
        return console.log(err);
    }
 console.log("Great Job Now Go View Your README file");
 });
}

// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions)
        .then(function (userInput){
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
}

// Function call to initialize app
init();

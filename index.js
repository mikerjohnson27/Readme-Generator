// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const generateFile = require("./utils/generatemarkdown");
const fs = require ("fs");
console.log('Hello! Welcome to my README markdown generator.')
// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        message: "What is the title of this heading?",
        name: "title"
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
        message: "Add a directions for Installation. (Provide screenshots later)",
        name: "install"
    },{
        type: "input",
        message: "Sources used for this project.",
        name: "sources"
    },{
        type: "input",
        message: "Are there any notable features that this app may have?",
        name: "features"
    },{
        type: "input",
        message: "What is your username? (More then one add a comma and space between the usernames.)",
        name: "username"
    },{
        type: "input",
        message: "What is your email?  (More then one add a comma and space between the emails.)",
        name: "email"
    },{
        type: "input",
        message: "What is your name? (More then one add a comma and space between the names.)",
        name: "names"
    },{
        type: "list",
        message: "What license would you link to use for this project?",
        choices: [
            "GNUPLv3",
            "MIT",
            "ISC",
          ],
        name: "license"
    },{
        type: "input",
        message: "Live link to your project?",
        name: "features"
    },{
        type: "input",
        message: "What is the link to your repo?",
        name: "repoLink"
    },{
        type: "input",
        message: "Live link to your project?",
        name:"liveLink"
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName,data,(err)=>{
    if(err){
        return console.log(err);
    }
 console.log("Great Job Now Go View Your README.md file in the Assets folder.");
 });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput){
            writeToFile("./Assets/README.md", generateFile(userInput))
        });
};

// Function call to initialize app
init();

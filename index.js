// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const generateFile = require("./utils/generatemarkdown");
const fs = require ("fs");
console.log('Hello! Welcome to my README markdown generator.')
// TODO: Create an array of questions for user input
const questions = [{
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
        message: "Add a directions for Installation.",
        name: "install"
    },{
        type: "input",
        message: "Add a full discription of what this app is used for.",
        name: "Usage"
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
    }];

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
        .then(function (){
            writeToFile("README.md", generateMarkdown());
        });
}

// Function call to initialize app
init();

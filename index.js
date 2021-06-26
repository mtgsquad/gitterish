#!/usr/bin/env node
const { exec } = require('child_process');

const args = process.argv.slice(2);

console.log("Gitterish 💥")

if(args[0] === "init") {
    exec("git init", () => console.log("Initialized the git repository!"));
}

if(args[0] === "link" && args[1]) {
    if(args[1].startsWith() !== "https://") return console.log("That's not a URL for a github repository");

    exec(`git remote add origin ${args[1]}`, () => console.log(`Successfully added the remote origin: ${args[1]}`));
}

if(args[0] === "push") {
    exec("git push", () => console.log("Pushed to the remote origin!"));
}

if(args[0] === "pull") {
    exec("git pull", () => console.log("Pulled from the remote origin!"));
}

if(args[0] === "clone" && args[1]) {
    if(args[3]) {
        exec(`git clone ${args[1]} ${args[3]}`, () => console.log("Cloned the repository into the given directory!"));
    } else {
        exec(`git clone ${args[1]} .`, () => console.log(`Cloned the repository into the current working directory!`));
    }
}

if(args[0] === "add") {
    if(args[1]) {
        exec(`git add ${args[1]}`, () => console.log("Added the file!"));
    } else {
        exec(`git add .`, () => console.log("Added all the files in the current working directory!"));
    }
}

if(args[0] === "rm") {
    if(args[1]) {
        exec(`git rm ${args[1]}`, () => console.log("Removed the file!"));
    } else {
        exec(`git rm .`, () => console.log("Removed all the files in the current working directory!"));
    }
}

if(args[0] === "commit") {
    if(!args[1]) return console.log("Provide the commit message!");

    const commitMsg = args.slice(1).join(" ");

    exec(`git commit -m ${commitMsg}`, () => console.log(`Committed all files to the repository with the message: ${commitMsg}`));
}

if(args[0] === "branch") {
    if(!args[1]) return console.log("Provide a branch name!");

    exec(`git branch -M ${args[1]}`, () => console.log(`Switched to the ${args[1]} branch!`));
}
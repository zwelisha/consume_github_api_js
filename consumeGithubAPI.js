const fetch = require("node-fetch");
let url = "https://api.github.com/users/MozLNMIIT/repos";

async function github(repo) {
    let response = await fetch(url);
    let result = response.json();
    for (let i = 0; i < result.length; i++) {
        if (repo == result[i].name) {
            console.log(result[i].name);
        }
    }
}

console.log(github("Hacktoberfest-2019"));
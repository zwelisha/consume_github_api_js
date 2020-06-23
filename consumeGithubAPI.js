const fetch = require("node-fetch");
const BASEURL = "https://api.github.com";
const url = BASEURL + "/repos/wataryooou/pull_request/pulls?state=all";

function getPullRequests() {
    fetch(url)
        .then(data => data.json())
        .then(data => {
            console.log(data);
        });
}
const fetch = require("node-fetch");
const BASEURL = "https://api.github.com";

function getPullRequests(repoOwner, repoName, start, end) {
    const url = `${BASEURL}/repos/${repoOwner}/${repoName}/pulls?state=all`;
    console.log(url);
    const get_data = async url => {
        try {
            let pullRequests = [];
            const response = await fetch(url);
            const data = await response.json();
            let startDate = new Date(start);
            let endDate = new Date(end);
            // console.log(startDate);
            // console.log(endDate);
            for (let i = 0; i < data.length; i++) {
                let pullRequest = data[i];
                let createdAt = new Date(pullRequest.created_at);
                let updatedAt = new Date(pullRequest.updated_at);
                let mergedAt = new Date(pullRequest.merged_at);
                let closedAt = new Date(pullRequest.closed_at);
                let inDateRange = false;
                if (createdAt != null && updatedAt != null && mergedAt != null && closedAt != null) {
                    if (createdAt >= startDate && createdAt <= endDate) {
                        inDateRange = true;
                    }
                    if (closedAt >= startDate && closedAt <= endDate) {
                        inDateRange = true;
                    }
                    if (updatedAt >= startDate && updatedAt <= endDate) {
                        inDateRange = true;
                    }
                    if (mergedAt >= startDate && mergedAt <= endDate) {
                        inDateRange = true;
                    }
                }
                if (inDateRange == true) {
                    pullRequests.push(pullRequest);
                }
            }
            console.log(pullRequests);

        } catch (error) {
            console.log(error);
        }
    };
}

console.log(getPullRequests('wataryooou', 'pull_request', '2018-10-01T00:00:00.000Z', '2019-07-01T00:00:00.000Z'));
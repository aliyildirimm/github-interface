import { Octokit } from "octokit";

export const fetchRepositories = async (): Promise<any[]> => {
    const octokit = new Octokit({ });
    
    const repoOwner = "alperbingol";
    const repoName = "github-repo-list";

    const res = await octokit.request(`GET /users/${repoOwner}/repos`);

    return res.data;
}
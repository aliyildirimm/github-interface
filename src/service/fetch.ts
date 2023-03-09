import { OctokitResponse } from "@octokit/types";
import { Octokit } from "octokit";
import { GithubRepos } from "../types/GithubRepos";

export const fetchRepositories = async (): Promise<GithubRepos[]> => {
    const octokit = new Octokit({ });
    
    const repoOwner = "alperbingol";
    // const repoName = "github-repo-list";

    const res: OctokitResponse<any[], number> = await octokit.request(`GET /users/${repoOwner}/repos`);
    console.log(res.data);
    const repositories = res.data.map((repo: any) => {
        return {
            id: repo.id,
            node_id: repo.node_id,
            name: repo.name,
            description: repo.description,
            updated_at: repo.updated_at,
            language: repo.language
        };
    });

    return repositories;
}

// export const fetchAvatar = async (): Promise<string> => {
//     const octokit = new Octokit({ });

//     const repoOwner = "alperbingol";

//     const res: OctokitResponse<any[], number> = await octokit.request(`GET /users/${repoOwner}/a

//     return avatar;
// }
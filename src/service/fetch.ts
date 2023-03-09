import { OctokitResponse } from "@octokit/types";
import { Octokit } from "octokit";
import { GithubRepos } from "../types/GithubRepos";
import { User } from "../types/User";

export const fetchRepositories = async (repoOwner: string): Promise<GithubRepos[]> => {
    const octokit = new Octokit({ });
    
    const res: OctokitResponse<any[], number> = await octokit.request(`GET /users/${repoOwner}/repos`);
    const repositories = res.data.map((repo: any) => {
        return {
            id: repo.id,
            node_id: repo.node_id,
            name: repo.name,
            description: repo.description,
            updated_at: repo.updated_at,
            language: repo.language,
            visibility: repo.visibility,
        };
    });

    return repositories;
}

export const fetchRepoOwner = async (repoOwner: string): Promise<User> => {
    const octokit = new Octokit({ });

    const res: OctokitResponse<any, number> = await octokit.request(`GET /users/${repoOwner}`);
    const user = {
        name: res.data.name,
        username: res.data.login,
        bio: res.data.bio,
        avatar_url: res.data.avatar_url
    }
    return user;
}

export type UserSearchItem ={
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
}

export type UserSearch = {
    total_count: number,
    incomplete_results: boolean,
    items: UserSearchItem[],
}

export type User = {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
    name: string,
    bio: string,
    public_repos: number,
    followers: number,
    following: number,
}

export type UserRepo = {
    id: number,
    name: string,
    description: string,
    html_url: string,
    stargazers_count: number,
    language: string
}

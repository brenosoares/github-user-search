export interface UserSearchItem{
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
}

export interface UserSearch {
    total_count: number,
    incomplete_results: boolean,
    items: UserSearchItem[],
}

export interface User {
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

export interface UserRepo {
    id: number,
    name: string,
    description: string,
}

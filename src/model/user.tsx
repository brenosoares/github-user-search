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
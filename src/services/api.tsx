import axios from 'axios';
import { User, UserRepo, UserSearch } from '../model/user';

const api = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
    });

export const searchUsers = async (username: string, perPage: number, page: number) => {
    return  await api.get<UserSearch>(`search/users?q=${username}&per_page=${perPage}&page=${page}`);
    
}

export const getUser = async (username: string) => {
    return  await api.get<User>(`users/${username}`);
    
}

export const getUserRepos = async (username: string, perPage: number, page: number) => {
    return  await api.get<Array<UserRepo>>(`/users/${username}/repos?per_page=${perPage}&page=${page}&sort=updated`);
    
}
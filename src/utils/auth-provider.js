import { client } from './api-client'

const localStorageKey = '__auth_provider_token__'

async function getToken() {
    return window.localStorage.getItem(localStorageKey)
}

function handleUserResponse({ user }) {
    window.localStorage.setItem(localStorageKey, user.token)
    return user
}

function login({ username, password }) {
    return client('login', { username, password }).then(handleUserResponse)
}

function register({ username, password }) {
    return client('register', { username, password }).then(handleUserResponse)
}

async function logout() {
    window.localStorage.removeItem(localStorageKey)
}

export { getToken, login, register, logout, localStorageKey }

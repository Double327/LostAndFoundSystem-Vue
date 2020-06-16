import Cookies from "js-cookie";

const TokenKey = 'LAF-TOKEN';

export function getToken() {
    Cookies.get()
}

export function setToken(token) {
    Cookies.set(TokenKey, token);
}

export function removeToken() {
    Cookies.remove(TokenKey);
}
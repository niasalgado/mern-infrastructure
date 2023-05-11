import * as userAPI from './users-api';

export async function signUp(userData) {
    const token = await userAPI.signUp(userData);
    localStorage.setItem('token', token);
    return token;
};

export function getToken() {
    // attempt to get the token from localstorage
    const token = localStorage.getItem('token');
    if (!token) return null;
    // if a token is retrived
    // decode the payload from the tone so ew can check if it's still valid
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
        // Token has expired - remove it from localStorage
        localStorage.removeItem('token');
        return null;
    } // if it's still valid we return the retrieved token
  return token;
};

export function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
};
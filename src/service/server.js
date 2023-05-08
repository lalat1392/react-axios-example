
const baseUrl = 'https://jsonplaceholder.typicode.com';
const baseUrl2 = 'https://jsonplaceholder.typicode.com';
export const server = {
    getToken,
    getToken1
};

function getToken() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return fetch(baseUrl +'/users', requestOptions);
}

async function getToken1() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return await fetch(baseUrl2 +'/users', requestOptions);
}

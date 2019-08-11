class BaseApi {
    static get(url) {
        return fetch(url).then(response => response.json());
    }
}
export { BaseApi }
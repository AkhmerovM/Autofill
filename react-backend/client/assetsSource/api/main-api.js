import {BaseApi} from "./base-api";

class MainApi extends BaseApi {
    static getCityList() {
        return this.get('http://localhost:3005/cities');
    }
    static getCountryList() {
        return this.get('http://localhost:3005/countries');
    }
}
export {MainApi}

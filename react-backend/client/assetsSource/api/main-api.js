import {BaseApi} from "./base-api";

class MainApi extends BaseApi {
    static getDataSet(url) {
        return this.get(url);
    }
}
export {MainApi}
import {BaseApi} from "./base-api";

class MainApi extends BaseApi {
    static getDataSet() {
        return this.get('http://localhost:3002/dataset');
    }
}
export {MainApi}
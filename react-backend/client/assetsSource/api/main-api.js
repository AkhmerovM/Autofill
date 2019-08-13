import {BaseApi} from "./base-api";

class MainApi extends BaseApi {
    static getDataSet() {
        return this.get('http://localhost:3001/dataset');
    }
}
export {MainApi}
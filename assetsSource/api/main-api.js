import {BaseApi} from "./base-api";

class MainApi extends BaseApi {
    static getDataSet() {
        return this.get('/api/v1/dataset.json');
    }
}
export {MainApi}
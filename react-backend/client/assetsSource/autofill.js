import React, {Component} from 'react';
import {Provider} from "react-redux";
import initStore from "./store";
import {AutofillContainer} from "./modules/autofill/containers/AutofillContainer";

const store = initStore();

class Autofill extends Component {
    render () {
        const {dataSetUrl='', value, onChange, options=[]} = this.props;
        return (
            <Provider store={store} >
                <AutofillContainer dataSetUrl={dataSetUrl}  options={options} value={value} onChange={onChange} />
            </Provider >
        )
    }
}
export {Autofill}
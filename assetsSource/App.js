import React, {Component} from 'react';
import {Provider} from "react-redux";
import initStore from "./store";
import {AutofillContainer} from "./modules/autofill/containers/AutofillContainer";

const store = initStore();
class App extends Component {
    render () {
        return (
            <Provider store={store} >
                <AutofillContainer />
            </Provider >
        )
    }
}

export {App}
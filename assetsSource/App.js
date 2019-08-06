import React, {Component} from 'react';
import {MainContainer} from "./modules/main/containers/MainContainer";
import {Provider} from "react-redux";
import initStore from "./store";

const store = initStore();
class App extends Component {
    render () {
        return (
            <Provider store={store} >
                <MainContainer />
            </Provider >
        )
    }
}

export {App}
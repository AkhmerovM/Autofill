import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';
import {Main} from "./Main";

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);

if (module.hot) {
    module.hot.accept('Main', () => {
        ReactDOM.render(<Main />, root);
    });
}
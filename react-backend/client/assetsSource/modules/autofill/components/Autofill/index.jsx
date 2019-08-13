import React, {Component} from 'react';
import './style.less';
import {COUNT_ELEMENT_COLUMN, SELECT_ITEM_HEIGHT} from "../../constansts";

class Autofill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            options: props.options,
            selectedId: null,
        };
        this.autofill = React.createRef();
        this.select = React.createRef();
    }
    handleSelectItemClick = (e) => {
        this.setState({
            value: e.currentTarget.textContent,
        }, this.findCoincedents)
    };
    handleOnChangeInput = (e) => {
        const {onChange} = this.props;
        const value = e.target.value;
        this.setState({
            value,
            selectedId: null,
        }, this.findCoincedents);
        if(onChange) {
            onChange();
        }
    };
    findCoincedents = () => {
        const {options=[]} = this.props;
        const {value} = this.state;
        const newDataSet = options.filter((item) => {
            if (value === item || !value) {
                return null;
            }
            const inputValue = value.toLowerCase();
            const element = item.toLowerCase();
            return 0 === element.indexOf(inputValue);
        });
        this.setState({
            options: newDataSet,
        });
    };
    handleClearClick = () => {
        this.setState({
            value: '',
        }, this.findCoincedents);
    };
    renderItem = (item, i) => {
        const {value, selectedId} = this.state;
        return (
            <div key={i} className={`autofill__select-item ${selectedId === i ? 'autofill__select-item_active': '' }`} onClick={this.handleSelectItemClick}>
                <strong>{item.substr(0, value.length)}</strong>{item.substr(value.length, item.length - value.length)}
            </div>
        )
    };
    bindEvents = () => {
        document.addEventListener('click', (e) => {
            let isClickInside = this.autofill.current.contains(e.target);
            if (!isClickInside) {
                this.setState({
                    options: [],
                    selectedId: null,
                });
            }
        });
        document.addEventListener('keydown',(e) => {
            const {options, selectedId} = this.state;
            if (!options.length) {
                return null;
            }
            switch (e.code) {
                case('ArrowDown'):
                    this.setState((prevState) => {
                        if (prevState.selectedId === options.length - 1 || prevState.selectedId === null) {
                            return {selectedId: 0}
                        }
                       return {selectedId: prevState.selectedId + 1}
                    });
                    break;
                case('ArrowUp'):
                    this.setState((prevState) => {
                        if (0 >= prevState.selectedId && prevState.selectedId !== null) {
                            return {selectedId: options.length - 1}
                        }
                        return {selectedId: prevState.selectedId - 1}
                    });
                    break;
                case('Enter'):
                    if (0 > selectedId) {
                        return null;
                    }
                    this.setState((prevState) => {
                        return {
                            value: prevState.options[prevState.selectedId],
                            selectedId: null,
                        }
                    }, this.findCoincedents);
                    break;
            }
        });
    };
    componentDidMount() {
        this.bindEvents();
    }
    componentDidUpdate() {
        const {selectedId} = this.state;
        if (selectedId >= COUNT_ELEMENT_COLUMN) {
            this.select.current.scrollTop = (selectedId + 1 - COUNT_ELEMENT_COLUMN) * SELECT_ITEM_HEIGHT;
        } else {
            this.select.current.scrollTop = 0;
        }
    }
    componentWillUnmount = () => {
        document.removeEventListener('keydown');
        document.removeEventListener('click');
    };
    render() {
        const {value, options} = this.state;
        return (
            <div className='autofill' ref={this.autofill}>
                <div className="autofill__input-wrapper">
                    <input type="text" value={value} onChange={this.handleOnChangeInput} onDoubleClick={this.findCoincedents} className="autofill__input" />
                    {value ? <div className="autofill__close" onClick={this.handleClearClick}>
                    </div>: null}
                </div>
                <div className="autofill__select" ref={this.select}>
                    {options.map(this.renderItem)}
                </div>
            </div>
        )
    }
}
export {Autofill}

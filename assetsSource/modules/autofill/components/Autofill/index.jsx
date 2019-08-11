import React, {Component} from 'react';
import './style.less';
import {COUNT_ELEMENT_COLUMN, SELECT_ITEM_HEIGHT} from "../../constansts";

class Autofill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            newDataSet: [],
            selectedId: -1,
        };
        this.select = React.createRef();
    }
    handleSelectItemClick = (e) => {
        this.setState({
            value: e.currentTarget.textContent,
        }, this.findCoincedents)
    };
    handleOnChangeInput = (e) => {
        const value = e.target.value;
        this.setState({
            value,
            selectedId: -1,
        }, this.findCoincedents);
    };
    findCoincedents = () => {
        const {dataSet=[]} = this.props;
        const {value} = this.state;
        const newDataSet = dataSet.filter((item) => {
            if (value === item || !value) {
                return null;
            }
            const inputValue = value.toLowerCase();
            const element = item.toLowerCase();
            return 0 === element.indexOf(inputValue);
        });
        this.setState({
            newDataSet,
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
        document.addEventListener('keydown',(e) => {
            const {newDataSet, selectedId} = this.state;
            if (!newDataSet.length) {
                return null;
            }
            switch (e.code) {
                case('ArrowDown'):
                    this.setState((prevState) => {
                        if (prevState.selectedId === newDataSet.length - 1) {
                            return {selectedId: 0}
                        }
                       return {selectedId: prevState.selectedId + 1}
                    });
                    break;
                case('ArrowUp'):
                    this.setState((prevState) => {
                        if (0 >= prevState.selectedId) {
                            return {selectedId: newDataSet.length - 1}
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
                            value: prevState.newDataSet[prevState.selectedId],
                            selectedId: -1,
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
    };
    render() {
        const {value, newDataSet} = this.state;
        return (
            <div className='autofill'>
                <div className="autofill__input-wrapper">
                    <input type="text" value={value} onChange={this.handleOnChangeInput} className="autofill__input" />
                    {value ? <div className="autofill__close" onClick={this.handleClearClick}>
                    </div>: null}
                </div>
                <div className="autofill__select" ref={this.select}>
                    {newDataSet.map(this.renderItem)}
                </div>
            </div>
        )
    }
}
export {Autofill}

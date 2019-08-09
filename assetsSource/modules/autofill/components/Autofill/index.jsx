import React, {Component} from 'react';
import './style.less';

class Autofill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            newDataSet: [],
            selectedId: null,
        }
    }
    handleSelectItemClick = (e) => {
        this.setState({
            value: e.currentTarget.textContent,
        })
    };
    handleOnChangeInput = (e) => {
        const {dataSet=[]} = this.props;
        const value = e.target.value;
        const newDataSet = dataSet.filter((item) => {
            if (value === item) {
                return null;
            }
            const inputValue = value.toLowerCase();
            const element = item.toLowerCase();
            return 0 === element.indexOf(inputValue);
        });
        this.setState({
            value,
            newDataSet,
            selectedId: null,
        })
    };
    handleClearClick = () => {
        this.setState({
            value: '',
        })
    };
    renderItem = (item, i) => {
        const {value, selectedId} = this.state;
        return (
            <div key={i} className={`autofill__select-item autofill__select-item_${selectedId === i ? 'active': '' }`} onClick={this.handleSelectItemClick}>
                <strong>{item.substr(0, value.length)}</strong>{item.substr(value.length, item.length - value.length)}
            </div>
        )
    };
    bindEvents = () => {
        document.addEventListener('keydown',(e) => {
            const {newDataSet} = this.state;
            console.log(this.state);
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
                        if (prevState.selectedId) {
                            return {selectedId: newDataSet.length - 1}
                        }
                        return {selectedId: prevState.selectedId - 1}
                    });
                    break;
            }
        });
    };
    componentDidMount() {
        this.bindEvents();
    }
    render() {
        const {value, newDataSet} = this.state;
        return (
            <div className='autofill'>
                <div className="autofill__input-wrapper">
                    <input type="text" value={value} onChange={this.handleOnChangeInput} className="autofill__input" />
                    {value ? <div className="autofill__close" onClick={this.handleClearClick}>
                    </div>: null}
                </div>
                <div className="autofill__select">
                    {newDataSet.map(this.renderItem)}
                </div>
            </div>
        )
    }
}
export {Autofill}

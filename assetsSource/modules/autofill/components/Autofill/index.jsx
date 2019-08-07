import React, {Component} from 'react';
import './style.less';

class Autofill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }
    handleSelectItemClick = (e) => {
        this.setState({
            value: e.currentTarget.textContent,
        })
    };
    handleOnChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        })
    };
    handleClearClick = () => {
        this.setState({
            value: '',
        })
    };
    renderItem = (item, i) => {
        const {value} = this.state;
        return (
            <div key={i} className="autofill__select-item" onClick={this.handleSelectItemClick}>
                <strong>{item.substr(0, value.length)}</strong>{item.substr(value.length, item.length - value.length)}
            </div>
        )
    };
    findCoincenences = (item) => {
        const {value} = this.state;
        if (value === item) {
            return null;
        }
        const inputValue = value.toLowerCase();
        const element = item.toLowerCase();
        return 0 === element.indexOf(inputValue);
    };
    render() {
        const {value} = this.state;
        const {dataSet=[]} = this.props;
        let newDataSet = [];
        if (value) {
            newDataSet = dataSet.filter(this.findCoincenences);
        }
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
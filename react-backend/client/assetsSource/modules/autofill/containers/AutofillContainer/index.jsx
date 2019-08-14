import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Autofill} from "autofill";
import {selectAutoFillModuleData} from "modules/autofill/selectors";
import {getDataSet} from "modules/autofill/actions";

function mapStateToProps(state) {
    return {
        options: selectAutoFillModuleData(state),
    }
}
function mapDipatchToProps(dispatch) {
    return {
        getDataSet,
    }
}
class AutofillContainerWrapper extends Component {

    componentDidMount() {
        const {getDataSet} = this.props;
        getDataSet();
    }
    render() {
        const {options=[]} = this.props;
        const value ='';
        const className ='some-class1';
        const classNameItem ='some-class2';
        const isDisabled = false;
        const name = '';
        const placeholder = 'Enter something';
        return <Autofill name={name} classNameItem={classNameItem} isDisabled={isDisabled}
        className={className} placeholder={placeholder}  value={value} options={options}/>
    }
}
const AutofillContainer = connect(mapStateToProps, mapDipatchToProps())(AutofillContainerWrapper);
export {AutofillContainer}

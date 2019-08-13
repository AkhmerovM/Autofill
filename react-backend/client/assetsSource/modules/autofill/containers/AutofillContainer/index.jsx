import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDataSet} from "../../actions";
import {Autofill} from "autofill";
import {selectAutoFillModuleData} from "../../selectors";

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
        let value ='';
        return <Autofill value={value} options={options}/>
    }
}
const AutofillContainer = connect(mapStateToProps, mapDipatchToProps())(AutofillContainerWrapper);
export {AutofillContainer}
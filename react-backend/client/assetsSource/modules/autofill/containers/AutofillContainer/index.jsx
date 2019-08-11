import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDataSet} from "../../actions";
import {Autofill} from "../../components/Autofill";
import {selectAutoFillModuleData} from "../../selectors";

function mapStateToProps(state) {
    return {
        dataSet: selectAutoFillModuleData(state),
    }
}
function mapDipatchToProps(dispatch) {
    return {
        getDataSet,
    }
}
class AutofillContainerWrapper extends Component {

    componentDidMount() {
        this.props.getDataSet();
    }
    render() {
        const {dataSet} = this.props;
        return <Autofill dataSet={dataSet}/>
    }
}
const AutofillContainer = connect(mapStateToProps, mapDipatchToProps())(AutofillContainerWrapper);
export {AutofillContainer}
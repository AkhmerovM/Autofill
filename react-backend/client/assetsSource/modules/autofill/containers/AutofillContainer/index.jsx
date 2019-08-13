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
        const {dataSetUrl} = this.props;
        this.props.getDataSet(dataSetUrl);
    }
    render() {
        const {dataSet=[], options, value = null, onChange} = this.props;
        return <Autofill value={value} onChange={onChange} options={dataSet ? dataSet : options}/>
    }
}
const AutofillContainer = connect(mapStateToProps, mapDipatchToProps())(AutofillContainerWrapper);
export {AutofillContainer}
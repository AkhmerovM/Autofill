import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDataSet} from "../../actions";

function mapStateToProps(state) {
    return {
    }
}
function mapDipatchToProps(dispatch) {
    return {
        getDataSet,
    }
}
class MainContainerWrapper extends Component {
    componentDidMount() {
        this.props.getDataSet();
    }
    render() {
        return (
            <div className='main-container'>main-container</div>
        )
    }
}
const MainContainer = connect(mapStateToProps, mapDipatchToProps())(MainContainerWrapper)
export {MainContainer}
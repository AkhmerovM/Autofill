import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Autofill} from "autofill";
import {selectCityList, selectCountryList} from "modules/autofill/selectors";
import {getCityList, getCountryList} from "modules/autofill/actions";

function mapStateToProps(state) {
    return {
        cities: selectCityList(state),
        countries: selectCountryList(state),
    }
}
function mapDipatchToProps(dispatch) {
    return {
        getCityList,
        getCountryList,
    }
}
class AutofillContainerWrapper extends Component {

    componentDidMount() {
        const {getCityList, getCountryList} = this.props;
        getCityList();
        getCountryList();
    }
    renderCityList() {
        const {cities=[]} = this.props;
        const value ='';
        const className ='some-class1';
        const classNameItem ='some-class2';
        const isDisabled = false;
        const name = '';
        const placeholder = 'Enter city';
        return (
            <div className='form-group'>
                <Autofill name={name} classNameItem={classNameItem} isDisabled={isDisabled}
                    className={className} placeholder={placeholder}  value={value} options={cities}/>
            </div>
        )

    }
    renderCountryList() {
        const {countries=[]} = this.props;
        const placeholder = 'Enter Country';
        return (
            <div className='form-group'>
                <Autofill  placeholder={placeholder}  options={countries}/>
            </div>
        )
    }
    render() {
        return (
            <div className='main'>
                {this.renderCityList()}
                {this.renderCountryList()}
            </div>
        )
    }
}
const AutofillContainer = connect(mapStateToProps, mapDipatchToProps())(AutofillContainerWrapper);
export {AutofillContainer}

import React from 'react';
import {connect} from 'react-redux';
import LoadingSpinnerComp from './loadingSpinnerComp';

class AjaxLoadingSpinner extends React.Component {
    render() {
        return (
            this.props.showSpinner && <LoadingSpinnerComp />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showSpinner: state.ajaxLoadingSpinner.showSpinner
    };
}

export default connect(mapStateToProps, null)(AjaxLoadingSpinner);
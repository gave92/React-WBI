import React from 'react';
import { connect } from "react-redux";


// This is a function that returns a class?
var withTheme = function (ComposedComponent) {

    var component = class extends React.Component {
        static defaultProps = {
            theme: 'default'
        };

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state, ownProps) {
        return {
            theme: state.settingsReducer.theme,
        }
    }

    return connect(mapStateToProps)(component);
}

export default withTheme;

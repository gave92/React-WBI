import React from 'react';
import {
    View,
} from 'react-native';
import { responsive } from "react-native-responsive-ui";
import ArticleDetailComponent from './../components/ArticleDetailComponent'
import withTheme from "./../components/Base/ThemableComponent";
import { getResponsiveStyle } from './../styles/ArticleListComponent.style'


class ArticleScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        const ui = getResponsiveStyle(this.props.theme);
        return (
            <View style={ui.container}>
                <ArticleDetailComponent />
            </View>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.window.width !== this.props.window.width) {
            if (this.props.window && this.props.window.width >= 700) {
                this.props.navigation.goBack();
            }
        }
    }
}

export default withTheme(responsive(ArticleScreen));

import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { MediaQuery } from "react-native-responsive-ui";
import { responsive } from "react-native-responsive-ui";
import ArticleDetailComponent from './../components/ArticleDetailComponent'
import withTheme from "./../components/Base/ThemableComponent";
import { getResponsiveStyle } from './../styles/ArticleScreen.style'


class ArticleScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        const ui = getResponsiveStyle(this.props.theme);
        return (
            <View style={ui.container}>
                <MediaQuery platform='windows'>
                    <View style={ui.titlebar}>
                        <Text numberOfLines={1} style={ui.appname}>WindowsBlogItalia</Text>
                    </View>
                </MediaQuery>
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

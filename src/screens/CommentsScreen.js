import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { MediaQuery } from "react-native-responsive-ui";
import { responsive } from "react-native-responsive-ui";
import ArticleCommentsComponent from './../components/ArticleCommentsComponent'
import withTheme from "./../components/Base/ThemableComponent";
import { getResponsiveStyle } from './../styles/CommentsScreen.style'


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
                <ArticleCommentsComponent />
            </View>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }
}

export default withTheme(responsive(ArticleScreen));

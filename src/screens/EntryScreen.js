import React from 'react';
import {
    View,
} from 'react-native';
import { Display } from "./../components/Base/Display";
import ArticleListComponent from './../components/ArticleListComponent'
import ArticleDetailComponent from './../components/ArticleDetailComponent'
import withTheme from "./../components/Base/ThemableComponent";
import { getResponsiveStyle } from './../styles/EntryScreen.style'


class EntryScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        const ui = getResponsiveStyle(this.props.theme);
        return (
            <View style={ui.container}>
                <ArticleListComponent />
                <Display minWidth={700} enabledStyle={ui.detail}>
                    <ArticleDetailComponent />
                </Display>
            </View>
        );
    }
}

export default withTheme(EntryScreen);

import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { MediaQuery } from "react-native-responsive-ui";
import { Display } from "./../components/Base/Display";
import ArticleListComponent from './../components/ArticleListComponent'
import ArticleDetailComponent from './../components/ArticleDetailComponent'
import CommentsListComponent from './../components/CommentsListComponent'
import withTheme from "./../components/Base/ThemableComponent";
import { getResponsiveStyle } from './../styles/EntryScreen.style'
import { createDrawerNavigator } from 'react-navigation'
import ResponsiveComponent from "./../components/Base/ResponsiveComponent";


class EntryScreen extends ResponsiveComponent {
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
                <View style={ui.content}>
                    <Display minWidth={700} enabledStyle={ui.detail}>
                        <ArticleDetailComponent />
                    </Display>
                    <Display minWidth={0} enabledStyle={ui.list}>
                        <ArticleListComponent rootNavigation={this.props.rootNavigation} />
                    </Display>
                </View>
            </View>
        );
    }
}

const Screen = withTheme(EntryScreen);

const CommentsDrawer = createDrawerNavigator(
    {
        Home: {
            screen: ({ screenProps }) => <Screen rootNavigation={screenProps.rootNavigation} />,
        },
    },
    {
        initialRouteName: 'Home',
        drawerWidth: 400,
        contentComponent: props => <CommentsListComponent {...props} />,
        drawerBackgroundColor: 'white',
        drawerPosition: 'right',
    },
);

export default CommentsDrawer;


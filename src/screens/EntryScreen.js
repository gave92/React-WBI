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
import DrawerLayout from 'react-native-drawer-layout-polyfill';
import { DrawerSidebar } from 'react-navigation';
import ResponsiveComponent from "./../components/Base/ResponsiveComponent";


class EntryScreen extends ResponsiveComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    _renderNavigationView = () => {
        return <DrawerSidebar contentComponent={CommentsListComponent} />;
    };

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
                        <DrawerLayout drawerBackgroundColor='white'
                            drawerWidth={400}
                            useNativeAnimations={true}
                            drawerPosition={DrawerLayout.positions.Right}
                            renderNavigationView={this._renderNavigationView}>
                            <ArticleDetailComponent />
                        </DrawerLayout>
                    </Display>
                    <Display minWidth={0} enabledStyle={ui.list}>
                        <ArticleListComponent rootNavigation={this.props.rootNavigation} />
                    </Display>
                </View>
            </View>
        );
    }
}

export default withTheme(EntryScreen);

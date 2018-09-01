import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconFeather from 'react-native-vector-icons/Feather';
import { Display } from "./../components/Base/Display";
import Divider from './../components/Base/Elements/divider/Divider'
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
                <Display minWidth={700} platform={'windows'} enabledStyle={ui.leftbar}>
                    <TouchableOpacity>
                        <IconOcticons name="three-bars" size={24} color="white"
                            style={{ margin: 12 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconFeather name="home" size={24} color="white"
                            style={{ margin: 12 }} />
                    </TouchableOpacity>
                    <View style={{ flexGrow: 1 }} />
                    <TouchableOpacity>
                        <IconFeather name="settings" size={24} color="white"
                            style={{ margin: 12 }} />
                    </TouchableOpacity>
                </Display>
                <Divider direction='vertical' />
                <ArticleListComponent />
                <Divider direction='vertical' />
                <Display minWidth={700} enabledStyle={ui.detail}>
                    <ArticleDetailComponent />
                </Display>
            </View>
        );
    }
}

export default withTheme(EntryScreen);

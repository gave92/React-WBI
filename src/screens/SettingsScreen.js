import React from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import * as SettingsActions from './../actions/SettingsActions';
import { connect } from "react-redux";
import { withNavigation } from 'react-navigation';
import { MediaQuery } from "react-native-responsive-ui";
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import withTheme from "./../components/Base/ThemableComponent";
import { getResponsiveStyle } from './../styles/SettingsScreen.style'


class SettingsScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onBackButtonClicked = this.onBackButtonClicked.bind(this);
        this.onChangeTheme = this.onChangeTheme.bind(this);
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
                <View style={ui.topbar}>
                    {this.props.navigation.state.routeName !== 'Home' ?
                        <TouchableOpacity onPress={this.onBackButtonClicked}>
                            <IconMaterial name="arrow-back" size={24} color={ui.backbutton.color}
                                style={ui.backbutton} />
                        </TouchableOpacity> : null
                    }
                    <Text numberOfLines={1} style={ui.title}>Settings</Text>
                </View>
                <TouchableOpacity onPress={this.onChangeTheme}>
                    <Text style={ui.text}>{this.props.theme}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onChangeTheme() {
        this.props.onThemeChanged(this.props.theme === 'dark' ? 'default' : 'dark');
    }

    onBackButtonClicked() {
        this.props.navigation.goBack();
    }
}

function mapStateToProps(state, ownProps) {
    return {
        theme: state.settingsReducer.theme,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onThemeChanged(theme) {
            dispatch(SettingsActions.setTheme(theme))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(withTheme(SettingsScreen)));

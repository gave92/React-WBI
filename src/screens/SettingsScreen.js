import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Switch
} from 'react-native';
import * as SettingsActions from './../actions/SettingsActions';
import { connect } from "react-redux";
import { withNavigation } from 'react-navigation';
import { MediaQuery } from "react-native-responsive-ui";
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import withTheme from "./../components/Base/ThemableComponent";
import { getResponsiveStyle } from './../styles/SettingsScreen.style'
import Divider from '../components/Base/Elements/divider/Divider';
import Dialog from "./../components/Base/react-native-dialog";
import RadioForm from './../components/Base/react-native-simple-radio-button';


var radio_props = [
    { label: 'Light', value: 'default' },
    { label: 'Dark', value: 'dark' }
];

class SettingsScreen extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = { ...this.state, themeDialogOpen: false };
        this.onBackButtonClicked = this.onBackButtonClicked.bind(this);
        this.onChangeTheme = this.onChangeTheme.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onChangeNotifications = this.onChangeNotifications.bind(this);
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
                <View style={ui.content}>
                    <View style={ui.section}>
                        <Text style={ui.header}>Personalizzazione</Text>
                        <TouchableOpacity onPress={this.onOpen}
                            style={ui.setting}>
                            <Text style={ui.biggerText}>Tema</Text>
                            <Text style={ui.text}>{this.props.theme === 'default' ? 'Chiaro' : 'Scuro'}</Text>
                        </TouchableOpacity>
                        <Divider />
                    </View>
                    <View style={ui.section}>
                        <Text style={ui.header}>Notifiche</Text>
                        <View style={[ui.setting, ui.horizontal]}>
                            <View>
                                <Text style={ui.biggerText}>Notifiche push</Text>
                                <Text style={ui.text}>{this.props.notifications ? 'Attivo' : 'Disattivo'}</Text>
                            </View>
                            <Switch style={ui.switch} value={this.props.notifications} onValueChange={this.onChangeNotifications} />
                        </View>
                        <Divider />
                    </View>
                    <Dialog.Container visible={this.state.themeDialogOpen}
                        onBackdropPress={this.onDismiss}
                        onBackButtonPress={this.onDismiss}>
                        <Dialog.Title>Change theme</Dialog.Title>
                        <RadioForm
                            radio_props={radio_props}
                            initial={this.props.theme}
                            onPress={this.onChangeTheme}
                            buttonSize={18}
                            buttonColor="#238E9A"
                            selectedButtonColor="#238E9A"
                            animation={false} />
                        <Dialog.Button label="Cancel" onPress={this.onDismiss} />
                    </Dialog.Container>
                </View>
            </View>
        );
    }

    onDismiss() {
        this.setState({ themeDialogOpen: false })
    }

    onOpen() {
        this.setState({ themeDialogOpen: true })
    }

    onChangeTheme(value) {
        this.props.onThemeChanged(value);
        this.setState({ themeDialogOpen: false })
    }

    onChangeNotifications(active) {
        this.props.onNotificationsChanged(active);
    }

    onBackButtonClicked() {
        this.props.navigation.goBack();
    }
}

function mapStateToProps(state, ownProps) {
    return {
        theme: state.settingsReducer.theme,
        notifications: state.settingsReducer.notifications,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onThemeChanged(theme) {
            dispatch(SettingsActions.setTheme(theme))
        },
        onNotificationsChanged(active) {
            dispatch(SettingsActions.setNotifications(active))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(withTheme(SettingsScreen)));

import React from 'react';
// import ReactNative from 'react-native'
import { Provider } from "react-redux";
import store from "./utilities/storage/store";
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import EntryScreen from './screens/EntryScreen';
import ArticleScreen from './screens/ArticleScreen';
import SettingsScreen from './screens/SettingsScreen';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
// import styles from './styles/App.style'


const RootStack = createStackNavigator({
    Home: {
        screen: ({ screenProps }) => <EntryScreen rootNavigation={screenProps.rootNavigation} />,
        navigationOptions: ({ navigation }) => ({
            title: 'WindowsBlogItalia',
        }),
    },
    Article: {
        screen: ArticleScreen,
        navigationOptions: ({ navigation }) => ({
            title: '',
        }),
    },
}, {
        initialRouteName: 'Home',
        headerMode: 'none',
    });


const DrawerStack = createDrawerNavigator({
    Home: {
        screen: ({ navigation }) => <RootStack screenProps={{ rootNavigation: navigation }} />,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            drawerIcon: () => (<IconMaterialCommunity name="home-outline" size={24} color='black' />)
        }),
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Settings',
            drawerIcon: () => (<IconMaterialCommunity name="settings-outline" size={24} color='black' />)
        }),
    },
}, {
        contentOptions: {
            activeTintColor: '#238E9A',
            inactiveTintColor: 'black'
        },
        drawerBackgroundColor: 'white'
    });


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <DrawerStack />
            </Provider>
        );
    }
}

export default App;

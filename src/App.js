import React from 'react';
import {
    ActivityIndicator,
    View
} from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from "./reducers/configureStore";
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import EntryScreen from './screens/EntryScreen';
import ArticleScreen from './screens/ArticleScreen';
import CommentsScreen from './screens/CommentsScreen';
import SettingsScreen from './screens/SettingsScreen';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import styles from './styles/App.style'


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
    Comments: {
        screen: CommentsScreen,
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
        drawerBackgroundColor: 'white',
        initialRouteName: 'Home',
    });


const storeConfig = configureStore();

class App extends React.PureComponent {
    render() {
        return (
            <Provider store={storeConfig.store}>
                <PersistGate loading={
                                <View style={styles.container}>
                                    <ActivityIndicator style={styles.centered} animating size="large" />
                                </View>}
                             persistor={storeConfig.persistor}>
                    <DrawerStack />
                </PersistGate>
            </Provider>
        );
    }
}

export default App;

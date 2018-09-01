import React from 'react';
import ReactNative from 'react-native'
import { Provider } from "react-redux";
import store from "./utilities/storage/store";
import EntryScreen from './screens/EntryScreen';
import ArticleScreen from './screens/ArticleScreen';
import { createStackNavigator } from 'react-navigation';
import styles from './styles/App.style'


const RootStack = createStackNavigator({
    Home: {
        screen: EntryScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'WindowsBlogItalia',
            headerStyle: { backgroundColor: '#238E9A' },
            headerTintColor: 'white'
        }),
    },
    Article: {
        screen: ArticleScreen,
        navigationOptions: ({ navigation }) => ({
            title: '',
            headerStyle: { backgroundColor: '#238E9A' },
            headerTintColor: 'white'
        }),
    },
}, {
        initialRouteName: 'Home',
        headerMode: 'none',
        headerLayoutPreset: 'left'
    });


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}

export default App;

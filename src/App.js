import React from 'react';
import ReactNative from 'react-native'
import { Provider } from "react-redux";
import store from "./utilities/storage/store";
import EntryScreen from './screens/EntryScreen';
import ArticleScreen from './screens/ArticleScreen';
import { createStackNavigator } from 'react-navigation';
import { applogo } from './assets';
import styles from './styles/App.style'


const RootStack = createStackNavigator({
    Home: {
        screen: EntryScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'WindowsBlogItalia',
            headerStyle: { backgroundColor: '#238E9A' },
            headerTintColor: 'white',
            headerTitle: (props) => (<ReactNative.View style={styles.container}>
                <ReactNative.Image style={styles.image} source={applogo} />
                <ReactNative.Text numberOfLines={1} style={styles.title}>{props.children}</ReactNative.Text>
            </ReactNative.View>)
        }),
    },
    Article: {
        screen: ArticleScreen,
        navigationOptions: ({ navigation }) => ({
            title: '',
            headerStyle: { backgroundColor: '#238E9A' },
            headerTintColor: 'white',
            headerTitle: <ReactNative.View style={styles.container}>
                <ReactNative.Image style={styles.image} source={applogo} />
                <ReactNative.Text numberOfLines={1} style={styles.title}>{navigation.state.params.title}</ReactNative.Text>
            </ReactNative.View>
        }),
    },
}, {
        initialRouteName: 'Home',
        headerMode: ReactNative.Platform.OS !== 'windows' ? 'float' : 'none',
        headerLayoutPreset: 'left',
        cardStyle: { backgroundColor: 'white' }
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

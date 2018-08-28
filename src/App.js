import React from 'react';
import ReactNative from 'react-native'
import { Provider } from "react-redux";
import store from "./utilities/storage/store";
import EntryScreen from './screens/EntryScreen';
import { createStackNavigator } from 'react-navigation';
import { applogo } from './assets';


const RootStack = createStackNavigator({
    Home: {
        screen: EntryScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'WindowsBlogItalia',
            headerStyle: { backgroundColor: '#238E9A' },
            headerTitle: <ReactNative.View style={styles.container}>
                            <ReactNative.Image style={styles.image} source={applogo} />
                            <ReactNative.Text style={styles.title}>WindowsBlogItalia</ReactNative.Text>
                         </ReactNative.View>
        }),
    },
}, {
        initialRouteName: 'Home',
        headerMode: ReactNative.Platform.OS === 'web' ? 'float' : 'none',
        headerLayoutPreset: 'left',
        cardStyle: { backgroundColor: 'white' }
    });

const styles = ReactNative.StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginRight: 4,
        marginLeft: 16,
        width: 50,
        height: 50
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    },
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

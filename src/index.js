import React from 'react';
import {Provider} from "react-redux";
import ReactNative from 'react-native'
import store from "./utilities/storage/store";
import EntryScreen from './screens/EntryScreen';
import { createSwitchNavigator } from 'react-navigation';

const RootStack = createSwitchNavigator({
    Home: {
        screen: EntryScreen
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

ReactNative.render(<App/>, document.getElementById('root'));
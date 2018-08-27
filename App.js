import React from 'react';
import { Provider } from "react-redux";
import store from "./src/utilities/storage/store";
import EntryScreen from './src/screens/EntryScreen';
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

export default App;

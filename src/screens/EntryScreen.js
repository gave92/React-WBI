import React from 'react';
import {
    View,
} from 'react-native';
import { Display } from "./../components/Base/Display";
import ArticleListComponent from './../components/ArticleListComponent'
import ArticleDetailComponent from './../components/ArticleDetailComponent'
import styles from './../styles/EntryScreen.style'


class EntryScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {

        return (
            <View style={styles.container}>
                <ArticleListComponent />
                <Display minWidth={700} enabledStyle={styles.detail}>
                    <ArticleDetailComponent />
                </Display>
            </View>
        );
    }
}

export default EntryScreen;

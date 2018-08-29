import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { Display } from "./../components/Base/Display";
import ArticleListComponent from './../components/ArticleListComponent'
import ArticleDetailComponent from './../components/ArticleDetailComponent'


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

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        overflow: 'hidden'
    },
    detail: {
        display: 'flex',
        flexShrink: 0,
        flexGrow: 1,
        height: '100%',
    }
});

export default EntryScreen;

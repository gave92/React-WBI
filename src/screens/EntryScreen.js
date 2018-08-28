import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { MediaQuery } from "react-native-responsive-ui";
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
                <MediaQuery minWidth={700}>
                    <ArticleDetailComponent />
                </MediaQuery>
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
});

export default EntryScreen;

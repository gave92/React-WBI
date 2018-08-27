import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import ArticleListComponent from './../components/ArticleListComponent'
import ArticleDetailComponent from './../components/ArticleDetailComponent'
import AppHeaderComponent from '../components/AppHeaderComponent';


class EntryScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {

        return (
            <View style={styles.container}>
                <AppHeaderComponent />
                <View style={styles.masterdetail}>
                    <ArticleListComponent />
                    <ArticleDetailComponent />
                </View>
            </View>
        );
    }    
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        overflow: 'hidden'
    },
    masterdetail: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        height: 0
    }
});

export default EntryScreen;

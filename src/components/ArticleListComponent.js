import React from 'react';
import ArticleItemComponent from './../components/ArticleItemComponent'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';

// This is a dumb component that is common for native and web

class ArticleListComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {

        return (
            <View style={styles.container}>
                {this.props.error ? <Text style={styles.biggerText}>{JSON.stringify(this.props.error, null, 2)}</Text> : null}
                <FlatList data={this.props.articles}
                          keyExtractor={(item, index) => item.id.toString()}
                          renderItem={({item}) => <ArticleItemComponent article={item}/>}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexShrink: 0,
        flexGrow: 0,
        width: '30%',
        height: '100%',
        backgroundColor: '#f3f3f3'
    },
    biggerText: {
        fontSize: 14,
    },
});

export default ArticleListComponent;


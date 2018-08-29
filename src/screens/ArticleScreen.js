import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import ArticleDetailComponent from './../components/ArticleDetailComponent'
import { responsive } from "react-native-responsive-ui";


class ArticleScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {

        return (
            <View style={styles.container}>
                <ArticleDetailComponent />
            </View>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.window.width !== this.props.window.width) {
            if (this.props.window && this.props.window.width < 700) {
                this.props.navigation.goBack();
            }
        }
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

export default responsive(ArticleScreen);

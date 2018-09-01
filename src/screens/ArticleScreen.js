import React from 'react';
import {
    View,
} from 'react-native';
import { responsive } from "react-native-responsive-ui";
import ArticleDetailComponent from './../components/ArticleDetailComponent'
import styles from './../styles/ArticleScreen.style'


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
            if (this.props.window && this.props.window.width >= 700) {
                this.props.navigation.goBack();
            }
        }
    }
}

export default responsive(ArticleScreen);

import React from 'react';
import { connect } from "react-redux";
import {
    View,
} from 'react-native';
import WebViewComponent from './Base/WebView/WebViewComponent';
import Styler from './Base/Styler';
import styles from './../styles/ArticleDetailComponent.style'


class ArticleDetailComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {

        return (
            this.props.article ?
            <View style={styles.container}>
                {/*<Text>{this.props.article.title_plain}</Text>*/}
                <WebViewComponent source={{html: this.getHtml()}}/>                
            </View> : null
        );
    }

    getHtml() {
        let styler = new Styler();        
        return styler.ApplyStyle(this.props.article.content);
    }
}

function mapStateToProps(state) {
    return {        
        article: state.articleReducer.selected,
    }
}

export default connect(mapStateToProps)(ArticleDetailComponent);

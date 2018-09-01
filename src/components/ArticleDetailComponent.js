import React from 'react';
import { connect } from "react-redux";
import {
    View,
    Text
} from 'react-native';
import WebViewComponent from './Base/WebView/WebViewComponent';
import Styler from './Base/Styler';
import withTheme from "./Base/ThemableComponent";
import styles from './../styles/ArticleDetailComponent.style'
import Divider from './Base/Elements/divider/Divider';


class ArticleDetailComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {

        return (
            this.props.article ?
                <View style={styles.container}>
                    <View style={{ height: 48, backgroundColor: 'white' }}>
                        <Text numberOfLines={1} style={{ fontSize: 20, marginTop: 'auto', marginBottom: 'auto', marginLeft: 6 }}>{this.props.article.title_plain}</Text>
                    </View>
                    <Divider />
                    <WebViewComponent source={{ html: this.getHtml() }} />
                </View> : null
        );
    }

    getHtml() {
        let styler = new Styler();
        return styler.ApplyStyle(this.props.article.content, this.props.theme);
    }
}

function mapStateToProps(state) {
    return {
        article: state.articleReducer.selected,
    }
}

export default connect(mapStateToProps)(withTheme(ArticleDetailComponent));

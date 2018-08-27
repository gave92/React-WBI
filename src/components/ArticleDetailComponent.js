import React from 'react';
import { connect } from "react-redux";
import {
    StyleSheet,
    View,
} from 'react-native';

import WebViewComponent from './Base/WebViewComponent';
import Styler from './Base/Styler';

class ArticleDetailComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {

        return (
            <View style={styles.container}>
                {this.props.article ?
                <View style={{height: '100%'}}>
                    {/*<Text>{this.props.article.title_plain}</Text>*/}
                    <WebViewComponent source={{html: this.getHtml()}}/>
                </View> : null}
            </View>
        );
    }

    getHtml() {
        let styler = new Styler();        
        return styler.ApplyStyle(this.props.article.content);
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexShrink: 0,
        flexGrow: 1,
        height: '100%',
    }    
});

function mapStateToProps(state) {
    return {        
        article: state.articleReducer.selected,
    }
}

export default connect(mapStateToProps)(ArticleDetailComponent);

import React from 'react';
import { connect } from "react-redux";
import {
    View,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
import { withNavigation } from 'react-navigation';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import WebViewComponent from './Base/WebView/WebViewComponent';
import Styler from './Base/Styler';
import withTheme from "./Base/ThemableComponent";
import styles from './../styles/ArticleDetailComponent.style'


class ArticleDetailComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onBackButtonClicked = this.onBackButtonClicked.bind(this);
    }

    render() {

        return (
            this.props.article ?
                <View style={styles.container}>
                    {Platform.OS === 'windows' ?
                        <View style={{ height: 36 }} /> : null
                    }
                    <View style={{ height: 48, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        {this.props.navigation.state.routeName !== 'Home' ?
                            <TouchableOpacity onPress={this.onBackButtonClicked}>
                                <IconMaterial name="arrow-back" size={24} color="#238E9A"
                                    style={{ marginLeft: 12, marginTop: 12, marginBottom: 12, marginRight: 6 }} />
                            </TouchableOpacity> : null
                        }
                        <Text numberOfLines={1} style={{ fontSize: 18, marginTop: 'auto', marginBottom: 'auto', marginLeft: 6 }}>{this.props.article.title_plain}</Text>
                    </View>

                    <WebViewComponent source={{ html: this.getHtml() }} />
                </View> : null
        );
    }

    onBackButtonClicked() {
        this.props.navigation.goBack();
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

export default connect(mapStateToProps)(withNavigation(withTheme(ArticleDetailComponent)));

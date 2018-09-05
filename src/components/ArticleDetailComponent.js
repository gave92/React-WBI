import React from 'react';
import { connect } from "react-redux";
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import WebViewComponent from './Base/WebView/WebViewComponent';
import Styler from './Base/Styler';
import withTheme from "./Base/ThemableComponent";
import { getResponsiveStyle } from './../styles/ArticleDetailComponent.style'


class ArticleDetailComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onBackButtonClicked = this.onBackButtonClicked.bind(this);
    }

    render() {
        const ui = getResponsiveStyle(this.props.theme);
        return (
            this.props.article ?
                <View style={ui.container}>
                    <View style={ui.topbar}>
                        {this.props.navigation.state.routeName !== 'Home' ?
                            <TouchableOpacity onPress={this.onBackButtonClicked}>
                                <IconMaterial name="arrow-back" size={24} color={ui.backbutton.color}
                                    style={ui.backbutton} />
                            </TouchableOpacity> : null
                        }
                        <Text numberOfLines={1} style={ui.title}>{this.props.article.title_plain}</Text>
                        <TouchableOpacity onPress={this.onRefresh}>
                            <IconOcticons name="comment-discussion" size={24} color={ui.button.color}
                                style={ui.button} />
                        </TouchableOpacity>
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

// import * as CommentsActions from './../actions/CommentsActions';
import { connect } from "react-redux";
import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { ResponsiveComponent } from "react-native-responsive-ui";
import Card from './Base/Elements/card/Card'
import { TextView } from './Base/TextView'
import { withNavigation } from 'react-navigation';
import withTheme from "./Base/ThemableComponent";
import { getResponsiveStyle } from './../styles/CommentItemComponent.style'


class CommentItemComponent extends ResponsiveComponent {
    constructor(props, context) {
        super(props, context);
        this.state = { ...this.state };
        this.onCommentClicked = this.onCommentClicked.bind(this);
    }

    render() {
        const ui = getResponsiveStyle(this.props.theme);
        return (
            <TouchableOpacity onPress={this.onCommentClicked}>
                <Card containerStyle={[ui.card, { opacity: this.props.selected ? 0.4 : 1 }]}>
                    <View style={ui.container}>
                        <View style={ui.author}>
                            <Image source={{ uri: this.props.comment.author.avatar.permalink }}
                                style={ui.image} />
                            <Text style={ui.biggerText}>{this.props.comment.author.name}</Text>
                        </View>
                        <View style={ui.textcontainer}>
                            <TextView id={this.props.comment.id}
                                style={ui.text}
                                ellipsizeMode='tail' numberOfLines={3}>
                                {this.props.comment.raw_message}
                            </TextView>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    }

    onCommentClicked() {
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(withTheme(CommentItemComponent)));

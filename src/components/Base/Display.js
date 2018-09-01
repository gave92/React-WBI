import React from 'react';
import {
    View,
} from 'react-native';
import { ResponsiveComponent, MediaQuerySelector } from "react-native-responsive-ui";


export class Display extends ResponsiveComponent {

    render() {
        const { width, height } = this.state.window;
        const val = MediaQuerySelector.query(this.props, width, height);

        return (<View style={this.enableStyle.bind(this)(val)}>
                    {this.props.children}
                </View>)
    }

    enableStyle(val) {
        if (val) {
            return this.props.enabledStyle;
        }
        else {
            return {
                position: 'absolute',
                top: 0,
                left: 0,
                height: 0,
                width: 0,
                display: 'none'
            }
        }
    }
}

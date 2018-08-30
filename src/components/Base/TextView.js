import React from 'react';
import {
    View,
    Text,
    Platform
} from 'react-native';
import { ResponsiveComponent } from "react-native-responsive-ui";


export class TextView extends ResponsiveComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <Text {...this.props} style={{...this.props.style, overflow: 'hidden'}} id={this.props.id}>{this.props.children}</Text>;
    }

    componentDidMount() {
        if (Platform.OS === 'web') {
            let elem = document.getElementById(this.props.id);
            if (elem && this.props.numberOfLines) {
                let lh = window.getComputedStyle(elem).getPropertyValue("line-height");
                elem.style.maxHeight = `${parseInt(lh, 10)*this.props.numberOfLines}px`;
            }
        }
    }

    componentDidUpdate() {
        if (Platform.OS === 'web') {
            let elem = document.getElementById(this.props.id);
            if (elem && this.props.numberOfLines) {
                let lh = window.getComputedStyle(elem).getPropertyValue("line-height");
                elem.style.maxHeight = `${parseInt(lh, 10)*this.props.numberOfLines}px`;
            }
        }
    }
}

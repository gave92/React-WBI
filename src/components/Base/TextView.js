import React from 'react';
import {
    Text,
    Platform
} from 'react-native';


export class TextView extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = { ...this.state };
    }

    render() {
        return <Text {...this.props} style={{ ...this.props.style, overflow: 'hidden' }} id={this.props.id}>{this.props.children}</Text>;
    }

    componentDidMount() {
        if (Platform.OS === 'web') {
            let elem = document.getElementById(this.props.id);
            if (elem && this.props.numberOfLines) {
                let lh = window.getComputedStyle(elem).getPropertyValue("line-height");
                elem.style.maxHeight = `${parseInt(lh, 10) * this.props.numberOfLines}px`;
            }
        }
    }
}

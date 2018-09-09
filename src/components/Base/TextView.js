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
                let lh = parseInt(window.getComputedStyle(elem).getPropertyValue("line-height"), 10);
                if (isNaN(lh)) { // stupido chrome
                    elem.style.lineHeight = 1.2;
                    lh = parseInt(window.getComputedStyle(elem).getPropertyValue("font-size"), 10) * 1.22;
                }
                elem.style.maxHeight = `${lh * this.props.numberOfLines}px`;
            }
        }
    }
}

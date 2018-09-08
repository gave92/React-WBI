import React from 'react';
import { Dimensions } from "react-native";
import { Device } from "react-native-responsive-ui";

class ResponsiveComponent extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = { window: Dimensions.get("window") };
        this.subscribe = this.subscribe.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
    }

    componentWillMount() {
        if (this.props.navigation) {
            this.didFocus = this.props.navigation.addListener(
                'didFocus',
                this.subscribe
            );
            this.willBlur = this.props.navigation.addListener(
                'willBlur',
                this.unsubscribe
            );
        }
        else {
            this.subscribe();
        }
    }

    componentWillUnmount() {
        if (this.props.navigation) {
            this.didFocus.remove();
            this.willBlur.remove();
        } else {
            this.unsubscribe();
        }
    }

    subscribe() {
        this.subscription = Device.subscribeToDimensionChanges(dims => this.setState(dims));
    }

    unsubscribe() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}

export default ResponsiveComponent;

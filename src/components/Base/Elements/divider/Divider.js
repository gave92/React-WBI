import React from 'react';
import { View, StyleSheet } from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';


class Divider extends React.PureComponent {
  // eslint-disable-next-line
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return <View style={[this.props.direction === 'vertical' ? styles.vertcontainer : styles.horcontainer, this.props.style]} />
  }
}

const hairlineWidth = StyleSheet.hairlineWidth;

Divider.propTypes = {
  style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  horcontainer: {
    // Darker color if hairlineWidth is not thin enough
    backgroundColor: hairlineWidth < 1 ? '#BCBBC1' : 'rgba(0, 0, 0, 0.12)',
    height: hairlineWidth,
    width: '100%'
  },
  vertcontainer: {
    // Darker color if hairlineWidth is not thin enough
    backgroundColor: hairlineWidth < 1 ? '#BCBBC1' : 'rgba(0, 0, 0, 0.12)',
    width: hairlineWidth,
    height: '100%'
  },
});

export default Divider;

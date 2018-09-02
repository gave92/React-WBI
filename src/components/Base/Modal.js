import React, { Component } from 'react'
import { View, Platform } from 'react-native'
import { StyleSheet } from 'react-native'

var WebModal = require('modal-react-native-web');
var RnModal = require('react-native').Modal;

const Styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100
  }
})

class UwpModal extends Component {
  render() {
    if (!this.props.visible) return (<View />)

    return (
      <View style={Styles.modal}>
        {this.props.children}
      </View>
    )
  }
}

const MODAL_COMPONENTS = {
  ios: RnModal,
  android: RnModal,
  default: RnModal,
  web: WebModal,
  windows: UwpModal
};

export default class Modal extends Component {
  render() {
    const ModalComponent =
      MODAL_COMPONENTS[Platform.OS] || RnModal;
    return (
      <ModalComponent
        {...this.props}/>
    );
  }
}

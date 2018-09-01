import React from 'react'
import ReactNative from 'react-native'
import App from './App';


// Generate required css
import Octicons from 'react-native-vector-icons/Fonts/Octicons.ttf';
import Simple from 'react-native-vector-icons/Fonts/SimpleLineIcons.ttf';
import Material from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
const iconFontStyles = `@font-face {
  src: url(${Octicons});
  font-family: Octicons;
}
@font-face {
  src: url(${Simple});
  font-family: SimpleLineIcons;
}
@font-face {
  src: url(${Material});
  font-family: MaterialIcons;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);


ReactNative.render(<App />, document.getElementById('root'));

import {
    StyleSheet,
} from 'react-native';


export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        overflow: 'hidden'
    },
    detail: {
        display: 'flex',
        flexShrink: 0,
        flexGrow: 1,
        height: '100%',
    }
});

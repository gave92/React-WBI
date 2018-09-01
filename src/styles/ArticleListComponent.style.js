import {
    StyleSheet,
} from 'react-native';
import { ResponsiveStyleSheet } from "react-native-responsive-ui";


export function getResponsiveStyle() {
    return ResponsiveStyleSheet.select([
        {
            query: { minWidth: 0 },
            style: {
                container: {
                    display: 'flex',
                    flexShrink: 0,
                    flexGrow: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#E9E9EF'
                }
            },
        },
        {
            query: { minWidth: 700 },
            style: {
                container: {
                    display: 'flex',
                    flexShrink: 0,
                    flexGrow: 0,
                    width: '30%',
                    maxWidth: 700,
                    minWidth: 270,
                    height: '100%',
                    backgroundColor: '#E9E9EF'
                }
            },
        }
    ]);
}

export default StyleSheet.create({
    biggerText: {
        fontSize: 14,
    }
});

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
                    display: 'flex', flexDirection: 'column'
                },
                textcontainer: {
                    flexShrink: 1, display: 'flex', marginLeft: 0
                },
                image: {
                    width: '100%', height: 120
                }
            }
        },
        {
            query: { minWidth: 400 },
            style: {
                container: {
                    display: 'flex', flexDirection: 'row'
                },
                textcontainer: {
                    flexShrink: 1, display: 'flex', marginLeft: 6
                },
                image: {
                    width: 120, height: 120
                }
            }
        },
        {
            query: { minWidth: 700 },
            style: {
                container: {
                    display: 'flex', flexDirection: 'column'
                },
                textcontainer: {
                    flexShrink: 1, display: 'flex', marginLeft: 0
                },
                image: {
                    width: '100%', height: 120
                }
            }
        },
        {
            query: { minWidth: 1300 },
            style: {
                container: {
                    display: 'flex', flexDirection: 'row'
                },
                textcontainer: {
                    flexShrink: 1, display: 'flex', marginLeft: 6
                },
                image: {
                    width: 120, height: 120
                }
            }
        },
    ]);
}

export default StyleSheet.create({
    biggerText: {
        fontSize: 14,
        fontWeight: '700'
    }
});


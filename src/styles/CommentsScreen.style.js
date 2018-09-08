import ThemableStyleSheet from './../components/Base/ThemableStyleSheet';


export function getResponsiveStyle(theme) {
    return ThemableStyleSheet.select([
        {
            query: { minWidth: 0 },
            style: {
                container: {
                    display: 'flex',
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0,
                    height: '100%'
                },
                topbar : {
                    height: 48, display: 'flex', flexDirection: 'row', alignItems: 'center',
                    backgroundColor: '#238E9A'
                },
                backbutton: {
                    marginLeft: 12, marginTop: 12, marginBottom: 12, marginRight: 6,
                    // color: "#238E9A"
                    color: 'white'
                },
                button: {
                    marginLeft: 12, marginTop: 12, marginBottom: 12, marginRight: 12,
                    color: 'white'
                },
                title : {
                    fontSize: 18, marginTop: 'auto', marginBottom: 'auto', marginLeft: 6,
                    flexShrink: 1, flexGrow: 1, flexBasis: 0,
                    color: 'white'
                }
            }
        },
        {
            query: { platform: 'android' },
            style: {
                topbar: {
                    height: 56
                },
            }
        },
        {
            query: { theme: 'dark' },
            style: {
                container: {
                    backgroundColor: 'black',
                },
                topbar: {
                    backgroundColor: '#333333'
                },
                backbutton: {
                    color: 'white'
                },
                button: {
                    color: 'white'
                },
                title : {
                    color: 'white'
                }
            }
        }
    ], theme)
};

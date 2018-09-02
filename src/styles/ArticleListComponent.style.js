import ThemableStyleSheet from './../components/Base/ThemableStyleSheet';


export function getResponsiveStyle(theme) {
    return ThemableStyleSheet.select([
        {
            query: { minWidth: 0 },
            style: {
                container: {
                    display: 'flex',
                    flexShrink: 0,
                    flexGrow: 0,
                    width: '100%',
                    height: '100%',
                    // backgroundColor: '#E9E9EF'
                },
                topbar: {
                    height: 48, display: 'flex', flexDirection: 'row', alignItems: 'center'
                },
                button: {
                    marginLeft: 12, marginTop: 12, marginBottom: 12, marginRight: 12,
                    color: "black"
                },
                appname: {
                    fontSize: 12, fontWeight: '400', marginTop: 'auto', marginBottom: 'auto', marginLeft: 6,
                    color: 'black'
                },
                title: {
                    fontSize: 18, fontWeight: '600',
                    color: 'black'
                },
                centered: {
                    marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'
                },
                biggerText: {
                    fontSize: 14,
                    color: 'black'
                }
            },
        },
        {
            query: { minWidth: 700 },
            style: {
                container: {
                    width: '30%',
                    maxWidth: 700,
                    minWidth: 270,
                }
            },
        },
        {
            query: { theme: 'dark' },
            style: {
                container: {
                    backgroundColor: 'transparent'
                },
                button: {
                    color: 'white'
                },
                biggerText: {
                    color: 'white'
                },
                title: {
                    color: 'white'
                },
                appname: {
                    color: 'white'
                }
            }
        },
    ], theme);
}

import ThemableStyleSheet from './../components/Base/ThemableStyleSheet';


export function getResponsiveStyle(theme) {
    return ThemableStyleSheet.select([
        {
            query: { minWidth: 0 },
            style: {
                container: {
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    flexShrink: 0,
                    flexGrow: 0,
                    width: '100%',
                    height: '100%',
                },                
                topbar: {
                    height: 48, display: 'flex', flexDirection: 'row', alignItems: 'center',
                    backgroundColor: '#238E9A'
                },
                button: {
                    marginLeft: 12, marginTop: 12, marginBottom: 12, marginRight: 12,
                    color: "white"
                },                
                title: {
                    fontSize: 18, fontWeight: '600',
                    color: 'white'
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
                topbar: {
                    backgroundColor: '#333333'
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
            }
        },
    ], theme);
}

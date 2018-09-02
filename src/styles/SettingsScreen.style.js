import ThemableStyleSheet from './../components/Base/ThemableStyleSheet';


export function getResponsiveStyle(theme) {
    return ThemableStyleSheet.select([
        {
            query: { minWidth: 0 },
            style: {
                container: {
                    backgroundColor: 'white',
                    display: 'flex',
                    flexShrink: 0,
                    flexGrow: 0,
                    width: '100%',
                    height: '100%',
                },
                appname: {
                    fontSize: 12, fontWeight: '400', marginTop: 'auto', marginBottom: 'auto', marginLeft: 6,
                    color: 'black'
                },
                topbar : {
                    height: 48, display: 'flex', flexDirection: 'row', alignItems: 'center'
                },
                backbutton: {
                    marginLeft: 12, marginTop: 12, marginBottom: 12, marginRight: 6,
                    color: "#238E9A"
                },
                title : {
                    fontSize: 18, marginTop: 'auto', marginBottom: 'auto', marginLeft: 6,
                    color: 'black'
                }
            }
        },
        {
            query: { theme: 'dark' },
            style: {
                backbutton: {
                    color: "#238E9A"
                },
                title: {
                    color: 'white'
                },
                appname: {
                    color: 'white'
                },
                container: {
                    backgroundColor: 'black',
                }
            }
        },
    ], theme);
};

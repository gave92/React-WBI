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
                titlebar: {
                    height: 36, backgroundColor: '#238E9A'
                },
                appname: {
                    fontSize: 12, fontWeight: '400', marginTop: 'auto', marginBottom: 'auto', marginLeft: 6,
                    color: 'white'
                },
                topbar : {
                    height: 48, display: 'flex', flexDirection: 'row', alignItems: 'center',
                    backgroundColor: '#238E9A'
                },
                backbutton: {
                    marginLeft: 12, marginTop: 12, marginBottom: 12, marginRight: 6,
                    color: 'white'
                },
                title : {
                    fontSize: 18, marginTop: 'auto', marginBottom: 'auto', marginLeft: 6,
                    color: 'white'
                },
                text: {
                    color: 'black'
                },
            }
        },
        {
            query: { theme: 'dark' },
            style: {
                backbutton: {
                    color: 'white'
                },
                text: {
                    color: 'white'
                },
                title: {
                    color: 'white'
                },
                container: {
                    backgroundColor: 'black',
                },
                titlebar: {
                    backgroundColor: '#333333'
                },
                topbar: {
                    backgroundColor: '#333333'
                },
                appname: {
                    color: 'white'
                },
            }
        },
    ], theme);
};

import ThemableStyleSheet from './../components/Base/ThemableStyleSheet';


export function getResponsiveStyle(theme) {
    return ThemableStyleSheet.select([
        {
            query: { minWidth: 0 },
            style: {
                container: {
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden'
                },
                titlebar: {
                    height: 36, backgroundColor: '#238E9A'
                },
                appname: {
                    fontSize: 12, fontWeight: '400', marginTop: 'auto', marginBottom: 'auto', marginLeft: 6,
                    color: 'white'
                },
            }
        },
        {
            query: { theme: 'dark' },
            style: {
                container: {
                    backgroundColor: 'black',
                },
                titlebar: {
                    backgroundColor: '#333333'
                },
                appname: {
                    color: 'white'
                },
            }
        },
    ], theme);
};

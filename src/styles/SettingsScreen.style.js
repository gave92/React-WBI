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
                content: {
                    
                },
                switch: {
                    tintColor: 'black',
                    onTintColor: '#238E9A',
                },
                horizontal: {
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                },
                section: {

                },
                header: {
                    color: "#238E9A",
                    paddingTop: 12, paddingBottom: 12, paddingLeft: 12, paddingRight: 12
                },
                setting: {
                    paddingTop: 6, paddingBottom: 12, paddingLeft: 12, paddingRight: 12
                },
                titlebar: {
                    height: 36, backgroundColor: '#238E9A'
                },
                appname: {
                    fontSize: 12, fontWeight: '400', marginTop: 'auto', marginBottom: 'auto', marginLeft: 6,
                    color: 'white'
                },
                topbar: {
                    height: 48, display: 'flex', flexDirection: 'row', alignItems: 'center',
                    backgroundColor: '#238E9A'
                },
                backbutton: {
                    marginLeft: 12, marginTop: 12, marginBottom: 12, marginRight: 6,
                    color: 'white'
                },
                title: {
                    fontSize: 18, marginTop: 'auto', marginBottom: 'auto', marginLeft: 6,
                    color: 'white'
                },
                biggerText: {
                    fontSize: 14,
                    fontWeight: '700',
                    color: 'black'
                },
                text: {
                    color: 'black'
                },
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
                backbutton: {
                    color: 'white'
                },
                biggerText: {
                    color: 'white'
                },
                switch: {
                    tintColor: 'white',
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

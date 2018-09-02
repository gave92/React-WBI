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
            query: { platoform: 'windows' },
            style: {
                container: {
                    paddingTop: 36
                }
            }
        },
        {
            query: { theme: 'dark' },
            style: {
                backbutton: {
                    color: "#238E9A"
                },
                title : {
                    color: 'white'
                }
            }
        }
    ], theme)
};

import ThemableStyleSheet from './../components/Base/ThemableStyleSheet';


export function getResponsiveStyle(theme) {
    return ThemableStyleSheet.select([
        {
            query: { minWidth: 0 },
            style: {
                container: {
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden'
                },
                detail: {
                    display: 'flex',
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0,
                    height: '100%',
                },
                leftbar: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 48,
                    paddingTop: 48,
                    height: '100%',
                    // backgroundColor: '#238E9A'
                }
            }
        },
        {
            query: { theme: 'dark' },
            style: {
                container: {
                    backgroundColor: 'black',
                },
                leftbar: {
                    backgroundColor: 'black',
                }
            }
        },
    ], theme);
};

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
                biggerText: {
                    fontSize: 14,
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
                biggerText: {
                    color: 'white'
                },
            }
        },
    ], theme);
}

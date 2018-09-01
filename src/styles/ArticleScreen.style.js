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
                }
            }
        },
        {
            query: { theme: 'dark' },
            style: {
                container: {
                    backgroundColor: 'black',
                }
            }
        },
    ], theme);
};

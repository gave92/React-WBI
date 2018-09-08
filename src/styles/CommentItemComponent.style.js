import ThemableStyleSheet from './../components/Base/ThemableStyleSheet';


export function getResponsiveStyle(theme) {
    return ThemableStyleSheet.select([
        {
            query: { minWidth: 0 },
            style: {
                container: {
                    display: 'flex', flexDirection: 'column'
                },
                authorRow: {
                    display: 'flex', flexDirection: 'row', alignItems: 'center'
                },
                author: {
                    marginLeft: 6
                },
                textcontainer: {
                    flexShrink: 1, display: 'flex', marginLeft: 0, marginTop: 6
                },
                image: {
                    height: 50,
                    borderRadius: 25,
                    width: 50
                },
                card: {
                    margin: 6,
                    borderWidth: 1,
                    backgroundColor: 'white',
                },
                biggerText: {
                    fontSize: 14,
                    fontWeight: '700',
                    color: 'black'
                },
                text: {
                    color: 'black'
                }
            }
        },
        {
            query: { minWidth: 400 },
            style: {

            }
        },
        {
            query: { theme: 'dark' },
            style: {
                card: {
                    backgroundColor: 'transparent',
                    borderColor: '#333333'
                },
                biggerText: {
                    color: 'white'
                },
                text: {
                    color: 'white'
                }
            }
        },
    ], theme);
}

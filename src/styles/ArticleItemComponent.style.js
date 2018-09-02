import ThemableStyleSheet from './../components/Base/ThemableStyleSheet';


export function getResponsiveStyle(theme) {
    return ThemableStyleSheet.select([
        {
            query: { minWidth: 0 },
            style: {
                container: {
                    display: 'flex', flexDirection: 'column'
                },
                textcontainer: {
                    flexShrink: 1, display: 'flex', marginLeft: 0, marginTop: 6
                },
                image: {
                    width: '100%', height: 120
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
                container: {
                    display: 'flex', flexDirection: 'row'
                },
                textcontainer: {
                    flexShrink: 1, display: 'flex', marginLeft: 6, marginTop: 0
                },
                image: {
                    width: 120, height: 120
                }
            }
        },
        {
            query: { minWidth: 700 },
            style: {
                container: {
                    display: 'flex', flexDirection: 'column'
                },
                textcontainer: {
                    flexShrink: 1, display: 'flex', marginLeft: 0, marginTop: 6
                },
                image: {
                    width: '100%', height: 120
                }
            }
        },
        {
            query: { minWidth: 1300 },
            style: {
                container: {
                    display: 'flex', flexDirection: 'row'
                },
                textcontainer: {
                    flexShrink: 1, display: 'flex', marginLeft: 6, marginTop: 0
                },
                image: {
                    width: 120, height: 120
                }
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

export const themeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#30343f',
        },
        secondary: {
            main: '#ea638c',
        },
        background: {
            default: '#ffcdcd',
            paper: '#89023e',
        },
        text: {
            primary: '#000000',
            secondary: '#1b2021',
            disabled: '#7aff43',
            hint: '#dfff00',
        },
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                dense: {
                    height: 100,
                    minHeight: 50
                }
            }
        }
    },
};
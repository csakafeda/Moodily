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
            default: '#fab7b9',
            paper: '#89023e',
        },
        text: {
            primary: '#ffffff',
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
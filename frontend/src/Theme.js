export const themeOptions = {
    palette: {
        primary: {
            main: '#30343f',
        },
        secondary: {
            main: '#038c4c',
        },
        background: {
            default: '#FFFFFF',
            paper: '#E6F7E9',
        },
        text: {
            primary: '#038c4c',
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
import { createTheme } from "@mui/material";
import typography from "@mui/system/typography";

export const theme = createTheme({
    typography: {
        fontFamily: {
            primary: "Ubuntu, Poppins , sans-serif",
            secondary: "OpenSans, Poppins , sans-serif",
        },
    },
    palette: {
        // mode: "dark",
        text: {
            primary: '#000',
            secondary: '#FFF',
            disabled: '#888',
        },
        primary: {
            "main": "#000",
            "900": "#9785BA",
            "500": "#AF9FCD",
            "100": "#F9FAFA",
        },
        secondary: {
            "main": "#999",
            "900": "#D7C7F4",
            "100": "#FFFFFF",
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: (theme) => `
                * {
                    font-family: ${theme.typography.fontFamily.secondary};
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 21.79px;
                    margin:0;
                    padding: 0;
                }
                h1 {
                    font-family: ${theme.typography.fontFamily.primary};
                    font-size: 32px;
                    font-weight: 700;
                    line-height: 36.77px;
                    // padding: .5rem .75rem;
                }
                h2 {
                    font-family: ${theme.typography.fontFamily.primary};
                    font-size: 28px;
                    font-weight: 400;
                    line-height: 32.17px;
                    // padding: .25rem .5rem;
                }
                h3 {

                    font-family: ${theme.typography.fontFamily.primary};
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 27.58px;
                }
                div: {
                    margin: 0,
                    padding: 0,
                    border-width: var(--border-width);
                }
            `
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "5px",
                    textTransform: "none",
                },
                contained: {
                    color: "#fff",
                },
            },
        },
        MuiRating: {
            styleOverrides: {
                root: {
                    fontSize: 'unset',
                    "& .MuiRating-label": {
                        fontSize: "1.22rem"
                    }
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    "&.MuiContainer-maxWidthFalse": {
                        padding: "0",
                        margin: "0",
                    },
                    "&.MuiContainer-maxWidthsm": {
                        padding: "0",
                        margin: "0",
                    },
                    "&.MuiContainer-maxWidthMd": {
                        padding: "0",
                        margin: "0",
                    },
                    "&.MuiContainer-maxWidthLg": {
                        padding: "0",
                        margin: "0",
                    },
                    "&.MuiContainer-maxWidthXl": {
                        padding: "0",
                        margin: "0",
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    background: "#FAFBFE",
                    borderRadius: "8px",
                    color: "#ABB6C7",
                    "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                            borderColor: "#F0F0F0",
                        },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root:({theme}) => ({
                    borderRadius: "5px",
                    // border: "1px solid rgba(0, 0, 0, 0.45)",
                    background: `${theme.palette.primary[100]}`,
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root":
                        {
                            color: `${theme.palette.text.primary}`,
                            borderWidth: '1px',
                            // color: "#fff",
                            // border: "1px solid rgba(0, 0, 0, 0.45)",
                        },
                    "& .MuiInputLabel-root": {
                        color: `${theme.palette.text.disabled}`,
                    },
                    "& .MuiOutlinedInput-notchedOutline & span": {
                        color: `${theme.palette.text.disabled}`,
                    }
                }),
            },
        },
    },
    breakpoints: {
        values: {
            xxs: 0,
            xs: 425,
            sm: 600,
            md: 768,
            lg: 1024,
            xl: 1440,
            xxl: 2050,
        },
    },
});

theme.typography.h2 = {
    [theme.breakpoints.down("sm")]: {
        fontSize: "32px",
    },
};

theme.typography.h1 = {
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
    },
};

theme.typography.h3 = {
    [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
    },
};

export default theme;
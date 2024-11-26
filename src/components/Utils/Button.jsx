import { Button, Paper } from "@mui/material"
import styled from "@emotion/styled"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
}));

const MainButton = styled(Button)(({theme}) => ({
    backgroundColor: `${theme.palette.secondary[900]}`,
    boxShadow: 'none',
    fontFamily: `${theme.typography.fontFamily.primary}`,
    lineHeight: '18.38px',
    fontSize:'1rem',
    fontWeight:'400',
    color: `${theme.palette.text.primary}`,
    padding: '6px 24px',
    height: '100%',
}));

export default MainButton
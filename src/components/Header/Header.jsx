import { AppBar, Typography } from "@mui/material"

const Header = ()=>{
    return(
        <>
        <AppBar position="static" sx={{py:6}}>
            <Typography variant="h2" sx={{fontFamily: 'monospace'}}>Feedback!</Typography>
            <Typography variant="h5" sx={{fontFamily: 'monospace'}}>Don't forget it!</Typography>
        </AppBar>
        </>
    )
}

export default Header
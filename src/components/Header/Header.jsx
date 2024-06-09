import { AppBar, Typography } from "@mui/material"

const Header = ()=>{
    return(
        <>
        <AppBar position="static" sx={{py:6}}>
            <Typography variant="h2">Feedback!</Typography>
            <Typography variant="h5">Don't forget it!</Typography>
        </AppBar>
        </>
    )
}

export default Header
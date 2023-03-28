import { useNavigate } from "react-router-dom"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlined from '@mui/icons-material/MenuOutlined'
import LogoutOutlined from '@mui/icons-material/LogoutOutlined'
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/auth"
import { useEffect } from "react"

export const NavBar = ({ drawerWidth = 240 }) => {
    const dispatch = useDispatch();
    const {status} = useSelector(state=> state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        status === 'not-authenticated'?navigate('/auth/login'):null
      }, [status])
    
    const onClickLogOut = ()=>{
        dispatch(logout())
    }


    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px)` }
            }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid
                    container
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography variant="h6" noWrap component='div'> JournalApp </Typography>
                    <IconButton color="error" onClick={onClickLogOut}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

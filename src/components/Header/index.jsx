import { AccountCircle, Close } from '@mui/icons-material'
import CodeIcon from '@mui/icons-material/Code'
import { IconButton, Menu, MenuItem } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Login from 'features/Auth/components/Login'
import Register from 'features/Auth/components/Register'
import { logout } from 'features/Auth/userSlice'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.scss'

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
}

export default function Header() {
  const dispatch = useDispatch()
  const loggedInUser = useSelector(state => state.user.current)
  const isLoggerIn = !!loggedInUser.id
  const [open, setOpen] = React.useState(false)
  const [mode, setMode] = React.useState(MODE.LOGIN)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickUser = e => {
    console.log(e.currentTarget)
    setAnchorEl(e.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }
  const theme = createTheme()

  const handleLogoutClick = () => {
    const action = logout()
    console.log(action)
    dispatch(action)
  }
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <CodeIcon></CodeIcon>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ez shopee
            </Typography>

            <Link className="link" to="/todos">
              <Button color="inherit">Todos</Button>
            </Link>

            <Link className="link" to="/albums">
              <Button color="inherit">Albums</Button>
            </Link>
            {!isLoggerIn && (
              <Button
                onClick={handleClickOpen}
                className="link"
                color="inherit"
              >
                Login
              </Button>
            )}
            {isLoggerIn && (
              <IconButton onClick={handleClickUser}>
                <AccountCircle></AccountCircle>
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <Box xs={{ width: 20 }}>
            <IconButton
              xs={{
                position: 'absolute',
                top: theme.spacing(1),
                right: theme.spacing(1),
                color: theme.palette.grey[500],
              }}
              onClick={handleClose}
            >
              <Close></Close>
            </IconButton>
          </Box>

          <DialogContent>
            {mode === MODE.LOGIN && (
              <>
                <Login closeDialog={handleClose}></Login>
                <Box xs={{ textAlign: 'center' }}>
                  <Button
                    xs={{ color: 'primay' }}
                    onClick={() => setMode(MODE.REGISTER)}
                  >
                    Don't have an account. Register here
                  </Button>
                </Box>
              </>
            )}
            {mode === MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose}></Register>
                <Box>
                  <Button
                    xs={{ color: 'primay' }}
                    onClick={() => setMode(MODE.LOGIN)}
                  >
                    Already have an aria-colcount. Login here
                  </Button>
                </Box>
              </>
            )}
          </DialogContent>
        </Dialog>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </Menu>
      </Box>
    </ThemeProvider>
  )
}

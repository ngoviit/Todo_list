import CodeIcon from '@mui/icons-material/Code'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Register from 'features/Auth/components/Register'
import * as React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export default function Header() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
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
          <Button onClick={handleClickOpen} className="link" color="inherit">
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent>
          <Register closeDialog={handleClose}></Register>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

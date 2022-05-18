import { yupResolver } from '@hookform/resolvers/yup'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { LinearProgress } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import InputField from 'components/form-controls/InputField'
import PassWordField from 'components/form-controls/PassWordField'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

export default function RegisterForm(props) {
  const schema = yup
    .object({
      fullname: yup
        .string()
        .required('Làm ơn hãy nhập')
        .test(
          'should has at least two words',
          'Please enter at least two words',
          value => {
            return value.split(' ').length >= 2
          }
        ),

      email: yup
        .string()
        .required('Please enter your email')
        .email('Please enter a valid email'),
      password: yup
        .string()
        .required('Please enter your password')
        .min(6, 'Please enter at least 6 letter'),
      retypePassword: yup
        .string()
        .required('Please retype your password')
        .oneOf([yup.ref('password')], 'Password does not match'),
    })
    .required()

  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  })
  const handleSubmit = async values => {
    const { onSubmit } = props
    if (onSubmit) {
      await onSubmit(values)
    }
  }

  const { isSubmitting } = form.formState
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {isSubmitting && <LinearProgress />}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={form.handleSubmit(handleSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputField
                  autoComplete="given-name"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  autoFocus
                  form={form}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  form={form}
                />
              </Grid>
              <Grid item xs={12}>
                <PassWordField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  form={form}
                />
              </Grid>
              <Grid item xs={12}>
                <PassWordField
                  required
                  fullWidth
                  name="retypePassword"
                  label="Retype Password"
                  type="password"
                  id="retypePassword"
                  autoComplete="new-password"
                  form={form}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isSubmitting}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}

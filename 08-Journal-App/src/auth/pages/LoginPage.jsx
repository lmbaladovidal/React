import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Google from '@mui/icons-material/Google'
import Grid from '@mui/material/Grid'
import { useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth/thunks';

export const LoginPage = () => {

  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  useEffect(() => {
    status === 'authenticated' ? navigate('/') : null
  }, [status])


  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication())
  }

  const onGoogleSingIn = () => {
    console.log('GoogleSingIn', { email, password });
    dispatch(startGoogleSingIn())
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='Correo@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='Contraseña'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ mb: 2, mt: 1 }}
          >
            <Grid item xs={12} md={6}>
              <Button type='submit' variant='contained' disabled={isAuthenticating} fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant='contained' onClick={onGoogleSingIn} disabled={isAuthenticating} fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>
                  Google
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction='row' justifyContent='end'>
          <Link component={RouterLink} color='inherit' to="/auth/register">
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>


  )
}

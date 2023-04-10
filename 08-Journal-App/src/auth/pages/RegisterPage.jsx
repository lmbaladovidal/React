import { Link as RouterLink, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import React, { useEffect, useMemo, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatinUserWithEmailPassword } from '../../store/auth/thunks';
import { Alert } from '@mui/material';

export const RegisterPage = () => {

  const formData = {
    email:'',
    password:'',
    displayName:''
  }

  const formValidations ={
    email:[(value)=>{return value.includes('@')},'Formato de email invalido'],
    password:[(value)=>{return value.length>=6},'El password debe de tener mas de 6 caracteres'],
    displayName:[(value)=>{return value.length>=1},'El nombre es obligatorio'] 
  }

  const { status, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const [formSubmitted, setFormSubmitted] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    status === 'authenticated' ? navigate('/') : null
  }, [status])


  const {displayName, 
    email,
    password,
    onInputChange,
    formState, 
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  }= useForm(formData,formValidations);
   
  const onSubmitForm = (event)=>{
    event.preventDefault();
    setFormSubmitted(true)
    if(!isFormValid) return ;
    dispatch(startCreatinUserWithEmailPassword(formState))
  }


  return (
    <AuthLayout title='Crear Cuenta'>

      <h1>Form Valid: {isFormValid?'Valido':'Incorrecto'}</h1>
      <form onSubmit={onSubmitForm} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre Completo'
              type='text'
              placeholder='John Doe'
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='Correo@google.com'
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='Contraseña'
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              fullWidth />
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ mb: 2, mt: 1 }}
          >
            <Grid item xs={12} display={!!errorMessage?'':'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} >
              <Button type='submit' variant='contained' disabled={isAuthenticating} fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction='row' justifyContent='end'>
          <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
          <Link component={RouterLink} color='inherit' to="/auth/login">
            Ingresar
          </Link>
        </Grid>
      </form>
    </AuthLayout>


  )
}

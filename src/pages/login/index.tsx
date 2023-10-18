import { 
  Container,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  TextField
} from '@mui/material'
import { useState } from 'react'

type LoginType = {
  email: string;
  password: string;
}
export const LoginPage: React.FC = () => {
  // A traves de un type y in generico es como podemos tipar
  // un useState
  const [loginData, setLoginData] = useState<LoginType>({
    email: '',
    password: ''
  });

  const handleDataLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  }

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(loginData)
  }

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight: '100vh' }}
      >
        <Grid item>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
            <Typography
              variant='h4'
              sx={{ mt: 1, mb: 1 }}
            >
              Iniciar Sesion
            </Typography>
            <Box component='form' onSubmit={handleSubmit}>
              <TextField
                margin='normal'
                type='text'
                name='email'
                fullWidth
                label='email'
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={handleDataLogin}
              />
              <TextField
                margin='normal'
                type='password'
                name='password'
                fullWidth
                label='Password'
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                onChange={handleDataLogin}
              />
              <Button
                fullWidth
                type='submit'
                variant='contained'
                sx={{ mt: 1.5, mb: 3 }}
              >
                Iniciar Sesion
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Button variant='contained'>Login</Button>
    </Container>
  )
}
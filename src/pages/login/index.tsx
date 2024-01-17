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
import { useNotification } from '../../context/notification.context';
import { LoginValidate } from '../../utils/validateForm';

type LoginType = {
  email: string;
  password: string;
}
export const LoginPage: React.FC = () => {
  const { getError, getSuccess } = useNotification();
  /**
   * A traves de un type de TypeScript es otra forma en la que
   * podemos tipar un useState pasando este dato en el generico del
   * hook.
   */
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
    /**
     * Esta es la forma en la que ejecutamos las validaciones de YUP
     * en nuestros componentes, recibe el dato que definimos, en la
     * funcion .then va todo el codigo que se ejecuta cuando se
     * aprueban las validaciones y en el .catch va todo el codigo
     * cuando no se aprueban las validaciones.
     */
    LoginValidate.validate(loginData)
      .then(() => {
        /**
         * La razon de usar JSON.stringify es porque la funcion getSucces
         * espera un string y loginData es un objeto, por lo que usamos
         * esta funcion para pasar el objeto loginData a un string
         */
        getSuccess(JSON.stringify(loginData));
      })
      .catch((error) => {
        getError(error.message);
      })
    
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
                onChange={handleDataLogin}
              />
              <TextField
                margin='normal'
                type='password'
                name='password'
                fullWidth
                label='Password'
                sx={{ mt: 1.5, mb: 1.5 }}
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
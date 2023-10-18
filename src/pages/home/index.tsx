import { Container, Button } from '@mui/material'
import { useNotification } from '../../context/notification'

export const HomePage: React.FC = () => {
  const { getError } = useNotification();

  const handleClick = () => {
    getError('Hola Mundo')
  }

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Button variant='contained' onClick={handleClick}>Home</Button>
    </Container>
  )
}
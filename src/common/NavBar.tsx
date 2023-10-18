import { 
  Box,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Button,
  Typography,
  Stack
} from '@mui/material'

export const NavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <Container maxWidth='xl'>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
              <Grid item>
                <Typography>Josue</Typography>
              </Grid>
              <Grid item>
                <Stack spacing={2} direction='row'>
                  <Button variant='contained'>Login</Button>
                  <Button variant='outlined'>Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
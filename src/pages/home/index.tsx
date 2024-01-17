import { useEffect, FC, useState, ChangeEvent } from 'react';
import { Container, Button, Grid, Box, CircularProgress, Pagination } from '@mui/material'
import { CardComponent, HeaderComponent } from '../../components'
import { characters } from '../../api/characters';
import { Character } from '../../common/interfaces/character.interface';

export const HomePage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [allCharacters, setAllCharacters] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    /**
     * Esta es la forma en la que podemos hacer uso de las funciones
     * definidas en el apartado 'api'
     * 
     * En este caso estamos usanod la funcion findAll de characters,
     * esta se maneja como una promesa, ya que al ser una conexion
     * con la API es una accion asincronica
     */
    characters.findAll({ page })
      .then((response) => {
        setCount(response.data.info.pages);
        setAllCharacters(response.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((error) => {
        console.error(error);
      })
  }, [page]);

  const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title='Hola Mundo'
        description='Bienvenido a mi chamba'
        element={<Button variant='contained'>Soy un boton</Button>}
      />
      {
        loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <div>
              {
                (allCharacters?.length !== 0) ? (
                  <Grid
                  sx={{ my: 2 }}
                    container
                    spacing={2}
                    direction='row'
                  >
                    {
                      allCharacters?.map((character) => (
                        <Grid item xs={ 3 }>
                          <CardComponent
                            key={ character.id }
                            id={ character.id }
                            name={ character.name }
                            image={ character.image }
                            species={ character.species }
                            status={ character.status }
                          />
                        </Grid>
                      ))
                    }
                  </Grid>
                ) : (
                  <div>No existe data</div>
                )
              }
            </div>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Pagination
                count={count}
                page={page}
                onChange={handleChange}
                sx={{ mb: 3 }}
                size='large'
              />
            </Box>
          </>
        )
      }
    </Container>
  )
}
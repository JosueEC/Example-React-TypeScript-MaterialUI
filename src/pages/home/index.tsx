import { useEffect, FC, useState } from 'react';
import { Container, Button, Grid } from '@mui/material'
import { CardComponent, HeaderComponent } from '../../components'
import { characters } from '../../api/characters';
import { Character } from './interfaces/character.interface';

export const HomePage: FC = () => {
  const [allCharacters, setAllCharacters] = useState<Character[] | null>(null);

  useEffect(() => {
    /**
     * Esta es la forma en la que podemos hacer uso de las funciones
     * definidas en el apartado 'api'
     * 
     * En este caso estamos usanod la funcion findAll de characters,
     * esta se maneja como una promesa, ya que al ser una conexion
     * con la API es una accion asincronica
     */
    characters.findAll({})
      .then((response) => {
        setAllCharacters(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title='Hola Mundo'
        description='Bienvenido a mi chamba'
        element={<Button variant='contained'>Soy un boton</Button>}
      />
      <div>
        {
          (allCharacters?.length !== 0) ? (
            <Grid
              container
              spacing={2}
              direction='row'
            >
              {
                allCharacters?.map((character) => (
                  <Grid item xs={ 3 }>
                    <CardComponent
                      key={ character.id }
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
    </Container>
  )
}
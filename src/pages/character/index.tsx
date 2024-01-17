import { Box, Container, Grid, CircularProgress, Typography, Divider, Chip } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { characters } from "../../api/characters";
import { Character } from "../../common/interfaces/character.interface";

export const CharacterPage: FC = () => {
    const { characterId } = useParams();

    /**
     * El estado de [loading, setLoading] es para poder usar el
     * componente <CircularProgress /> y poder mostrar una animacion
     * de carga de los componentes, es algo mas de UX
     * 
     * Siempre sie inicializa en true, que significa que esta cargando
     * y una vez obtenemos los datos en nuestra funcion ahora lo
     * pasamos a false
     */
    const [loading, setLoading] = useState<boolean>(true);
    const [character, setCharacter] = useState<Character | null>(null);
    
    useEffect(() => {
        characters.findById({ id: characterId })
            .then((response) => {
                setCharacter(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <Container maxWidth='xl'>
                {
                    loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <Grid container columnSpacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={6}>
                                <Typography variant='h1'>
                                    { character!.name }
                                </Typography>
                                <Divider />
                                <Typography variant='h6'>
                                    { character!.origin.name }
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    <Chip label={ character!.status } color='primary' variant='outlined' />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <img
                                    src={character!.image}
                                    style={{ width: '100%', borderRadius: '0.5em' }}
                                />
                            </Grid>
                        </Grid>
                    )
                }
            </Container>
        </Box>
    );
}
import { Box, Divider, Grid, Typography } from "@mui/material";

type HeaderProps = {
    title: string,
    description: string,
    /**
     * * React.ReactNode
     * Es la forma de tipar un componente de React, es decir,
     * en esta propiedad podemos recibir cualquier componente de
     * React y este es opcional
     */
    element?: React.ReactNode | null;
};

export const HeaderComponent: React.FC<HeaderProps> = ({ title, description, element }) => {
    return (
        <div>
            <Box
            sx={{ width: '100%', height: '350px'}}
            >
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    sx={{ height: '100%'}}
                >
                    <Grid item xs={ 5 }>
                        <Grid
                            container
                            direction='column'
                            justifyContent='center'
                            alignItems='center'
                            sx={{ height: '100%'}}
                        >
                            <Grid item>
                                <Typography variant='h2'>
                                    { title }
                                </Typography>
                            </Grid>
                            <Grid item sx={{ mt: 2 }}>
                                <Typography>
                                    { description }
                                </Typography>
                            </Grid>
                            { element !== undefined && (
                                <Grid item sx={{ mt: 4 }}>
                                    { element }
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider/>
        </div>
    );
}
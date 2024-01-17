import { FC } from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Typography
} from "@mui/material";

type CardProps = {
    name: string,
    image: string,
    species: string,
    status: string,
};

export const CardComponent: FC<CardProps> = ({ name, image, species, status }) => {
    return (
        <Card>
            <CardMedia
                component='img'
                height='194'
                image={ image }
                alt={ name }
            />
            <CardContent>
                <Typography variant='h4' sx={{ mb: 1.5 }}>{ name }</Typography>
                <Divider />
                <Typography sx={{ mt: 1.5 }}>Especie: { species }</Typography>
                <Typography sx={{ mt: 1.5 }}>Estatus: { status }</Typography>
            </CardContent>
            <CardActions>
                <Button size='small' variant='contained'>Ver Detalles</Button>
            </CardActions>
        </Card>
    )
}
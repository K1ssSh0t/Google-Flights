import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import type { Itinerary } from '../types';

const FlightCard = ({ leg }: { leg: Itinerary }) => {
    return (
        <Card sx={{ minWidth: 275, marginBottom: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {leg.legs[0].origin.name} to {leg.legs[0].destination.name}
                </Typography>
                <Typography color="text.secondary">
                    Departure: {new Date(leg.legs[0].departure).toLocaleString()}
                </Typography>
                <Typography color="text.secondary">
                    Arrival: {new Date(leg.legs[0].arrival).toLocaleString()}
                </Typography>
                <Typography variant="body2">
                    Duration: {Math.floor(leg.legs[0].durationInMinutes / 60)}h {leg.legs[0].durationInMinutes % 60}m
                </Typography>
                <Typography variant="body2">
                    Stops: {leg.legs[0].stopCount}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View Details</Button>
            </CardActions>
        </Card>
    );
}

export default FlightCard;

import { Box, Typography, CircularProgress } from '@mui/material';
import FlightCard from './FlighCard';
import type { Itinerary, Leg } from '../types';

const FlightResults = ({ flights, isLoading }: { flights: Itinerary[]; isLoading: boolean }) => {
    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (flights.length === 0) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Typography variant="h6">No flights found</Typography>
            </Box>
        );
    }

    return (
        <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
                {flights.length} flights found
            </Typography>
            {flights.map((flight) => (
                <FlightCard key={flight.id} leg={flight} />
            ))}
        </Box>
    );
}

export default FlightResults;
import React, { useState } from 'react';
import {
    TextField,
    Button,
    Container,
    Grid,
    Typography,
    Paper,
    RadioGroup,
    FormControlLabel,
    Radio,
    InputAdornment,
    InputLabel
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import type { FlightSearchParams } from '../types';

interface FlightSearchFormProps {
    onSearch: (params: FlightSearchParams) => void;
}

const FlightSearchForm: React.FC<FlightSearchFormProps> = ({ onSearch }) => {
    const [passengers, setPassengers] = useState(1);
    const [searchParams, setSearchParams] = useState<FlightSearchParams>({
        originSkyId: '',
        destinationSkyId: '',
        originEntityId: '',
        destinationEntityId: '',
        date: '',
        cabinClass: 'economy',
        adults: 1,
        sortBy: 'best',
        currency: 'USD',
        market: 'en-US',
        countryCode: 'US'
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch({ ...searchParams, adults: passengers });
    };


    return (
        <Paper elevation={3} sx={{ p: 3, m: 4 }}>

            <form onSubmit={handleSubmit}>


                <TextField
                    label="Origin"
                    value={searchParams.originSkyId}
                    onChange={(e) => setSearchParams({ ...searchParams, originSkyId: e.target.value })}
                    fullWidth
                    required
                />
                <TextField
                    label="Destination"
                    value={searchParams.destinationSkyId}
                    onChange={(e) => setSearchParams({ ...searchParams, destinationSkyId: e.target.value })}
                    fullWidth
                    required
                />
                <DatePicker
                    label="Date"
                    value={searchParams.date}
                    onChange={(newValue) => setSearchParams({ ...searchParams, date: newValue })}

                />
                <RadioGroup
                    value={searchParams.cabinClass}
                    onChange={(e) => setSearchParams({ ...searchParams, cabinClass: e.target.value as "economy" | "premium_economy" | "business" | "first" })}
                >
                    <FormControlLabel value="economy" control={<Radio />} label="Economy" />
                    <FormControlLabel value="business" control={<Radio />} label="Business" />
                    <FormControlLabel value="first" control={<Radio />} label="First" />
                </RadioGroup>
                <TextField
                    label="Number of Passengers"
                    type="number"
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                    fullWidth
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Search Flights
                </Button>
            </form>

        </Paper>

    )

};

export default FlightSearchForm;
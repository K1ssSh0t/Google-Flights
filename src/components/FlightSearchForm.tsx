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
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { FlightSearchParams } from '../types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

interface FlightSearchFormProps {
    onSearch: (params: FlightSearchParams) => void;
}

const FlightSearchForm: React.FC<FlightSearchFormProps> = ({ onSearch }) => {
    const [passengers, setPassengers] = useState(1);
    const [date, setDate] = useState<Dayjs | null>(null);
    const [searchParams, setSearchParams] = useState<FlightSearchParams>({
        originSkyId: 'LOND',
        destinationSkyId: 'NYCA',
        originEntityId: '27544008',
        destinationEntityId: '27537542',
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
        console.log('Date:', date?.toISOString().split('T')[0]);

        onSearch({ ...searchParams, adults: passengers, date: date ? date.toISOString().split('T')[0] : '' });
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Date"
                        value={date}
                        onChange={(newValue) => setDate(newValue)}
                    />
                </LocalizationProvider>

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
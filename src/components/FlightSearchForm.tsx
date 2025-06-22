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
    InputAdornment
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

            </form>

        </Paper>

    )

};

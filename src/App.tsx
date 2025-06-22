import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Container, CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material';
import FlightSearchForm from './components/FlightSearchForm';
import FlightResults from './components/FlightResults';
import { searchFlights } from './api/request';
import type { FlightSearchParams, Itinerary, Leg } from './types';



const theme = createTheme({
  palette: {
    primary: { main: '#1a73e8' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8 }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: { borderRadius: 8 }
      }
    }
  }
})

function App() {
  const [flights, setFlights] = useState<Itinerary[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (params: FlightSearchParams) => {
    setLoading(true);
    try {
      const data = await searchFlights(params);
      setFlights(data.itineraries);
    } catch (error) {
      console.error("Error fetching flights:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          ✈️ Flight Search
        </Typography>
        <FlightSearchForm onSearch={handleSearch} />
        <FlightResults flights={flights} isLoading={loading} />
      </Container>
    </ThemeProvider>
  )
}

export default App

import axios from "axios";
import type { FlightSearchParams } from "../types";
import type { Data } from "../types";
import type { AirportSearchParams } from "../types";
import type { Daum } from "../types";

const API_URL = "https://sky-scrapper.p.rapidapi.com/api/v1/flights/";
const API_KEY = import.meta.env.VITE_API_KEY;

export const searchFlights = async (
  params: FlightSearchParams
): Promise<Data> => {
  const options = {
    method: "GET",
    url: API_URL + "searchFlights",
    params: {
      originSkyId: params.originSkyId,
      destinationSkyId: params.destinationSkyId,
      originEntityId: params.originEntityId,
      destinationEntityId: params.destinationEntityId,
      date: params.date,
      cabinClass: params.cabinClass,
      adults: params.adults,
      sortBy: params.sortBy,
      currency: params.currency,
      market: params.market,
      countryCode: params.countryCode,
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log("Flight data fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    throw error;
  }
};

export const searchAirport = async (
  params: AirportSearchParams
): Promise<Daum> => {
  const options = {
    method: "GET",
    url: API_URL + "searchAirport",
    params: {
      query: params.query,
      locale: params.locale,
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching airport data:", error);
    throw error;
  }
};

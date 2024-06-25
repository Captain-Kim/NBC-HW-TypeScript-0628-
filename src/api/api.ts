import axios from "axios";
import { CountryData } from "../types/countryTypes";

export const fetchCountries = async () : Promise<CountryData[]> => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
}
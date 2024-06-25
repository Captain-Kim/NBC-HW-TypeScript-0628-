import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchCountries } from '../api/api';
import { CountryData } from '../types/countryTypes';

const useCountryQuery = (): UseQueryResult<CountryData[], Error> => {
  return useQuery<CountryData[], Error>({
    queryKey: ['country'],
    queryFn: fetchCountries,
  });
};

export default useCountryQuery;
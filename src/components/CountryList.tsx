import { useState, useEffect } from 'react';
import { CountryData } from '../types/countryTypes';
import styled from 'styled-components';
import CountryCard from './CountryCard';
import useCountryQuery from '../hooks/useCountryQuery';

const StyledCardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CountryList = () => {
    const [favoriteCountries, setFavoriteCountries] = useState<CountryData[]>([]);
    const [allCountries, setAllCountries] = useState<CountryData[]>([]);
    const { data: countries, isPending, isError } = useCountryQuery();

    useEffect(() => {
        if (countries) {
            setAllCountries(countries);
        }
    }, [countries]);

    const addFavoriteCountry = (country: CountryData) => {
        setFavoriteCountries([...favoriteCountries, country]);
        setAllCountries(allCountries.filter(c => c.cca3 !== country.cca3));
    };


    const removeFavoriteCountry = (country: CountryData) => {
        setFavoriteCountries(favoriteCountries.filter(c => c.cca3 !== country.cca3));
        setAllCountries([...allCountries, country]);
    };

    if (isPending) return <div>로딩 중</div>;
    if (isError) return <div>에러</div>;

    return (
        <>
            <h1>내가 좋아하는 나라들</h1>
            <StyledCardSection>
                {favoriteCountries.map((country) => (
                    <CountryCard key={country.cca3} country={country} onCountryClick={removeFavoriteCountry} selected />
                ))}
            </StyledCardSection>
            <h1>여기서 나라를 골라 보세요</h1>
            <StyledCardSection>
                {allCountries.map((country) => (
                    <CountryCard key={country.cca3} country={country} onCountryClick={addFavoriteCountry} />
                ))}
            </StyledCardSection>
        </>
    );
}

export default CountryList;
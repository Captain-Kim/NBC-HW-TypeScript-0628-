import { CountryData } from '../types/countryTypes';

type CountryCardProps = {
    country: CountryData;
    onCountryClick: (country: CountryData) => void;
    selected: boolean;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onCountryClick, selected }) => {
    return (
        <>
        </>
    )
}

export default CountryCard;
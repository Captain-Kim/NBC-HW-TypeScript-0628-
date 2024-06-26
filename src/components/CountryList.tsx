import styled from 'styled-components';
import CountryCard from './CountryCard';
import useCountryQuery from '../hooks/useCountryQuery';

const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CountryList = () => {
    const { data: countries, isPending, isError } = useCountryQuery();

    if (isPending) return <div>로딩 중</div>;
    if (isError) return <div>에러</div>;

    return (
        <>
            <h1>내가 고른 카드</h1>
            <CardSection>
                <CountryCard />
            </CardSection>
            <h1>국가 목록</h1>
            <CardSection>
                <CountryCard />
            </CardSection>
        </>
    )
}

export default CountryList;
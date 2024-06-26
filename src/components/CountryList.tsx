import styled from 'styled-components';
import CountryCard from './CountryCard';

const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CountryList = () => {

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
import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '@/components/ui/input';

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color:rgb(0, 0, 0);
  border-bottom: 1px solid #e1e8ed;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color:black;
  background-color: #fff;
`;

const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 600px;
`;

const TrendingItem = styled.div`
  padding: 10px;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  background-color:rgb(0, 0, 0);
`;

const TrendingTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color:white;
`;

const TrendingDescription = styled.p`
  font-size: 0.875rem;
  color:rgb(133, 144, 153);
`;

const SearchPage = () => {
  const [trending] = useState([
    { title: 'React', description: 'Trending in Web Development' },
    { title: 'JavaScript', description: 'Trending in Programming' },
    { title: 'TypeScript', description: 'Trending in Type Safety' },
    { title: 'Styled Components', description: 'Trending in CSS-in-JS' },
  ]);

  return (
    <>
      <SearchBar>
        <Input type="search" placeholder="Search for a tweet" />
      </SearchBar>
      <Container>
        <TrendingContainer>
          {trending.map((item, index) => (
            <TrendingItem key={index}>
              <TrendingTitle>{item.title}</TrendingTitle>
              <TrendingDescription>{item.description}</TrendingDescription>
            </TrendingItem>
          ))}
        </TrendingContainer>
      </Container>
    </>
  );
};

export default SearchPage;
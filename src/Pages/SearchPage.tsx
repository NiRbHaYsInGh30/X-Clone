import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
const Fragment=styled.div``

const SearchBarContainer = styled.div`
   display: flex;
    align-items: center;
    width: 100%;
    max-width: 983px;
    padding: 12px;
    border: 1px solid black;
    background-color: #ffffff;
    border-radius: 14px;
    margin-left: 16px;
    @media(max-width:1559px){
    max-width:900px;
    }
`;

const SearchBar = styled.input.attrs({ type: 'search' })`
  flex: 1;
  padding: 2px;
  border: none;
  background-color: transparent;
  font-size: 16px;
  outline: none;
  &::hover {
    background-color: #f0f0f0;
  }
  &:focus {
    outline: none;
  }
`;


const SearchBarSection = styled.div`
 display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 100px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    justify-content: center;
    padding-bottom: 10px;
    margin-left: -120px;
  
`;
const FieldButtons=styled.button`
  &:hover {
 
    background-color: #f0f0f0;
    text-decoration:underline blue; 
    padding:1px;
    border-radius: 5px;
  }
`
const ForYouPageContainer = styled.div`
     margin-top: 10px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid black;
     margin-left: -82px;

  @media (max-width: 1559px) {
    margin-top: 10px;
    padding: 0 20px;
    display: flex
;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid black;
    margin-left: -32px;
}
  }
`;

const ForYouPageHeading = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: black;
  margin: 0 0 10px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 18px; 
  }
`;

const ForYouPageHashTag = styled.h2`
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin: 5px 0;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 16px; 
  }
`;

const ForYouPageTotalPost = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: gray;
  margin: 5px 0 0; /* Spacing above */
  text-align: left;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SearchPage = () => {
  const data=[
    {"Trend":"Trending in India","HashTag":"#World","Post":"1.2M Posts"},
    {"Trend":"Trending for you","HashTag":"India","Post":"500k Posts"},
    {"Trend":"Trending in sports","HashTag":"#Sports","Post":"200k Posts"},
    {"Trend":"Trending in Business","HashTag":"#Business","Post":"30k Posts"},
    {"Trend":"Finance : Trending","HashTag":"#Finance","Post":"1k Posts"},
  ]
  return (
    <Fragment>

      <SearchBarContainer>
        <FaSearch />
        <SearchBar placeholder='Enter your search'>
        </SearchBar>
      </SearchBarContainer>
      <SearchBarSection>
        <FieldButtons>For you</FieldButtons>
        <FieldButtons>Trending</FieldButtons>
        <FieldButtons>News</FieldButtons>
        <FieldButtons>Sports</FieldButtons>
      </SearchBarSection>
      {data.map((item, index) => (
        <ForYouPageContainer key={index}>
          <ForYouPageHeading>{item.Trend}</ForYouPageHeading>
          <ForYouPageHashTag>{item.HashTag}</ForYouPageHashTag>
          <ForYouPageTotalPost>{item.Post}</ForYouPageTotalPost>
          <br/>
          <br/>
        </ForYouPageContainer>
      ))}
      

    </Fragment>
  );
};

export default SearchPage;
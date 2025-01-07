import styled from 'styled-components';
import AddTweet from '../Components/Tweets/AddTweet';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-right: 310px;
  `;

const HomePage = () => {
  return (
    <PageWrapper>
      <MainContent>
        <AddTweet />
      </MainContent>
    </PageWrapper>
  );
};

export default HomePage;
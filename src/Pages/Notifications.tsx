import styled from 'styled-components';
import NotifCationPost from '@/hooks/NotifCationPost';

const MainContent = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  height: 95vh;
  align-items: center;
`;
const NotifHeading = styled.h1`
  font-size: 35px;
  font-weight: 700;
  color: black;
  margin-right:190px;
`;
const NotifContainer = styled.div`
  margin-top: 20px; 
  color: black;
  height: 83%;
  width: 53%;
  background-color: white;
  border-radius: 10px;
  position: fixed;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (min-width: 1307px) and (min-height: 933px) {
    width: 55%; 
  }
  @media (max-width: 1030px) and (max-height: 933px) {
    width: 42%; 
  }
  @media (max-width: 941px) and (max-height: 933px) {
    width: 37%; 
  }
  @media (max-width: 900px) and (max-height: 933px) {
    width: 37%; 
  }
`;
const Notifications = () => {

  return (
    <>
      <MainContent>
        <NotifHeading>
          Notifications
        </NotifHeading>
        <NotifContainer>
      <NotifCationPost/>
    </NotifContainer>
      </MainContent>
    </>
  );
};

export default Notifications;
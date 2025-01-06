import styled from 'styled-components';
import { FaHeart, FaRetweet, FaTwitter, FaUser } from 'react-icons/fa';

const MainContent = styled.div`
  width: 78%;
  padding: 20px;
  background-color: white;
  height: 95vh;
  align-items: center;
`;
const NotifHeading = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
`;
const NotifContainer = styled.div`
  margin-top: 20px; 
  color: black;
  height: 83%;
  width: 45%;
  background-color: white;
  border-radius: 10px;
  position: fixed;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (min-width: 1024px) and (min-height: 640px) {
    width: 57.5%; 
  }
`;
const Notif = styled.div`
  margin-top: 20px;
  background-color: white;
  padding-left: 50px;
  padding-right: 40px;
  gap: 20px;
  text-align: left;
  border-bottom: 0.5px solid #808080;
  padding-bottom: 20px;
`;
const GrayText = styled.p`
  padding-top: 5px;
  color: gray;
`;
const Notif2 = styled.div`
  margin-top: 20px;
  background-color: white;
  padding-left: 50px;
  padding-right: 40px;
  gap: 20px;
  text-align: left; 
  padding-bottom: 10px;
`;
const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: -30px;
`;
const FaHeartIcon = styled(FaHeart)`
  height: 25px;
  width: 25px;
`;
const FaTwitterIcon = styled(FaTwitter)`
  height: 25px;
  width: 25px;
`;
const FaRetweetIcon = styled(FaRetweet)`
  height: 25px;
  width: 25px;
`;
const FaUserIcon = styled(FaUser)`
  height: 25px;
  width: 25px;
`;

const Img = styled.img`
  height: 38px;
  width: 38px;
  border-radius: 50%;
`;


const Notifications = () => {
  return (
    <>
      <MainContent>
        <NotifHeading>
          Notifications
        </NotifHeading>
        <NotifContainer>
          <Notif>
            <Span>
              <FaUserIcon/>  
              <Img src="/pfp/Donald_Trump.jpg" alt=""/>
            </Span>
            <b>Donald J. Trump</b> followed you
          </Notif>
          <Notif>
          <Span>
              <FaTwitterIcon/>
              There was a login to your account @Chikki from a new device on January 2, 2025. Review it now.</Span>
          </Notif>
          <Notif>
          <Span>
              <FaUserIcon/>
              <Img src="/pfp/Nasa.jpg" alt=""/>
            </Span>
            <b>NASA</b> followed you
          </Notif>
          <Notif>
          <Span>
              <FaRetweetIcon/>
              <Img src="/pfp/Heads_Up.jpg" alt=""/>
            </Span>
            <b>Heads_Up</b> reposted your repost
            <GrayText>
              no one can emote pain better than Ranbir Kapoor on screen 
              https://pic.x.com/RfD34mjnRR
            </GrayText>
          </Notif>
          <Notif>
          <Span>
              <FaUserIcon/>
              <Img src="/pfp/Heads_Up.jpg" alt=""/>
              <Img src="/pfp/Nirbhay_Singh.jpg" alt=""/>
            </Span>
            <b>Heads_Up</b> and <b>Nirbhay Singh</b> followed you
          </Notif>
          <Notif2>
          <Span>
              <FaHeartIcon/>
              <Img src="/pfp/Nasa.jpg" alt=""/>
            </Span>
            <b>NASA</b> liked your post
            <GrayText>
              #AirDroidParentalControl is a powerful parental monitoring app loaded with tools to keep an eye on your kids smartphone usage. Explore more : bit.ly/3e9mVZF
            </GrayText>
          </Notif2>
        </NotifContainer>
      </MainContent>
    </>
  );
};

export default Notifications;
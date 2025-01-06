import styled from "styled-components";


const ProfileContainer = styled.div``;
const Banner = styled.div`

  width: 100%;
`;
const BannerImage = styled.img`
    width: 119%;
    max-width: 1907px;
    height: 209px;
    object-fit: cover;
    position: relative;
    right: 216px;
    bottom: 20px;

    @media (max-width: 1668px) {
        width: 97%;
        left: -90.5px;
        }
@media (max-width: 768px) {
        width: 52%;
        left: 0px;
    }
  }
@media (max-width: 992px) {       
        width: 68%;
        left: 0;
}
@media (max-width: 1400px) {
        width: 80%;
        left: 0px;
}
`;
const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-style: solid 2px black;
  position: absolute;
  top: 160px;
  z-index: 10;
  left: 292px;
`;
const ProfileInfo = styled.div`
  font-weigth: 500;
  display: flex;

`;

const ProfileName = styled.h1`
  position: absolute;
  top: 270px;
  margin-left: 15px;
  font-size: 24px;
`;
const ProfileUserName = styled.h2`
  position: absolute;
  top: 304px;
  margin-left: 15px;
  font-size: 13px;
`;
const Followers = styled.h3`
  position: absolute;
  top: 321px;
  margin-left: 15px;
  font-size: 13px;
`;

const Profile = () => {
  const name=localStorage.getItem("userName");
  const userId=localStorage.getItem("mail");
  return (
    <div>
      <ProfileContainer>
        <Banner>
          <BannerImage
            src="https://images.unsplash.com/photo-1597245999867-5cb87c615826?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner"
          />
        </Banner>
        <ProfileImage src="public/pfp/Nirbhay_Singh.jpg" alt="Profile" />
        <ProfileInfo>
          <ProfileName>{name}</ProfileName>
          <ProfileUserName>{userId}</ProfileUserName>
          <Followers>Followers:321</Followers>
        </ProfileInfo>
      </ProfileContainer>
    </div>
  );
};
export default Profile;

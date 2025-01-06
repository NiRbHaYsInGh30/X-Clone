import styled from "styled-components";


const ProfileContainer = styled.div``;
const Banner = styled.div`
  width: 100%;
`;
const BannerImage = styled.img`
    width: 120%;
    max-width: 2000px;
    height: 209px;
    object-fit: cover;
    position: relative;
    right: 216px;
    bottom: 20px;
    z-index:-1;
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
  left: 300px;
`;
const ProfileInfo = styled.div`
  position: absolute;
  top: 280px;
  left: 300px;
`;

const ProfileName = styled.h1`
  font-size: 24px;
  font-weight:700;
  margin-left: -17px;
`;

const ProfileUserName = styled.h2`
  font-size: 14px;
  color: gray;
`;

const Followers = styled.div`
  font-size: 14px;
  color: darkgray;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
`;

const FollowerCount = styled.span`
  font-weight: bold;
  color: black;
`;

const ProfileBar = styled.div`
  display:flex;
  flex-direction:row;
margin-top: 200px;
gap:140px;
width:81%;
border-bottom:1px solid black;
justify-content:center; 

 
`
const ProfileBarContent = styled.button`
 &:hover {
 
    background-color: #f0f0f0;
    text-decoration:underline blue; 
  }
`
const Profile = () => {
  const name = localStorage.getItem("userName");
  const userId = localStorage.getItem("mail");
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
          <Followers>
            <FollowerCount>321</FollowerCount> Followers
          </Followers>
          <Followers>
            <FollowerCount>900</FollowerCount> Following
          </Followers>
        </ProfileInfo>

        <ProfileBar>
          <ProfileBarContent>Posts</ProfileBarContent>
          <ProfileBarContent>Media</ProfileBarContent>
          <ProfileBarContent>Likes</ProfileBarContent>
        </ProfileBar>
        


      </ProfileContainer>
    </div>
  );
};
export default Profile;

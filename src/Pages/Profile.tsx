import { Banner, BannerImage, FollowerCount, Followers, ProfileBar, ProfileBarContent, ProfileContainer, ProfileImage, ProfileInfo, ProfileName, ProfileUserName } from "@/Components/Styles/Styles";
export const Profile = () => {
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
        <ProfileImage src="pfp/Nirbhay_Singh.jpg" alt="Profile" />
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
          <ProfileBarContent >Posts</ProfileBarContent>
          <ProfileBarContent>Media</ProfileBarContent>
          <ProfileBarContent>Likes</ProfileBarContent>
        </ProfileBar>


      </ProfileContainer>
      
    </div>
  );
};
export default Profile;

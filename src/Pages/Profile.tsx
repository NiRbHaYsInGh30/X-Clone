import styled from "styled-components";

export const TweetContain=styled.div`
       width:100%;
       max-width:500px;
       background:red;
       height:120px;
  `

 const Profile = () => {
  return (
    <div>
      
      Profile
      <TweetContain>
        <h1>Profile</h1>
      </TweetContain>

    </div>
  )
}
export default Profile;
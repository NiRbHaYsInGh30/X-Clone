import styled from "styled-components";

export const Headerr = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;
export const Head=styled(Headerr)`
 display: flex;
  min-height: 100vh; /* Fixed height for viewport */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: #f5f5f5;
  padding: 24px;

  @media (min-width: 768px) {
    padding: 40px; /* md:p-10 */
  }
  `
  
  export const LoginWrapper = styled.div`
  width: 100%;
  max-width: 24rem;
  
  @media (min-width: 768px) {
    max-width: 48rem;
    }
    `;
    
  export  const SignupWrapper=styled(LoginWrapper)`
    display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      gap: 24px;
    `

    export const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  padding: 20px;
  background-color: rgb(255, 255, 255);
  min-height: 100vh;
  margin-left: 50px; /* Adjust margin for a better view */
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align heading to the left */
  gap: 15px;
  margin-bottom: 30px;
`;

export const HeadingImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 30px;
`;

export const HeadingText = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 800px;
`;

export const SearchBar = styled.input.attrs({ type: "search" })`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const JobContainer = styled.div`
  background: #ffffff;
  border: 1px solid #dfe3e8;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

<<<<<<< HEAD
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const JobText = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 10px;
  text-transform: capitalize;
`;

export const JobLocation = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #4a4a4a;
  margin: 0 0 12px;
`;

export const JobDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #6c757d;
  margin: 0 0 15px;
`;

export const JobSalary = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #28a745;
  margin: 0 0 20px;
`;
export const ProfileContainer = styled.div``;
export const Banner = styled.div`
  width: 100%;
`;
export const BannerImage = styled.img`
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
export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 160px;
  z-index: 10;
  left: 300px;
`;
export const ProfileInfo = styled.div`
  position: absolute;
  top: 280px;
  left: 300px;
`;

export const ProfileName = styled.h1`
  font-size: 24px;
  font-weight:700;
  margin-left: -17px;
`;

export const ProfileUserName = styled.h2`
  font-size: 14px;
  color: gray;
`;

export const Followers = styled.div`
  font-size: 14px;
  color: darkgray;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
`;

export const FollowerCount = styled.span`
  font-weight: bold;
  color: black;
`;

export const ProfileBar = styled.div`
  display:flex;
  flex-direction:row;
margin-top: 200px;
gap:140px;
width:81%;
border-bottom:1px solid black;
justify-content:center;
`
export const ProfileBarContent = styled.button`
 &:hover {
 
    background-color: #f0f0f0;
    text-decoration:underline blue; 
    padding:1px;
    border-radius: 5px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  margin-right: 20px;
  color: black;
  background-color: rgba(255, 255, 255, 0.96);
  // border-top: 1px solid #38444d;
  border-: 1px solid #38444d;
`;
export const Wrap=styled.div`  
`

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 150%;

  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Textarea = styled.textarea`
  width: 100%;
  color: black;
  background-color:rgb(255, 255, 255);
  border:1px solid black;
  padding: 10px;

  border-radius: 8px;
  resize: none;
  font-size: 1rem;
`;

export const Buttonnn = styled.button`
  align-self: flex-end;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #1da1f2;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0d8ddb;
  }
`;
export const InputFieldStyle = styled.input.attrs({ type: "file" })`

&
  width: 300px;
  max-width: 100%&
  color: #444;
  padding: 5px;
  background: #fff;
  border-radius: 8px;


&::file-selector-button {
  margin-right: 20px;
  border: none;
  background: #084cdf;
  padding: 10px 20px;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: background .2s ease-in-out;
}

&::file-selector-button:hover {
  background: #0d45a5;
}
`

export const TweetContainer = styled.div`
  margin-top: 20px;
  width: 150%;
  // max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  
`;

export const Tweet = styled.div`
  background-color:rgb(255, 255, 255);
  padding: 15px;
  border-radius: 12px;
  border: 1px solid black;
   background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
`;

export const TweetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export const TweetContent = styled.div`
  margin-top: 10px;
  font-size: 20px;
  display:flex;
`;

export const TweetImage = styled.img`
  width: 150%;
  max-width: 500px;
  border-radius: 12px;
  margin-top: 10px;
  // margin-left:35px;
`;

export const TweetActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #38444d;
`;

export const TweetAction = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  color:rgb(10, 10, 10);

  &:hover {
    color: #1da1f2;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
`;

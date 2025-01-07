
import styled from 'styled-components';

const AsideBarWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 250px;
  background-color: #f5f8fa;
  padding: 20px;
  border-left: 1px solid #e1e8ed;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #000;
`;

const UserSuggestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;

const FollowButton = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 8px;
    background-color: #1da1f2;
    color: #fff;
    font-size: 0.875rem;
    cursor: pointer;
  &:hover {
    background-color: #0d8ddb;
  }
`;

const AsideBar = () => {
  
//   const caseString = "camel_to_case";
//   const caseString2 = "camel-to-case";

//   console.log(`Input value is :${caseString}`);
//   console.log(`Input value is :${caseString2}`);
//     const toCamelCase = (str:string) => {
//       let arr = str.split('');
//       for (let i = 0; i < arr.length; i++) {
//           if (arr[i] === "_") {
//               arr.splice(i, 1);
//               arr[i] = arr[i].toUpperCase();
//               console.log(`UpperCase Letter after _ : ${arr[i]}`);
//           }
//           if (arr[i] === "-") {
//               arr.splice(i, 1);
//               arr[i] = arr[i].toUpperCase();
//               console.log(`UpperCase Letter after -: ${arr[i]}`);
//           }
//       }
//       return arr.join('');
//   }

//   console.log(`first Output value is :${toCamelCase(caseString)}`);
//   console.log(`Second Output value is :${toCamelCase(caseString2)}`);

// const str = "convert-to_camel"

// function toCamel(a:string){
//     const newStr = a.replace("-",'_').split("_")
//     const d = newStr.shift()
//     const f = newStr.map(e=>e.slice(0,1).toUpperCase() + e.slice(1)).join("")
//     const i = `${d}${f}`
//     return i
// }

// console.log(toCamel(str))

  return (
    <AsideBarWrapper>
      <Section>
        <SectionTitle>Who to follow</SectionTitle>

        <UserSuggestion>
          <UserName>User 1</UserName>
          <FollowButton>Follow</FollowButton>
        </UserSuggestion>

        <UserSuggestion>
          <UserName>User 2</UserName>
          <FollowButton>Follow</FollowButton>
        </UserSuggestion>

        <UserSuggestion>
          <UserName>User 3</UserName>
          <FollowButton>Follow</FollowButton>
        </UserSuggestion>
        

      </Section>
      <Section>
        <SectionTitle>Trending</SectionTitle>
        <UserSuggestion>
          <UserName>Topic 1</UserName>
        </UserSuggestion>
        <UserSuggestion>
          <UserName>Topic 2</UserName>
        </UserSuggestion>
        <UserSuggestion>
          <UserName>Topic 3</UserName>
        </UserSuggestion>
      </Section>
    </AsideBarWrapper>
  );
};

export default AsideBar;
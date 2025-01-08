import { Button } from "@/Components/ui/button";
import styled from "styled-components";

const Fragment = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    min-height: 100vh;
    margin-left: -190px
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  text-align: center;
`;

const HeadingImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius:30px;
`;

const HeadingText = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

const SearchBarContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
`;

const SearchBar = styled.input.attrs({ type: "search" })`
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

const SearchBar1 = styled(SearchBar)``;

const JobContainer = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const JobText = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 0 0 10px;
`;

const JobLocation = styled.h1`
  font-size: 16px;
  font-weight: normal;
  color: #555;
  margin: 0 0 10px;
`;

const JobDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 10px;
`;

const JobSalary = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
  margin: 0 0 15px;
`;

const JobsPage = () => {

  const company=[
    {"title":"","Location":"","Description":" ","Salary":""},
  ]


  const sort012 = (arr:any[]) => {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    while (mid <= high) {
      if (arr[mid] === 0) {
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
      } else if (arr[mid] === 1) {
        mid++;
      } else {
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
      }
    }
    return arr;
  };
  
  const arr = [1, 2, 0, 1, 0, 2];
  console.log(sort012(arr));
  console.log(arr.sort());
 
  

  const countFreq = (arr2:any[]) => {
    const freqMap = new Map();
    for (let num of arr2) {
      const currentFrequency = freqMap.get(num) || 0;
      const updatedFrequency = currentFrequency + 1;
      freqMap.set(num, updatedFrequency);
    }
    return freqMap;
  }
  
  const arr2=[1,2,1,1,1,1,1,3,4,5,6,1,2,3,4,5,6];
  console.log(countFreq(arr2));
  return (
    <Fragment>
      <HeadingContainer>
        <HeadingImage src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg"></HeadingImage>
        <HeadingText>Welcome to X job Search</HeadingText>
      </HeadingContainer>
      <SearchBarContainer>
        <SearchBar placeholder="Enter the Role"></SearchBar>
        <SearchBar1 placeholder="Enter the Location"></SearchBar1>
        <Button variant="destructive">Search</Button>
      </SearchBarContainer>
       {company.map((index, value) => {
        return (
          <JobContainer key={value}>
            <JobText>{index.title}</JobText>
            <JobLocation>{index.Location}</JobLocation>
            <JobDescription>{index.Description}</JobDescription>
            <JobSalary>{index.Salary}</JobSalary>
            <Button variant="destructive">Apply</Button>
          </JobContainer>
        );
      })} 
    </Fragment>
  )
}
export  default JobsPage;
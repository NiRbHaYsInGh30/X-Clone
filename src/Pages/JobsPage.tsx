import { Button } from "@/Components/ui/button";
import styled from "styled-components";
<<<<<<< HEAD
=======

>>>>>>> 262e7e836ff57a280f0db0e2cde8b4a8061770ef
const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  padding: 20px;
  background-color: rgb(255, 255, 255);
  min-height: 100vh;
  margin-left: 50px; /* Adjust margin for a better view */
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align heading to the left */
  gap: 15px;
  margin-bottom: 30px;
`;

const HeadingImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 30px;
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
  max-width: 800px;
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

const JobContainer = styled.div`
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

const JobText = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 10px;
  text-transform: capitalize;
`;

const JobLocation = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #4a4a4a;
  margin: 0 0 12px;
`;

const JobDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #6c757d;
  margin: 0 0 15px;
`;

const JobSalary = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #28a745;
  margin: 0 0 20px;
`;


const JobsPage = () => {

  const company = [
    {
      title: "Senior Sales Manager",
      Location: "Mumbai, Maharashtra",
      Description: "Responsible for leading the sales team, strategizing sales plans, and achieving revenue targets in the region.",
      Salary: "15,00,000 per annum",
    },
    {
      title: "Junior Sales Executive",
      Location: "Pune, Maharashtra",
      Description: "Support the sales team by managing client relationships and closing small-scale deals.",
      Salary: "4,50,000 per annum",
    },
    {
      title: "Software Developer",
      Location: "Bangalore, Karnataka",
      Description: "Develop and maintain web applications using modern JavaScript frameworks like React and Node.js.",
      Salary: "19,00,000 per annum",
    },
    {
      title: "Marketing Specialist",
      Location: "Delhi, India",
      Description: "Plan and execute digital marketing campaigns, including SEO/SEM, email marketing, and social media advertising.",
      Salary: "9,00,000 per annum",
    },
    {
      title: "HR Manager",
      Location: "Chennai, Tamil Nadu",
      Description: "Oversee the recruitment process, manage employee relations, and ensure compliance with labor laws.",
      Salary: "14,00,000 per annum",
    },
    {
      title: "Graphic Designer",
      Location: "Hyderabad, Telangana",
      Description: "Create engaging visuals for websites, social media, and marketing materials using tools like Adobe Photoshop and Illustrator.",
      Salary: "9,50,000 per annum",
    },
    {
      title: "Data Analyst",
      Location: "Noida, Uttar Pradesh",
      Description: "Analyze complex datasets to provide actionable insights and support data-driven decision-making processes.",
      Salary: "10,00,000 per annum",
    },
    {
      title: "Sr.Data Analyst",
      Location: "Noida, Uttar Pradesh",
      Description: "Analyze complex datasets to provide actionable insights and support data-driven decision-making processes.",
      Salary: "19,00,000 per annum",
    },
    {
      title: "Cloud Administrator",
      Location: "Ahmedabad, Gujarat",
      Description: "Manage cloud-based infrastructure, ensure system security, and optimize resource allocation.",
      Salary: "13,00,000 per annum",
    },
    {
      title: "UI/UX Designer",
      Location: "Kolkata, West Bengal",
      Description: "Design intuitive user interfaces and enhance user experience for web and mobile applications.",
      Salary: "8,00,000 per annum",
    },
    {
      title: "Business Analyst",
      Location: "Jaipur, Rajasthan",
      Description: "Bridge the gap between business needs and technical solutions by gathering requirements and analyzing processes.",
      Salary: "11,00,000 per annum",
    },
  ];
  
  
=======
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
>>>>>>> 262e7e836ff57a280f0db0e2cde8b4a8061770ef
  return (
    <Fragment>
      <HeadingContainer>
        <HeadingImage src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg"></HeadingImage>
        <HeadingText>Welcome to X job Search</HeadingText>
      </HeadingContainer>
      <SearchBarContainer>
        <SearchBar placeholder="Enter the Role"></SearchBar>
        <SearchBar placeholder="Enter the Location"></SearchBar>
        <Button variant="destructive">Search</Button>
      </SearchBarContainer>
       {company.map((index, value) => {
        return (

          <JobContainer key={value}>
            <JobText>{index.title}</JobText>
            <JobLocation>{index.Location}</JobLocation>
            <JobDescription>{index.Description}</JobDescription>
            <JobSalary>Salary:{index.Salary}</JobSalary>
            <Button variant="destructive">Apply</Button>
          </JobContainer>
          
        );
      })} 
    </Fragment>
  )
}
export  default JobsPage;
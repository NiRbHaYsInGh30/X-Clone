import { JobContainer, JobDescription, JobLocation, JobSalary, JobText } from "@/Components/Styles/Styles";
import { Button } from "@mui/material";


const JobPost = () => {
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
  return (
    <>
    {company.map((index, value) => {
        return (

          <JobContainer key={value}>
            <JobText>{index.title}</JobText>
            <JobLocation>{index.Location}</JobLocation>
            <JobDescription>{index.Description}</JobDescription>
            <JobSalary>Salary:{index.Salary}</JobSalary>
            <Button>Apply</Button>
          </JobContainer>
          
        );
      })} 
    </>
  )
}
export  default JobPost;
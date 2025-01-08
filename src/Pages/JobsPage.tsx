import { HeadingContainer, HeadingImage, HeadingText, SearchBar, SearchBarContainer } from "@/Components/Styles/Styles";
import { Button } from "@/Components/ui/button";
import JobPost from "@/hooks/JobPost";
import { Fragment } from "react/jsx-runtime";
const JobsPage = () => {
  
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
      <JobPost/>
       
    </Fragment>
  )
}
export  default JobsPage;
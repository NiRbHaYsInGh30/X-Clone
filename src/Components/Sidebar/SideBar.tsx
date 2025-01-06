import styled from "styled-components";
import { AppSidebar } from "../../Loaders/SidebarLoader";
import { SidebarProvider } from "../ui/sidebar";


export const Side=styled.div`
  padding:10px;
`
 const SideBars = () => {
  return (
    <div>
      <Side>
        <SidebarProvider>
        <AppSidebar/>
        </SidebarProvider>
      </Side>
    </div>  
  )
}
export default SideBars;
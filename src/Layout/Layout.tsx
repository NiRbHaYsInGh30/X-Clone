

import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBars from "../Components/Sidebar/SideBar";
import AsideBar from "@/Components/AsideBar/AsideBar";

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh; 
  overflow: hidden;
  text-align:center;
`;

export  const Sidebar = styled.div`
  width: var(--sidebar-width, 250px); 
  background-color: #1e293b; 
  color: white; 
  position: fixed; 
  top: 0;
  left: 0;
  height: 100%; 
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); 
`;

export  const Content = styled.div`
  margin-left: var(--sidebar-width, 250px); 
  flex: 1; 
  padding: 20px; 
  overflow-y: auto; 
  display: flex;
  justify-content: center; 
`;

export  const WidthContainer = styled.div`
  width: 100%;
  max-width: var(--content-width, 1200px); 
  padding: 0 20px; 
  box-sizing: border-box; 

`;  

const Layout = () => {
  return (
    <>
    <LayoutContainer>
      <Sidebar>
        <SideBars/>
      </Sidebar>
        <AsideBar/>
      <Content>
        <WidthContainer>
          
          <Outlet />
        </WidthContainer>
      </Content>
    </LayoutContainer>
    </>
  );
};

export default Layout;

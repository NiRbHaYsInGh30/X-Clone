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

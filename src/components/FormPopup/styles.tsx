import styled from "styled-components";


export const FormPoup = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4%;
  .card{
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary.light};
    border-radius: 2rem;
  }
`
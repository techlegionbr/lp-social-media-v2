import styled from "styled-components";


export const Header = styled.header`
width: 100%;
height: 60px;
background-color: ${({ theme }) => theme.colors.primary.main};
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;
padding: 1rem;
.content{
  width: ${({ theme }) => theme.limits.content};
  .tech-legion-logo img{
   
  }
}
`
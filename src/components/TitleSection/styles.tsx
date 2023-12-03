import styled from "styled-components"

export const TitleSection = styled.div`
text-align: center;
width: 100%;
margin-bottom: 5rem;
  h1{
    font-size: ${({ theme }) => theme.font.size.headings.h2[0]};
    line-height: ${({ theme }) => theme.font.size.headings.h2[1]};
  }
  h4{
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.third.main};
    margin-bottom: .5rem;
  }
`
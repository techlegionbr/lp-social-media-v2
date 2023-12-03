import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  button{
    all: unset;
    box-sizing: border-box;
    cursor: pointer;
  }
  body{
    background: ${({ theme }) => theme.colors.light.main};
    font-family:  ${({ theme }) => theme.font.family.Poppins};
    color: ${({ theme }) => theme.colors.light.main}
  }
  h1{
    font-size: ${({ theme }) => theme.font.size.headings.h1[0]};
    line-height: ${({ theme }) => theme.font.size.headings.h1[1]};
  }
  h2{
    font-size: ${({ theme }) => theme.font.size.headings.h2[0]};
    line-height: ${({ theme }) => theme.font.size.headings.h2[1]};
  }
  h3{
    font-size: ${({ theme }) => theme.font.size.headings.h3[0]};
    line-height: ${({ theme }) => theme.font.size.headings.h3[1]};
  }
  h4{
    font-size: ${({ theme }) => theme.font.size.headings.h4[0]};
    line-height: ${({ theme }) => theme.font.size.headings.h4[1]};
  }
  p{
    opacity: .8;
    font-family:  ${({ theme }) => theme.font.family.Roboto};
    font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
    line-height: ${({ theme }) => theme.font.size.paragraphs.sm[1]};
  }
`
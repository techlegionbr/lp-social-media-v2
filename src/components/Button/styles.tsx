import styled from "styled-components"

interface IButtonProps {
  fullWidth: boolean,
  color: "primary" | "secondary" | "third" | "alert" | "success" | "danger",
  shine: boolean
}

export const Button = styled.button<IButtonProps>`

  width: ${({ fullWidth }) => fullWidth ? "100%" : "auto"};
  background-color: ${({ theme, color }) => theme.colors[color].main};
  padding: .6rem ${({ fullWidth }) => fullWidth ? "0rem" : "1.5rem"};
  border-radius: .3rem;
  text-align: center;
  opacity: .9;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: .5px;
  transition: .2s linear;
  font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
  
  box-shadow: ${({ shine, theme, color }) => shine ? `0 0 50px ${theme.colors[color].main}` : "none"};
  color: ${({ color, theme }) => color !== "secondary" ? theme.colors.primary.main : "inherit"};
  &:hover{
    opacity: 1;
    transform: scale(1.02);
  }
`
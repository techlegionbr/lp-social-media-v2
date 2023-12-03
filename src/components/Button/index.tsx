import * as S from "./styles"
import { ComponentProps, ReactNode } from "react"

interface IButtonProps extends ComponentProps<"button"> {
  children: ReactNode | string,
  fullWidth?: boolean,
  color?: "primary" | "secondary" | "third" | "alert" | "success" | "danger",
  shine?: boolean
}

export const Button = ({ shine = true, children, fullWidth = false, color = "secondary", ...props }: IButtonProps) => {
  return (
    <S.Button fullWidth={fullWidth} color={color} shine={shine} {...props}>
      {children}
    </S.Button>
  )
}
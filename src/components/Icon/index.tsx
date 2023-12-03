import { Icon as IconElement } from "@iconify-icon/react"
import { MouseEventHandler } from "react"

interface IIconProps {
  icon: string,
  className?: string,
  onClick?: MouseEventHandler<HTMLElement>
}

export const Icon = ({ icon, className, onClick }: IIconProps) => {
  return <IconElement icon={icon} className={className} onClick={onClick} />
}


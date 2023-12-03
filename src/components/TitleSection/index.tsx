import * as S from "./styles"

import { ReactNode } from "react"

interface ITitleSectionProps {
  title: string | ReactNode,
  supTitle?: string | ReactNode
}
export const TitleSection = ({ title, supTitle }: ITitleSectionProps) => {
  return (
    <S.TitleSection>
      {supTitle && (<h4>{supTitle}</h4>)}
      <h1>{title}</h1>
    </S.TitleSection>
  )
}
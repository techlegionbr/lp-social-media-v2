import { Icon } from "@/components/Icon"
import * as S from "./styles"

interface IOptionsLangs {
  show: boolean
}

export const OptionsLangs = ({ show }: IOptionsLangs) => {
  return show ? (
    <S.OptionsLangs>
      <li><Icon icon="flagpack:br" />Português (BR)</li>
      <li><Icon icon="flagpack:br" />Português (BR)</li>
      <li><Icon icon="flagpack:br" />Português (BR)</li>
      <li><Icon icon="flagpack:br" />Português (BR)</li>
    </S.OptionsLangs>
  ) : <></>
}
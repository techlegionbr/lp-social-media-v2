import { useState } from "react"
import { Icon } from "../Icon"
import { OptionsLangs } from "./components/OptionsLangs"

import * as S from "./styles"

export const SelectLangs = () => {
  const [showOptions, setShowOptions] = useState(false)
  const handleShowOptionToggle = () => setShowOptions(prevShow => !prevShow)
  return (
    <S.SelectLangs active={showOptions}>
      <button onClick={handleShowOptionToggle}>
        <Icon icon="flagpack:br" className="icon-lang" />
        Português (BR)
        <Icon icon="bx:chevron-down" className="icon-arrow" />
      </button>
      <OptionsLangs show={showOptions} />
    </S.SelectLangs>
  )
}
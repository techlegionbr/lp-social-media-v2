import { Icon } from "../Icon"
import { useFormPopup } from "./hooks/useFormPopup"
import * as S from "./styles"


export const FormPopup = () => {
  const { handleShowFormPopupToggle, showFormPopup } = useFormPopup()



  return showFormPopup ? (
    <S.FormPoup>
      <div className="card">
        <button className="btn-close" onClick={handleShowFormPopupToggle}>
          <Icon icon="zondicons:close-solid" />
        </button>
      </div>
    </S.FormPoup>
  ) : <></>
}
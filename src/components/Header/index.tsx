import * as S from "./styles"
import logo from "@/assets/images/Logo_Tech_Legion_H_02_Blue.webp"

export const Header = () => {
  return (
    <S.Header>
      <div className="content">
        <a className="tech-legion-logo">
          <img width={150} alt="logo-tech-legion" src={logo} />
        </a>
      </div>
    </S.Header>
  )
}
import * as S from "./styles"

import logoTechLegion from "@/assets/images/Logo_Tech_Legion_H_02_Blue.webp"
import { Icon } from "../Icon"

export const Footer = () => {
  return (
    <S.Footer>
      <div className="content">
        <div className="column-stamps">
          <a href="https://techlegion.com.br/" target="_blank">
            <img className="tech-legion-logo" src={logoTechLegion} />
          </a>


        </div>
        <div className="column-social">
          <span>Nossas Redes</span>
          <div className="btn-group">
            <a href=""><Icon className='icon' icon="ri:linkedin-fill" /></a>
            <a href=""><Icon className='icon' icon="ic:baseline-tiktok" /></a>
            <a href=""><Icon className='icon' icon="ri:facebook-fill" /></a>
            <a href=""><Icon className='icon' icon="basil:instagram-solid" /></a>
          </div>
        </div>
        <div className="column-contact">
          <span>Contatos</span>
          <ul>
            <li><Icon className="icon" icon="icon-park-solid:local-two" />R. Teste Teste, 99 - Teste do Teste, Teste - Teste, 99999-999</li>
            <li><Icon className="icon" icon="ri:whatsapp-fill" />+99 99 99999-9999</li>
            <li><Icon className="icon" icon="ic:baseline-email" />Teste@teste.com.br</li>
          </ul>
        </div>
      </div>
    </S.Footer>
  )
}
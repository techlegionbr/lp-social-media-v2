import { Button } from "@/components/Button"
import * as S from "./styles"
import { Icon } from "@/components/Icon"
import { SelectLangs } from "@/components/SelectLangs"

export const HomeSection = () => {
  return (
    <S.HomeSection>
      <SelectLangs />
      <div className="content">
        <ul>
          <li>
            <Icon className="icon" icon="pepicons-print:persons" />
            <h4>Ampliação<br /> do Alcance</h4>
          </li>
          <li>
            <Icon className="icon" icon="pepicons-print:megaphone" />
            <h4>Engajamento<br /> do Público</h4>
          </li>
          <li>
            <Icon className="icon" icon="pepicons-print:raise-hand" />
            <h4>Construção de Autoridade<br /> e Credibilidade</h4>
          </li>
        </ul>

        <h1>Eleve Sua Marca ao <br /><strong>Topo Digital</strong>{" "}<Icon className="icon" icon="pepicons-print:checkmark-filled" /></h1>
        <h3>Estratégias Profissionais de Social Media<br /> para Transformar Sua Marca</h3>
        <div className="group-btns">
          <Button >Explorar Nossos Serviços</Button>
          {/* <Button>Entrar em Contato</Button> */}
        </div>
      </div>
    </S.HomeSection>
  )
}



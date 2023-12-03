
import { TitleSection } from "@/components/TitleSection"
import * as S from "./styles"
export const OnlinePresenceSection = () => {
  return (
    <S.OnlinePresenceSection>
      <div className="content">
        <TitleSection
          supTitle="Descubra Estratégias de Sucesso para Alavancar sua Marca nas Redes Sociais"
          title="Prepare-se para Elevar Sua Presença Online ao Próximo Nível"
        />
        <ul className="questions">
          <li>Destacar-se entre a concorrência online?</li>
          <li>Conectar-se autenticamente com sua audiência?</li>

          <li>Fortalecer a presença e a identidade da sua marca?</li>
          <li>Superar expectativas e liderar seu mercado?</li>
          <li className="marked">Pronto para impulsionar sua marca nas redes?</li>
          <li>Explorar novas tendências e estratégias inovadoras?</li>
          <li>Atrair e manter a atenção do seu público-alvo?</li>
        </ul>
      </div>
    </S.OnlinePresenceSection>
  )
}
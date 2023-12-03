import { TitleSection } from "@/components/TitleSection"
import * as S from "./styles"
import teamImage from "@/assets/images/services/top-view-multiethnic-team-working-computers-talking-with-each-other-while-sitting.jpg"
import { Icon } from "@/components/Icon"
import { Button } from "@/components/Button"

export const TeamAndExpertiseSection = () => {
  return (
    <S.TeamAndExpertiseSection>
      <div className="content">
        <TitleSection
          title={"Nossa Legião em Estratégias de Social Media"}
          supTitle="Conheça os Profissionais por Trás do Sucesso da Sua Marca Online"
        />
        <div className="grid-team">
          <img alt="Nosso Time" width={300} src={teamImage} />
          <ul>
            <li>
              <div className="square-left">
                <Icon icon="pepicons-print:persons" />
              </div>
              <article>
                <h3>Diversidade de Talentos</h3>
                <p>Uma equipe diversificada com habilidades especializadas em criação de conteúdo, análise de dados, design gráfico e estratégias de engajamento.</p>
              </article>
            </li>
            <li>
              <div className="square-left">
                <Icon icon="pepicons-print:trophy" />
              </div>
              <article>
                <h3>Experiência Comprovada</h3>
                <p>Profissionais com vasta experiência na indústria de Social Media, acumulando anos de conhecimento prático e expertise em campanhas bem-sucedidas.</p>
              </article>
            </li>
            <li>
              <div className="square-left">
                <Icon icon="pepicons-print:star-filled" />
              </div>
              <article>
                <h3>Inovação e Criatividade</h3>
                <p>Uma cultura focada em inovação, sempre buscando por novas tendências e ideias criativas para elevar a presença digital dos nossos clientes.</p>
              </article>
            </li>
            <li>
              <div className="square-left">
                <Icon icon="pepicons-print:handshake" />
              </div>
              <article>
                <h3>Compromisso com Resultados</h3>
                <p>Uma equipe comprometida em atingir objetivos, focada na entrega de resultados tangíveis e no crescimento contínuo das marcas que atendemos.</p>
              </article>
            </li>

          </ul>
        </div>
        <Button className="btn-know-more" fullWidth>Saber Mais </Button>
      </div>
    </S.TeamAndExpertiseSection>
  )
}
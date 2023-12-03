import { Icon } from "@/components/Icon"
import * as S from "./styles"
import { TitleSection } from "@/components/TitleSection"


export const ServiceSection = () => {
  return (
    <S.ServiceSection>
      <div className="content">
        <TitleSection
          title="Nossos Serviços de Social Media"
          supTitle="Potencializando Sua Marca através de Estratégias Inovadoras"
        />
        <div className="card-horizontal">
          <h2>Be smart and <strong>simplify</strong><br /> your <strong>trading</strong></h2>
          <article>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
            <button className="btn-arrow-right">Saber mais <Icon className="icon" icon="bx:right-arrow-alt" /></button>
          </article>
        </div>
        <ul className="cards-service">
          <li>
            <Icon className="icon-main" icon="pepicons-print:persons" />
            <h3>Gestão de Redes Sociais</h3>
            <p>Gerenciamento completo das redes sociais da sua empresa, incluindo criação de conteúdo, agendamento de postagens, interação com seguidores e análise de métricas.</p>
            <button className="btn-arrow-right">Saber mais <Icon className="icon" icon="bx:right-arrow-alt" /></button>
          </li>
          <li>
            <Icon className="icon-main" icon="pepicons-print:persons" />
            <h3>Campanhas Publicitárias</h3>
            <p>Criação e execução de campanhas estratégicas de publicidade nas redes sociais, direcionadas ao seu público-alvo para aumentar o engajamento e conversões.</p>
            <button className="btn-arrow-right">Saber mais <Icon className="icon" icon="bx:right-arrow-alt" /></button>
          </li>
          <li>
            <Icon className="icon-main" icon="pepicons-print:persons" />
            <h3>Gestão de Redes Sociais</h3>
            <p>Monitoramento contínuo do desempenho das suas redes sociais, com relatórios detalhados e insights para otimizar suas estratégias de Social Media.</p>
            <button className="btn-arrow-right">Saber mais <Icon className="icon" icon="bx:right-arrow-alt" /></button>
          </li>
        </ul>
      </div>
    </S.ServiceSection>
  )
}
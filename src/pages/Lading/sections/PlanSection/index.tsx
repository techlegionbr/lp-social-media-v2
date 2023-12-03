
import { TitleSection } from "@/components/TitleSection"
import * as S from "./styles"

import { Plan } from "./components/Plan"

export const PlanSection = () => {
  return (
    <S.PlanSection>
      <div className="content">
        <TitleSection
          title="Nossos Planos Personalizados para Você"
          supTitle="Escolha o Plano que Melhor se Adapta às Suas Necessidades e Objetivos de Social Media"
        />
        <div className="plans">
          <Plan
            plan={{
              icon: "pepicons-print:checkmark-filled",
              subTitle: "Plano Iniciante - Essencial",
              title: "Plano Iniciante",
              desc: [
                <><strong>Gestão de uma plataforma</strong> de mídia social</>,
                <><strong>5 postagens</strong> semanais</>,
                <><strong>Relatório mensal</strong> de desempenho</>,
                <><strong>Suporte ao cliente</strong> por e-mail</>

              ]
            }}
          />
          <Plan
            plan={{
              icon: "pepicons-print:comet",
              subTitle: "Plano Intermediário - Avançado",
              title: "Plano Intermediário",
              desc: [
                <><strong>Gestão de duas plataformas</strong> de mídia social</>,
                <><strong>10 postagens</strong> semanais</>,
                <><strong>Análise detalhada de métricas e relatório</strong> quinzenal de desempenho</>,
                <><strong>Resposta a comentários e interação</strong> com seguidores</>,

                <><strong>Suporte ao cliente</strong> por e-mail e chat</>

              ]
            }}
          />
          <Plan
            golder
            plan={{
              icon: "pepicons-print:crown",
              subTitle: "Plano Premium - Personalizado",
              title: "Plano Premium",
              desc: [
                <><strong>Gestão de múltiplas plataformas</strong> de mídia social</>,
                <><strong>Estratégia personalizada</strong> de conteúdo e publicações diárias</>,
                <><strong>Análise avançada de métricas com relatório semanal</strong> de desempenho</>,
                <><strong>Interação proativa</strong> com a comunidade online</>,
                <><strong>Suporte ao cliente 24/7</strong> e reuniões mensais de estratégia</>



              ]
            }}
          />

        </div>
      </div>
    </S.PlanSection>
  )
}
import { Icon } from "@/components/Icon"
import * as S from "../styles"
import { Button } from "@/components/Button"


interface PlanProps {
  plan: {
    title: string,
    subTitle: string,
    icon: string,
    desc: Array<React.ReactNode | string>
  },
  golder?: boolean
}

export const Plan = ({ plan: { icon, subTitle, title, desc }, golder = false }: PlanProps) => {
  return (
    <S.Plan golder={golder}>
      <div className="plan-header">
        <Icon className="icon" icon="bx:chevron-left" />
        <span>{title}</span>
        {golder && <Icon className="icon-verify" icon="pepicons-pop:checkmark-filled" />}
      </div>
      <div className="plan-sub-header">
        <div className="plan-picture">
          <div className="plan-picture-content">
            <Icon className="icon" icon={icon} />
          </div>
        </div>
        <article>
          <span>{subTitle}  <Icon className="icon" icon="bi:three-dots" /></span>
          <div className="plan-btns">
            <button>
              Seguir

            </button>
            <button>Mensagens</button>
          </div>
        </article>
      </div>
      <ul className="plan-desc">
        {
          desc.map((d, index) => (
            <li key={`list-plan-des-${index}`}>{d}</li>
          ))
        }

      </ul>
      <ul className="banner-ext-infos">
        <li>
          <span><strong>24/7</strong></span>
          <span>Atendimento ao Cliente</span>
        </li>
        <li>
          <span><strong>24/7</strong></span>
          <span>Atendimento ao Cliente</span>
        </li>
        <li>
          <span><strong>24/7</strong></span>
          <span>Atendimento ao Cliente</span>
        </li>
      </ul>
      <div className="btn-container">
        <Button shine={false}>Saber Mais</Button>
      </div>
    </S.Plan>
  )
}
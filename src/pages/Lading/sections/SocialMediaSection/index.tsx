
import { Icon } from "@/components/Icon"
import * as S from "./styles"
export const SocialMediaSection = () => {
  return (
    <S.SocialMediaSection>
      <ul>
        <li>
          <Icon className="icon" icon="simple-icons:hootsuite" />
          Hootsuite
        </li>
        <li>
          <Icon className="icon" icon="simple-icons:buffer" />
          Buffer
        </li>
        <li>
          <Icon className="icon" icon="simple-icons:canva" />
          Canva
        </li>
        <li>
          <Icon className="icon" icon="simple-icons:googleanalytics" />
          Google Analytics
        </li>
        <li>
          <Icon className="icon" icon="leaf" />
          Sprout Social
        </li>
        <li>
          <Icon className="icon" icon="vaadin:signal" />
          BuzzSumo
        </li>
      </ul>
    </S.SocialMediaSection>
  )
}
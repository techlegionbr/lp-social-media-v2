import { TitleSection } from "@/components/TitleSection"
import * as S from "./styles"

import { Post } from "./components/Post"
export const BeneftSection = () => {

  return (
    <S.BeneftSection >
      <div className="content">
        <TitleSection
          title="Transforme sua Marca com o Poder das Redes Sociais"
          supTitle="Descubra os Principais Benefícios que o Social Media Pode Oferecer"
        />
        <div className="mural">
          <div className="mural-col">
            <Post
              post={{
                description: "teste",
                legend: "teste",
                title: "teste"
              }}
            />
            <Post
              post={{
                description: "teste",
                legend: "teste",
                title: "teste"
              }}
            />
          </div>
          <div className="mural-col">
            <Post
              post={{
                description: "teste",
                legend: "teste",
                title: "teste"
              }}
            />
            <Post
              post={{
                description: "teste",
                legend: "teste",
                title: "teste"
              }}
            />
          </div>
        </div>
      </div>
    </S.BeneftSection>
  )
}
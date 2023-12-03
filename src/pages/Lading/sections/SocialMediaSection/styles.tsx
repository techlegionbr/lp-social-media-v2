import styled from "styled-components";

export const SocialMediaSection = styled.section`
  width: 100%;
  padding: 1rem;
  background-color: #300157;
  ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    li{
      display: flex;
      align-items: center;
      gap: .4rem;
      font-size: ${({ theme }) => theme.font.size.headings.h3[0]};
      color: ${({ theme }) => theme.colors.light.main};
      cursor: default;
    }
  }
`
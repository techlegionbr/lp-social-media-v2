import { applyAnimationSlideBottom } from "@/key-frames/presence";
import styled from "styled-components";


export const OptionsLangs = styled.ul`
  position: absolute;
  top: calc(100% + .5rem);
  left: 0;
  background-color: ${({ theme }) => theme.colors.primary.light};
  border-radius: .9rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.third.light};
  overflow: hidden;
  z-index: 1;
  ${applyAnimationSlideBottom()};
  transition: .2s ease;

  li{
    padding: .5rem 1rem;
    cursor: pointer;
    transition: .2s ease;
    font-size: ${({ theme }) => theme.font.size.paragraphs.xxsm[0]};
    display: flex;
    gap: .3rem;
    justify-content: center;
    align-items: center;
    opacity: .7;
    &:hover{
      background: ${({ theme }) => theme.colors.secondary.main};
      opacity: 1;
    }
  }
`
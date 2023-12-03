import styled from "styled-components"

interface ISelectLangsProps {
  active: boolean
}

export const SelectLangs = styled.div<ISelectLangsProps>`
  position: absolute;
  right: 3rem;
  top: 1rem;
  button{
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: ${({ theme }) => theme.font.size.paragraphs.xxsm[0]};
    background-color: ${({ theme }) => theme.colors.primary.light};
    border: 1px solid ${({ theme }) => theme.colors.third.light};
    padding: .5rem 1.7rem;
    border-radius: 2rem;
    opacity: ${({ active }) => active ? 1 : .7};
    transition: .2s ease;
    z-index: 5;
    &:hover{
      opacity: 1;
    }
    .icon-arrow{
      font-size: 1.1rem;
    }
    .icon-lang{
      font-size: .8rem;
    }
    .icon-lang{
      color: ${({ theme }) => theme.colors.third.main}
    }
  }
`
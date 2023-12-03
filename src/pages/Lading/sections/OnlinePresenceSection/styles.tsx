import styled from "styled-components";


export const OnlinePresenceSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 1rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
  .content{
    width: ${({ theme }) => theme.limits.content};
    .questions{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      li{
        padding: 1rem;
        border-radius: .6rem;
        background-color: #250a3d;
        opacity: .8;
      }
      li.marked{
        cursor: pointer;
        opacity: 1;
        color: #250a3d;
        transition: .1s linear;
        background-color: ${({ theme }) => theme.colors.third.main};
        &:hover{
          transform: scale(1.05);
        }
      }
    }
  }
`
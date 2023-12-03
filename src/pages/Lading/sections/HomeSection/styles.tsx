import styled from "styled-components";


export const HomeSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem 4rem 1rem;
  .content{
    width: ${({ theme }) => theme.limits.content};
    display: flex;
    flex-direction: column;
    align-items: center;

    
    ul{
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      li{
        display: flex;
        align-items: center;
        gap: .5rem;
        .icon{
          font-size: 1.4rem;
        }
      }
      li:nth-child(1){
        color: ${({ theme }) => theme.colors.third.main}
      }
      li:nth-child(2){
        color: ${({ theme }) => theme.colors.success.main}
      }
      li:nth-child(3){
        color: ${({ theme }) => theme.colors.alert.main}
      }
    }
    h1 {
      text-align: center;
      margin-top: 4rem;
      font-size: calc(${({ theme }) => theme.font.size.headings.h1[0]} + .8rem);
      line-height: calc(${({ theme }) => theme.font.size.headings.h1[1]} + .8rem);
      strong{
        color: ${({ theme }) => theme.colors.third.main}
      }
      .icon{
      color: ${({ theme }) => theme.colors.third.main}
    }
    }
    h3{
      text-align: center;
      margin-top: 2rem;
      strong{
        color: ${({ theme }) => theme.colors.third.main}
      }
    }
    .group-btns{
      margin-top: 4rem;
      display: flex;
      gap: 1rem;
    }
  }
`
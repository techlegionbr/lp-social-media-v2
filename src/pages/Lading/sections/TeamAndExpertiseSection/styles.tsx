import styled from "styled-components";

export const TeamAndExpertiseSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 1rem;
  background-color: ${({ theme }) => theme.colors.primary.main};
  .content{
    width: ${({ theme }) => theme.limits.content};
    .btn-know-more{
      margin-top: 3rem;
    }
    .grid-team{
      display: flex;
      align-items: flex-start;
      gap: 2rem;
      flex-wrap: wrap;
      img{
        width: 300px;
        height: 500px;
        border-radius: .4rem;
        object-fit: cover;
        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          width: 100%;
          height: 300px;
        }
      }
      ul{
        width: calc(100% - 300px - 2rem);
        
        display: flex;
        min-height: 500px;
        gap: 1rem;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          width: 100%;
        }
        li:nth-child(1) .square-left{
          color: ${({ theme }) => theme.colors.third.main}
        }
        li:nth-child(2) .square-left{
          color: ${({ theme }) => theme.colors.alert.main}
        }
        li:nth-child(3) .square-left{
          color: ${({ theme }) => theme.colors.danger.main}
        }
        li:nth-child(4) .square-left{
          color: ${({ theme }) => theme.colors.success.main}
        }
        li{
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          .square-left{
            flex: none;
            width: 90px;
            height: 90px;
            background-color: #260e3b;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: .3rem;
            font-size: 3rem;
          }
          article{
            p{
              margin-top: .5rem;
            }
          }
        }

      }
    }
  }
`
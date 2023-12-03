import styled from "styled-components";


export const ServiceSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.light};
  padding: 100px 1rem;
  display: flex;
  justify-content: center;
  .content{
    width: ${({ theme }) => theme.limits.content};
    .btn-arrow-right{
      display: flex;
      align-items: center;
      gap: .3rem;
      margin-top: 1rem;
      opacity: .8;
      text-shadow: 0px 0px 30px ${({ theme }) => theme.colors.third.main};
      color: ${({ theme }) => theme.colors.third.main};
      transition: .2s;
      &:hover{
        opacity: 1;
        .icon{
        transform: translateX(10px);
      }
      }
      .icon{
        font-size: 1.3rem;
        transition: .2s;
      }
    }
    .cards-service{
      margin-top: 1rem;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      li{
        border-radius: .8rem;
        background-color: #260d3b;
        padding: 1.5rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
  
        .icon-main{
          font-size: 4rem;
        }
        .btn-arrow-right{
          margin-top: 2rem;
        }
        h3{
          margin-top: 2rem;
          position: relative;
          &::after{
            content: "";
            position: absolute;
            bottom: -1rem;
            left: 0;
            width: 20%;
            height: 3px;
          }
        }
        p{
          margin-top: 2rem;
        }
       
      }
      li:nth-child(1){
        .btn-arrow-right{
          color: ${({ theme }) => theme.colors.third.main};
        text-shadow: 0px 0px 30px ${({ theme }) => theme.colors.third.main};
        }
        h3::after{
          background-color: ${({ theme }) => theme.colors.third.main}
        }
        .icon-main{
          color: ${({ theme }) => theme.colors.third.main}
        }
      }
      li:nth-child(2){
        .btn-arrow-right{
          color: ${({ theme }) => theme.colors.alert.main};
        text-shadow: 0px 0px 30px ${({ theme }) => theme.colors.alert.main};
        }
        h3::after{
          background-color: ${({ theme }) => theme.colors.alert.main}
        }
        .icon-main{
          color: ${({ theme }) => theme.colors.alert.main}
        }
        
      }
      li:nth-child(3){

        .btn-arrow-right{
          color: ${({ theme }) => theme.colors.danger.main};
        text-shadow: 0px 0px 30px ${({ theme }) => theme.colors.danger.main};
        }
        h3::after{
          background-color: ${({ theme }) => theme.colors.danger.main}
        }
        .icon-main{
          color: ${({ theme }) => theme.colors.danger.main}
        }
      }
    }
    .card-horizontal{
      width: 100%;
      border-radius: .8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #260d3b;
      padding: 1.5rem 2rem;
      
      gap: 1rem;
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-wrap: wrap;
      }
      h2{
        width: 60%;
        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          width: 100%;
        }
      }
      article{
        width: 40%;
        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          width: 100%;
        }
      }

      h2 strong{
        color: ${({ theme }) => theme.colors.third.main}
      }
      
    }
  }
`
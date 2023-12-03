import styled from "styled-components";


export const PlanSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 1rem;
  background-color: ${({ theme }) => theme.colors.primary.light};

  .content{
    width: ${({ theme }) => theme.limits.content};
    .plans{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: .5rem;
    }
  }
`

interface PlanProps {
  golder: boolean
}

export const Plan = styled.div<PlanProps>`
transition: .1s ease-in;
cursor: default;
border-radius: .4rem;
background-color: ${({ theme }) => theme.colors.primary.main};
  border: 1px solid ${({ theme, golder }) => golder ? theme.colors.third.main : "#ffffff30"};
  /* &:hover{
    transform: scale(1.09);
    z-index: 10;
  } */
  span, li{
        font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
        line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
      }
  li{
    font-family:  ${({ theme }) => theme.font.family.Roboto};
  }
  .plan-sub-header{
    padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    article{
      span{
        display: flex;
        align-items: center;
        gap: .5rem;
      }
      .plan-btns{
        margin-top: .5rem;
        display: flex;
        align-items: center;
        gap: .4rem;
        button:nth-child(1){
          background-color: ${({ theme }) => theme.colors.third.main};
          color: ${({ theme }) => theme.colors.primary.main};
          transition: .2s;
          padding: .3rem .8rem;
          &:hover{
            transform: scale(1.05);
          }
        }
        button{
          background-color: #2f2935;
          padding: .2rem .7rem;
          gap: .4rem;
          border-radius: .3rem;
          display: flex;
          align-items: center;
          font-size: ${({ theme }) => theme.font.size.paragraphs.xxsm[0]};
          line-height: ${({ theme }) => theme.font.size.paragraphs.xxsm[1]};
        }
      }
    }
    .plan-picture{
      border: 1px solid ${({ theme, golder }) => golder ? theme.colors.third.main : "#ffffff30"};
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      .plan-picture-content{
        flex: none;
        width: 50px;
        height: 50px;
        background-color: #260841;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon{
          color:${({ golder, theme }) => golder ? theme.colors.third.main : "inherit"};
          font-size: 2rem;
        }
      }
    }
  }
  .plan-header{
    width: 100%;
    padding: .6rem 1rem;
    display: flex;
    justify-content: center;
    position: relative;
    border-bottom: 1px solid ${({ theme, golder }) => golder ? theme.colors.third.main : "#ffffff30"};
    align-items: center;
    gap: .4rem;
    .icon-verify{
      color: ${({ theme }) => theme.colors.third.main}
    }
    .icon{  
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 1rem;
      font-size: 2rem;
    }
  }
  .plan-desc{
    width: 100%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem 1rem 1rem 2rem;
    li{
      list-style: disc;
      
    }
  }
  .banner-ext-infos{
    border-top: 1px solid ${({ theme, golder }) => golder ? theme.colors.third.main : "#ffffff30"};
    border-bottom: 1px solid ${({ theme, golder }) => golder ? theme.colors.third.main : "#ffffff30"};
    padding: 1rem 1rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    li{
      text-align: center;
      span:nth-child(2){
        font-size: .75rem;
        line-height: .8rem;
        opacity: .8;
      }
      span{
        display: block;
      }
    }
  }
  .btn-container{
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
  }
`
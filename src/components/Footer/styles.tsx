import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 1rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary.main};
  .content{
    width: ${({ theme }) => theme.limits.content};
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    span{
      font-weight: bold;
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.third.main};
      display: block;
      margin-bottom: 1rem;
    }
    .column-stamps{
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .tech-legion-logo{
        width: 200px;
      }
      .kommo-stamp{
        width: 140px;
      }
    }
    .column-social{
      flex: 1;
      .btn-group{
        display: flex;
        gap: .5rem;
        a{
          all: unset;
          cursor: pointer;
          font-size: 1.2rem;
          flex: none;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          background-color: ${({ theme }) => theme.colors.third.main};
          .icon{
            color: ${({ theme }) => theme.colors.primary.main};
          }
        }
      }
    }
    .column-contact{
      flex: 1;
      ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .4rem;
        li{
          display: flex;
          align-items: center;
          gap: .3rem;
          font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
          line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
          opacity: .8;

        }
      }
    }
  }
`
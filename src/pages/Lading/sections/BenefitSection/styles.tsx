import styled from "styled-components";

export const BeneftSection = styled.section`
  width: 100%;
  padding: 100px 1rem;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary.main};
  justify-content: center;
  .content {
    width: ${({ theme }) => theme.limits.content};
    .mural {
      width: 100%;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

      .mural-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
    }
  }
`;

export const Post = styled.div`
  width: 100%;
  height: 400px;
  /* background-color: #24063d; */
  border-radius: 0.3rem;

  .post-content {
    border-radius: 0.3rem;
    width: 100%;
    height: 75%;
    border: 1px solid #ffffff30;
    padding: 2rem;
  }
  .post-comments {
    width: 100%;
    height: 10%;
    padding: 0 1rem;
    span {
      display: block;
      color: #ffffffca;
      font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
      line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
      a, a strong{
        color: ${({ theme }) => theme.colors.third.main};
        text-decoration: none;

      }
      strong {
        opacity: 1;
        color: ${({ theme }) => theme.colors.light.main};
      }
    }
  }
  .post-actions {
    width: 100%;
    height: 15%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .controls-left button:nth-child(1) {
      .icon {
        color: ${({ theme }) => theme.colors.danger.main};
      }
    }
    .controls-left,
    .controls-right {
      display: flex;
      align-items: center;
      gap: 0.6rem;

      button {
        transition: 0.1s ease-in;
        &:hover {
          transform: scale(1.1);
        }
        .icon {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

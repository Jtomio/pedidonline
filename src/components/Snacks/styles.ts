import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 100vh;
  padding: 5px;


  @media screen and (max-width: 968px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: auto;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
  }

  img {
    align-items: center;
    text-align: center;
    width: 558px;
    height: 158px;
    border-radius: 6px;
    margin-left: 35%;

    transition: 0.3s;
    transform: 0.3s;

    &:hover {
      transform: translateX(0) scale(1.12);
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.md};
    justify-content: center;
    text-align: center;
    line-height: 1.25;
    margin: 1rem 0;
  }

  strong {
    font-size: 2.75rem;
  }
`

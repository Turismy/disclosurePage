import styled from "styled-components";

export const SectionStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  height: 80%;
  max-width: 1100px;
  width: 95%;

  box-shadow: 10px 10px 40px gray;
  border-radius: 10px;

  .aside {
    background-color: orange;
    border-radius: 10px 0 0 10px;
  }
  div {
    width: 100%;
    height: 100%;

    gap: 20px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    figure {
      width: 400px;
      height: 400px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    h1 {
      font-size: 40px;
      font-weight: bold;
    }
    h2 {
      font-size: 30px;
      line-height: 40px;
      color: white;
      text-align: center;
    }

    .form {
      width: 100%;
      height: 80vh;
      border: none;
    }
  }
  .form-container {
    overflow-x: hidden;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 10px 0 10px;
  }
  @media (max-width: 1000px) {
    .aside {
      display: none;
    }
    .form {
    }
  }
`;

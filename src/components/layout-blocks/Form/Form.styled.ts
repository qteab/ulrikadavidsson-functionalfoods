import { MainInner } from "@/styles/global";
import styled from "styled-components";

const Inner = styled(MainInner)`
  .navbar {
    border-bottom: 1px solid #dcdcdc;
  }

  .question-container {
    width: 257px;
    margin: 50px auto;
    text-align: center;
  }

  .question-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .question-title {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkGreen};
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .question-label {
    color: var(--dark-color);
    margin-bottom: 4px;
  }

  .email-input {
    width: 250px;
    border: 1px solid ${({ theme }) => theme.colors.darkGreen};
    border-radius: 10px;
    height: 32px;
    font-family: Montserrat;
    padding-left: 7px;
    margin-bottom: 20px;
  }

  .question-input {
    width: 243px;
    border: 1px solid ${({ theme }) => theme.colors.darkGreen};
    border-radius: 10px;
    font-family: Montserrat;
    padding: 10px 7px 80px 7px;
    margin-bottom: 20px;
    resize: none;
  }

  .question-button-container {
    width: 100%;
  }

  .question-button {
    width: 111px;
    height: 43px;
    font-weight: 700;
    font-family: Montserrat;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    border: none;
    border-radius: 25px;
    font-size: 16px;
    color: #fff;
    text-transform: uppercase;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .question-button:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.darkGreen};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  }

  .status-text {
    color: var(--dark-color);
    margin-top: 30px;
    font-weight: 600;
  }

  @media (min-width: 745px) {
    .question-container {
      width: 321px;
      margin: 70px auto;
    }

    .question-title {
      font-size: 20px;
    }

    .question-label {
      font-size: 20px;
    }

    .email-input {
      width: 314px;
      font-size: 16px;
    }

    .question-input {
      width: 307px;
      margin-bottom: 27px;
      font-size: 16px;
    }

    .status-text {
      font-size: 20px;
      text-align: center;
    }
  }

  @media (min-width: 1024px) {
    .question-container {
      width: 385px;
      margin: 90px auto;
    }

    .question-title {
      font-size: 24px;
    }

    .question-label {
      font-size: 24px;
    }

    .email-input {
      width: 378px;
      height: 45px;
    }

    .question-input {
      width: 371px;
      padding-bottom: 100px;
    }

    .status-text {
      font-size: 24px;
      text-align: center;
    }
  }
`;

const S = {
  Inner,
};

export default S;

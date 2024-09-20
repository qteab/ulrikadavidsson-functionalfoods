import { MainInner } from "@/styles/global";
import styled from "styled-components";

type HeaderProps = {};

const Header = styled.header<HeaderProps>`
  width: 100%;

  .logo-container {
    padding: 25px 20px;
  }

  .logo {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGreen};
  }

  .newsletter-container {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    padding: 0 20px;
    min-width: 300px;

    @media (min-width: 1250px) {
      width: 35%;
    }
  }

  .newsletter-form {
    position: relative;
    width: 280px;
    padding: 20px 0;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .newsletter-input {
    width: 138px;
    border-radius: 20px;
    border: none;
    padding: 10px 0 10px 14px;
    z-index: 2;
    font-family: Montserrat;
  }

  .newsletter-button {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    border: none;
    width: 192px;
    padding: 10px 6px 10px 60px;
    border-radius: 20px;
    position: absolute;
    right: 5px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    z-index: 1;
    font-family: Montserrat;
  }

  .newsletter-button:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .success-msg {
    color: #fff;
    font-size: 18px;
    text-align: center;
    height: 100%;
    padding: 33px 0;
    display: flex;
    align-items: center;
  }

  @media (min-width: 745px) {
    .navbar {
      display: flex;
      align-items: center;
    }

    .logo-container {
      padding: 25px 24px;
    }

    .logo {
      font-size: 24px;
    }

    .newsletter-container {
      margin-left: auto;
    }

    .newsletter-form {
      width: 382px;
    }

    .newsletter-input {
      width: 185px;
      padding: 12px 0 12px 16px;
      top: 20px;
      font-size: 16px;
      left: 15px;
    }

    .newsletter-button {
      width: 197px;
      padding: 12px 6px 12px 44px;
      right: 30px;
      top: 20px;
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    .logo-container {
      padding-left: 32px;
    }

    .logo {
      font-size: 32px;
    }

    .newsletter-container {
      padding: 0 50px;
    }

    .newsletter-form {
      width: 445px;
    }

    .newsletter-input {
      width: 206px;
      padding: 16px 0 16px 16px;
      font-size: 16px;
    }

    .newsletter-button {
      width: 206px;
      padding: 16px 6px 16px 30px;
      right: 65px;
    }
  }
`;

const Inner = styled(MainInner)`
  width: 100%;
`;

const Error = styled.span`
  color: ${({ theme }) => theme.colors.darkGreen};
  font-size: 12px;
`;

const S = {
  Header,
  Inner,
  Error,
};

export default S;

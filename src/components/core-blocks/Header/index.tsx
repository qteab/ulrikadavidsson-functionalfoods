import * as React from "react";

import S from "./Header.styled";
import useHeaderData from "./useHeaderData";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  formName: string;
  email: string;
};

type FormState = {
  isLoading: boolean;
  error?: string;
  data: FormData;
  success: boolean;
};

const emptyForm = (): FormData => ({
  formName: "Nyhetsbrev",
  email: "",
});

const emptyFormState = (): FormState => ({
  isLoading: false,
  data: emptyForm(),
  success: false,
});

const Header = () => {
  const [formState, setFormState] = React.useState(emptyFormState());
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const data = useHeaderData();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // update form data
  const updateFormProperty = <K extends keyof FormData>(
    property: K,
    value: FormData[K]
  ): void => {
    setFormState((state: FormState) => ({
      ...state,
      data: {
        ...state.data,
        [property]: value,
      },
    }));
  };

  const submitForm = handleSubmit(() => {
    setFormState((state) => ({
      ...state,
      isLoading: true,
    }));

    axios
      .post(process.env.GATSBY_CONTACT_URL || "", {
        ...formState.data,
      })
      .then((res) => {
        if (!res.data.success) {
          setFormState((state) => ({
            ...state,
            isLoading: false,
            error: res.data.error_msg,
          }));
        } else {
          setFormState((state) => ({
            ...state,
            isLoading: false,
            success: true,
          }));
        }
      });
  });

  return (
    <S.Header>
      <nav className="navbar">
        <div className="logo-container">
          <h1 className="logo">Functional Foods</h1>
        </div>
        {formState.success ? (
          <div className="newsletter-container">
            <p className="success-msg">Tack för din prenumeration!</p>
          </div>
        ) : (
          <div className="newsletter-container">
            <form onSubmit={submitForm} className="newsletter-form">
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Fyll i en giltig e-postadress",
                  },
                })}
                className="newsletter-input"
                type="email"
                placeholder="Email"
                value={formState.data.email}
                onChange={(e) => updateFormProperty("email", e.target.value)}
              />
              <button className="newsletter-button" type="submit">
                Prenumerera
              </button>
            </form>
          </div>
        )}
      </nav>
    </S.Header>
  );
};

export default Header;

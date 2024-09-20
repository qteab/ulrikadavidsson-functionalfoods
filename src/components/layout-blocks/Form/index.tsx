import React from "react";
import emailjs from "emailjs-com";
import S from "./Form.styled";
import axios from "axios";
import { useForm } from "react-hook-form";

export interface FormProps {}

type FormData = {
  formName: string;
  email: string;
  question: string;
};

type FormState = {
  isLoading: boolean;
  error?: string;
  data: FormData;
  success: boolean;
};

const emptyForm = (): FormData => ({
  formName: "Fråga",
  email: "",
  question: "",
});

const emptyFormState = (): FormState => ({
  isLoading: false,
  data: emptyForm(),
  success: false,
});

const Form: React.FC<FormProps> = () => {
  const [formState, setFormState] = React.useState(emptyFormState());

  const {
    register,
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

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Skicka förfrågan med EmailJS
  //     emailjs
  //       .send("service_axej04s", "template_5hvul4i", {
  //         email,
  //         question,
  //       })
  //       .then((response) => {
  //         setStatus("Frågan skickad till Ulrika. Tack!");
  //         setEmail("");
  //         setQuestion("");
  //       })
  //       .catch((error) => {
  //         setStatus("Ett fel inträffade, vänligen försök igen.");
  //         console.error("EmailJs error:", error);
  //       });
  //   };

  return (
    <S.Inner>
      <div className="question-container">
        <h1 className="question-title">Ställ din fråga till Ulrika</h1>
        <form className="question-form" onSubmit={submitForm}>
          <label htmlFor="email" className="question-label">
            Mejladress:
          </label>
          <input
            className="email-input"
            type="email"
            id="email"
            value={formState.data.email}
            {...register("email", {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Fyll i en giltig e-postadress",
              },
            })}
            onChange={(e) => updateFormProperty("email", e.target.value)}
          />
          <label htmlFor="question" className="question-label">
            Ställ din fråga:
          </label>
          <textarea
            className="question-input"
            id="question"
            value={formState.data.question}
            {...register("question", { required: true })}
            onChange={(e) => updateFormProperty("question", e.target.value)}
          />
          <div className="question-button-container">
            <button className="question-button" type="submit">
              Skicka
            </button>
          </div>
          {formState.isLoading && <p className="status-text">Skickar...</p>}
          {formState.success && (
            <p className="status-text">Frågan skickad till Ulrika. Tack!</p>
          )}
          {formState.error && (
            <p className="status-text">
              Ett fel inträffade, vänligen försök igen.
            </p>
          )}
        </form>
      </div>
    </S.Inner>
  );
};

export default Form;

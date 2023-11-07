import { useState } from "react";
import { styled } from "styled-components";
const TestDiv = styled.div`
  background-color: #3c3a3a;
  border-radius: 0.25rem;
`;
const ControlsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;
import CustomInputs from "./CustomInput";
export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <TestDiv>
        <ControlsDiv>
          <CustomInputs
            label="Email"
            $invalid={emailNotValid}
            type="email"
            //className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />

          <CustomInputs
            label="Password"
            $invalid={passwordNotValid}
            type="password"
            //className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </ControlsDiv>
        <div className="actions">
          <button type="button" className="text-button">
            Create a new account
          </button>
          <button className="button" onClick={handleLogin}>
            Sign In
          </button>
        </div>
      </TestDiv>
    </div>
  );
}

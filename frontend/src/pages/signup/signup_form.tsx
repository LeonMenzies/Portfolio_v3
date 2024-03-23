import styled from "styled-components";
import { SignUpRequestT } from "types/ApiTypes";
import Text from "components/input/text";
import Button from "components/input/button";
import Error from "components/input/error";
import { useNavigate } from "react-router-dom";

interface SignUpFormProps {
  user: SignUpRequestT;
  handleFieldChange: (fieldName: keyof SignUpRequestT, value: string) => void;
  handleSignUp: () => void;
  loading: boolean;
  errorMessage: string;
}

export function SignUpForm({ user, handleFieldChange, handleSignUp, loading, errorMessage }: SignUpFormProps) {
  const navigate = useNavigate();

  return (
    <CenteredContainer>
      <StyledSignUpForm className="window">
        <Text
          title={"First Name"}
          type={"text"}
          placeholder={"First Name"}
          value={user.firstName}
          required={true}
          id={"signup-form-firstName"}
          onChange={(e: any) => handleFieldChange("firstName", e.target.value)}
        />

        <Text
          title={"Last Name"}
          type={"text"}
          placeholder={"Last Name"}
          value={user.firstName}
          required={true}
          id={"signup-form-lastName"}
          onChange={(e: any) => handleFieldChange("lastName", e.target.value)}
        />

        <Text title={"Email"} type={"email"} placeholder={"Email"} value={user.email} required={true} id={"SignUp-form-email"} onChange={(e: any) => handleFieldChange("email", e.target.value)} />

        <Text
          title={"Password"}
          type={"password"}
          placeholder={"Password"}
          value={user.password}
          required={true}
          id={"SignUp-form-password"}
          onChange={(e: any) => handleFieldChange("password", e.target.value)}
        />
        <div className={"button-container"}>
          <Button text={"Sign Up"} onClick={handleSignUp} disabled={loading} loading={loading} />
          <Button text={"Login"} onClick={() => navigate("/login")} />
        </div>

        <Error errorMessage={errorMessage} />
      </StyledSignUpForm>
    </CenteredContainer>
  );
}

export default SignUpForm;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;
  background-color: #c0c0c0;
  padding: 20px;
  width: 300px;
`;

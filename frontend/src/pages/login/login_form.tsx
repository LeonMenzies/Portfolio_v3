import styled from "styled-components";
import { LoginRequestT } from "types/ApiTypes";
import Text from "components/input/text";
import Button from "components/input/button";
import Error from "components/input/error";
import logo from "assets/images/logo.png";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  user: LoginRequestT;
  handleFieldChange: (fieldName: keyof LoginRequestT, value: string) => void;
  handleLogin: () => void;
  loading: boolean;
  errorMessage: string;
}

export function LoginForm({ user, handleFieldChange, handleLogin, loading, errorMessage }: LoginFormProps) {
  const navigate = useNavigate();

  return (
    <CenteredContainer>
      <StyledLoginForm className="window">
        <img src={logo} alt="logo" />

        <Text title={"Email"} type={"email"} placeholder={"Email"} value={user.email} required={true} id={"login-form-email"} onChange={(e: any) => handleFieldChange("email", e.target.value)} />

        <Text
          title={"Password"}
          type={"password"}
          placeholder={"Password"}
          value={user.password}
          required={true}
          id={"login-form-password"}
          onChange={(e: any) => handleFieldChange("password", e.target.value)}
        />
        <div className={"button-container"}>
          <Button text={"Login"} onClick={handleLogin} disabled={loading} loading={loading} />
          <Button text={"Sign Up"} onClick={() => navigate("/signup")} />
        </div>
        <Error errorMessage={errorMessage} />
      </StyledLoginForm>
    </CenteredContainer>
  );
}

export default LoginForm;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;
  background-color: #c0c0c0;
  padding: 20px;
  width: 300px;

  img {
    max-width: 70%;
    height: auto;
    padding-bottom: 5px;
  }
`;

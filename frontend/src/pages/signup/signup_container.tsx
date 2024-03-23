import { useEffect, useState } from "react";
import styled from "styled-components";
import SignUpForm from "./signup_form";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../../recoil/user";
import { useNavigate } from "react-router-dom";
import usePostApi from "hooks/usePostApi";
import { SignUpRequestT } from "types/ApiTypes";

export interface SignUpContainerProps {}

export function SignUpContainer(props: SignUpContainerProps) {
  const setUserAtom = useSetRecoilState(userAtom);
  const navigate = useNavigate();
  const [postSignUpResponse, postSignUpLoading, postSignUp] = usePostApi<SignUpRequestT, any>("/signup");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [user, setUser] = useState<SignUpRequestT>({
    firstName: "Leon",
    lastName: "Menzies",
    email: "leon.menzies@mm.com",
    password: "Testing123!",
  });

  useEffect(() => {
    if (postSignUpResponse.success && postSignUpResponse.data) {
      setUserAtom({
        loggedIn: true,
        id: postSignUpResponse.data.id,
        firstName: postSignUpResponse.data.firstName,
        lastName: postSignUpResponse.data.lastName,
        email: postSignUpResponse.data.email,
      });
      navigate("/dashboard");
    } else {
      setErrorMessage(postSignUpResponse.errorMessage);
    }
  }, [postSignUpResponse, setUserAtom, navigate]);

  const handleFieldChange = (fieldName: keyof typeof user, value: string) => {
    setUser({
      ...user,
      [fieldName]: value,
    });
  };

  const handleSignUp = async () => {
    postSignUp(user);
  };

  return (
    <StyledSignUpContainer>
      <SignUpForm user={user} handleFieldChange={handleFieldChange} handleSignUp={handleSignUp} loading={postSignUpLoading} errorMessage={errorMessage} />
    </StyledSignUpContainer>
  );
}

export default SignUpContainer;

const StyledSignUpContainer = styled.div`
  margin-right: 50px;
`;

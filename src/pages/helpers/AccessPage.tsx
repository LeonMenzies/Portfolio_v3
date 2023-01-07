import styled from "styled-components";
import Button from "components/Button";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessAtom } from "recoil/access";
import { useNavigate } from "react-router-dom";

const StyledAccessPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5rem;
  padding: 1rem;

  background: ${({ theme }) => theme.clear};
  color: ${({ theme }) => theme.textPrimary};
`;

const AccessPage = () => {
  const [accessToken, setAccessToken] = useState("");
  const [access, setAccess] = useRecoilState(accessAtom);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (access.accessTokens.includes(accessToken)) {
      setAccess((e: any) => {
        let tmp = { ...e };
        tmp.accessAllowed = true;
        return tmp;
      });

      navigate("/");
    }
  };

  return (
    <StyledAccessPage>
      <div className="access-text">Enter Access Token</div>
      <input onChange={(e) => setAccessToken(e.target.value)} />
      <Button text={"Submit"} onClick={handleSubmit} outline={false} />
    </StyledAccessPage>
  );
};

export default AccessPage;

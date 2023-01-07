import styled from "styled-components";
import Button from "components/Button";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessAtom } from "recoil/access";
import { useNavigate } from "react-router-dom";
import TextField from "components/TextField";
import sjcl from "sjcl";

const StyledAccessPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem;
  padding: 1rem;

  .access-text{
    margin 0.5rem;
    font-size: 1.5rem;
  }

  .not-found-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5rem;
    padding: 2rem;
    border-radius: 10px;
    background: ${({ theme }) => theme.clear};
    color: ${({ theme }) => theme.textPrimary};
  }
`;

const AccessPage = () => {
  const [accessToken, setAccessToken] = useState("");
  const [access, setAccess] = useRecoilState(accessAtom);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const myBitArray = sjcl.hash.sha256.hash(accessToken);
    const shaVal = sjcl.codec.hex.fromBits(myBitArray);

    if (access.accessTokens.includes(shaVal)) {
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
      <form className="not-found-content" onSubmit={handleSubmit}>
        <div className="access-text">Enter Access Token</div>
        <TextField
          type={"password"}
          onChange={(e: any) => setAccessToken(e.target.value)}
          outline={true}
          required={true}
        />

        <Button text={"Submit"} onClick={null} outline={false} type={"submit"} />
      </form>
    </StyledAccessPage>
  );
};

export default AccessPage;

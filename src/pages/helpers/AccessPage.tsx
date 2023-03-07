import styled from "styled-components";
import Button from "components/Button";
import { ChangeEvent, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { accessAtom } from "recoil/access";
import { useNavigate, useSearchParams } from "react-router-dom";
import TextField from "components/TextField";
import { sha256 } from "utils/Helpers";

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

  .access-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5rem;
    padding: 2rem;
    background: ${({ theme }) => theme.clear};
    color: ${({ theme }) => theme.textPrimary};
  }
`;

const AccessPage = () => {
  const [accessToken, setAccessToken] = useState("");
  const [searchParams] = useSearchParams();
  const setAccess = useSetRecoilState(accessAtom);
  const navigate = useNavigate();

  const accessList = [
    "5950acec6e7bf6f55b899ef02dcaac5fec3a9967f2db2907313aa026d5c4f6dc",
    "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
  ];

  useEffect(() => {
    //Not very secure but needed for easy access via url
    const key = searchParams.get("key");

    if (key) {
      accessPage(key);
    }
  }, [searchParams]);

  const accessPage = (key: string) => {
    if (accessList.includes(sha256(key.toLowerCase()))) {
      setAccess(true);
      navigate("/");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    accessPage(accessToken);
  };

  return (
    <StyledAccessPage>
      <form className="access-content" onSubmit={handleSubmit}>
        <div className="access-text">Enter Access Token</div>
        <TextField
          type={"password"}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAccessToken(e.target.value)}
          outline={true}
          required={true}
          id={"access-token"}
        />
        <Button text={"Submit"} outline={false} type={"submit"} />
      </form>
    </StyledAccessPage>
  );
};

export default AccessPage;

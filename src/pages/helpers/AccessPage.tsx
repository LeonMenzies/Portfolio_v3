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

  .invalid {
    animation: shake 0.2s ease-in-out 0s 2;
  }

  @keyframes shake {
    0% {
      margin-left: 0rem;
    }
    25% {
      margin-left: 0.5rem;
    }
    75% {
      margin-left: -0.5rem;
    }
    100% {
      margin-left: 0rem;
    }
  }
`;

const AccessPage = () => {
  const [accessToken, setAccessToken] = useState("");
  const [searchParams] = useSearchParams();
  const setAccess = useSetRecoilState(accessAtom);
  const navigate = useNavigate();

  const accessList = [
    "5950acec6e7bf6f55b899ef02dcaac5fec3a9967f2db2907313aa026d5c4f6dc",
    "aafefc15fa5e89eefbec80ae10254d9c9924798fd13ef1392b8833252f2a17a6",
    "19a285d268f83d9cad706082e49b3a4492c3291bb0f340554cb7ff1a1bb87b54",
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
    } else {
      document.getElementById("submit-button-id")!.classList.add("invalid");
      setTimeout(() => {
        document.getElementById("submit-button-id")!.classList.remove("invalid");
      }, 200);
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
        <Button text={"Submit"} outline={false} type={"submit"} id={"submit-button-id"} />
      </form>
    </StyledAccessPage>
  );
};

export default AccessPage;

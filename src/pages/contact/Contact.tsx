import { useState } from "react";
import styled from "styled-components";
import TextField from "components/TextField";
import Button from "components/Button";
import TextArea from "components/TextArea";

const StyledContact = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  .contact-content {
    width: 40vw;
    min-width: 320px;
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

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log(contactDetails);

    let response = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(contactDetails),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <StyledContact>
      <form className="contact-content" onSubmit={handleSubmit}>
        <TextField
          type={"text"}
          onChange={(e: any) => setContactDetails(e.target.value)}
          outline={true}
          required={true}
          id={"name"}
          title={"Name"}
        />
        <TextField
          type={"email"}
          onChange={(e: any) => setContactDetails(e.target.value)}
          outline={true}
          required={true}
          id={"email"}
          title={"Email"}
        />
        <TextArea
          onChange={(e: any) => setContactDetails(e.target.value)}
          outline={true}
          required={true}
          id={"message"}
          title={"Message"}
        />
        <Button text={status} outline={false} type={"submit"} />
      </form>
    </StyledContact>
  );
};

export default Contact;

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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5rem;
    padding: 2rem;
    border-radius: 10px;
    background: ${({ theme }) => theme.clear};
    color: ${({ theme }) => theme.textPrimary};

    label {
      width: 100%;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: var(--clear);
    border-radius: 10px;
  }

  input,
  textarea {
    width: 40vw;
    border-radius: 10px;
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
        <label htmlFor="name">Name</label>

        <TextField
          type={"text"}
          onChange={(e: any) => setContactDetails(e.target.value)}
          outline={true}
          required={true}
        />

        <label htmlFor="email">Email</label>
        <TextField
          type={"email"}
          onChange={(e: any) => setContactDetails(e.target.value)}
          outline={true}
          required={true}
        />

        <label htmlFor="message">Message</label>
        <TextArea
          onChange={(e: any) => setContactDetails(e.target.value)}
          outline={true}
          required={true}
        />

        <Button text={status} onClick={null} outline={false} type={"submit"} />
      </form>
    </StyledContact>
  );
};

export default Contact;

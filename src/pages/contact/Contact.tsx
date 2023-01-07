import { useState } from "react";
import styled from "styled-components";
import TextField from "components/TextField";
import Button from "components/Button";

const StyledContact = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;

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
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <StyledContact>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>

        <TextField
          type={"text"}
          onChange={(e: any) => setContactDetails(e.target.value)}
          outline={true}
          required={true}
        />

        <label htmlFor="email">Email:</label>
        <TextField
          type={"email"}
          onChange={(e: any) => setContactDetails(e.target.value)}
          outline={true}
          required={true}
        />

        <label htmlFor="message">Message:</label>
        <TextField
          type={"email"}
          onChange={(e: any) => setContactDetails(e.target.value)}
          outline={true}
          required={true}
        />

        <Button text={"Submit"} onClick={null} outline={false} type={"submit"} />
      </form>
    </StyledContact>
  );
};

export default Contact;

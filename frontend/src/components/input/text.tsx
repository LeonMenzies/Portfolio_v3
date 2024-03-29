import { ChangeEventHandler } from "react";
import styled from "styled-components";

export interface TextProps {
  title: string;
  type: string;
  placeholder?: string;
  value: string | number;
  required?: boolean;
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Text(props: TextProps) {
  const { title, type, placeholder, value, required, id, onChange } = props;

  return (
    <StyledText>
      <label className={"text-input-label"} htmlFor={id}>
        {title}
      </label>
      <StyledInput className={"text-input"} type={type} id={id} placeholder={placeholder} onChange={onChange} value={value} required={required} />
    </StyledText>
  );
}

export default Text;

const StyledText = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
  margin: 5px;
  width: 100%;
`;

const StyledInput = styled.input`
  &:focus {
    outline: none;
    border: none;
  }
`;

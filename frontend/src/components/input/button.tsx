import { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export function Button(props: ButtonProps) {
  const { text, disabled = false, loading = false, onClick } = props;
  return (
    <StyledButton disabled={disabled || loading} onClick={onClick}>
      {loading ? "Loading..." : text}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  margin: 10px;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;

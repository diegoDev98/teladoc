import styled from "@emotion/styled";

type Props = {
  text: string;
  expand?: boolean;
  onClick?: () => void;
};

export const Button = ({ text, expand, onClick }: Props) => {
  return (
    <StyledButton onClick={onClick} expand={expand}>
      {text}
    </StyledButton>
  );
};

interface ButtonProps {
  expand?: boolean;
}
const StyledButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  width: ${(props: ButtonProps) => (props.expand ? "100%" : "auto")};
`;

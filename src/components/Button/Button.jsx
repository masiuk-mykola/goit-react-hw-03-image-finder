import { StyledButton } from './Button.styled';

export const Button = ({ children, onClick }) => {
  const BtnClickHandler = () => {
    onClick();
  };
  return (
    <StyledButton type="button" onClick={BtnClickHandler}>
      {children}
    </StyledButton>
  );
};

import { InputProps } from "./interfaces";
import { Container, InputWrapper, PasswordIcon } from "./styles";

const Input = ({icon, ...rest}: InputProps) => {
  return (
    <Container className="input-wrapper">
      {icon}
      <InputWrapper {...rest} />
      {rest?.type === "password" && <PasswordIcon />}
    </Container>
  );
}

export default Input;
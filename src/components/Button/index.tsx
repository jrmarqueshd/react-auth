import { ButtonProps } from "./interfaces";
import { Container } from "./styles";

const Button = ({children, ...rest}: ButtonProps) => {
  return (
    <Container {...rest} className="input-wrapper">
      {children}
    </Container>
  );
}

export default Button;
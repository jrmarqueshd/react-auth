import { AuthWrapperProps } from "./interfaces";
import { Container, Steps, FormWrapper } from "./styles";

const AuthWrapper = ({children, step}: AuthWrapperProps) => {
 return (
   <Container>
     {step && (
        <Steps>
          <div className={step === "1" ? "-active" : ""}>1</div>
          <div className="separator">-</div>
          <div className={step === "2" ? "-active" : ""}>2</div>
        </Steps>
       )}

     <h2>Olá! Seja bem-vindo ao site</h2>

     <p className="subtitle">
      Entre com seu nome de usuário e senha.
     </p>

     <FormWrapper>
      {children}
     </FormWrapper>
   </Container>
 )
}

export default AuthWrapper;
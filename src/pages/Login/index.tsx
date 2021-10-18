import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { HiOutlineKey } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import { useToasts } from 'react-toast-notifications';

import AuthWrapper from "../../components/AuthWrapper";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Form, RecoveryLink, ChangeAuthMode } from "./styles";
import SocialButton from "../../components/SocialButtons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { addToast } = useToasts();

  const handleSubmit = async () => {
    try {
      const response: any = await axios.post("http://travelingbetapi-env.eba-2riiwc2y.us-east-1.elasticbeanstalk.com/api/o/customer-login/login",  {
        email,
        password
      });

      addToast(response.data.message || "Login efetuado com sucesso.", { appearance: 'success' });

      console.log(response.data);
    } catch (error: any) {
      addToast(error.message, { appearance: 'error' });
    }
  }

  return (
    <AuthWrapper>
      <Form onSubmit={e => { e.preventDefault(); }}>
        <Input 
          onChange={(e) => setEmail(e.target.value)} 
          id="email" 
          icon={<BiUser/>} 
          placeholder="Usuário" 
          type="email" 
        />

        <Input 
          onChange={(e) => setPassword(e.target.value)} 
          id="password" 
          icon={<HiOutlineKey />} 
          placeholder="Senha" 
          type="password" 
        />
        
        <RecoveryLink to="/">Esqueceu a senha?</RecoveryLink>
        
        <Button onClick={handleSubmit}>Entrar</Button>

        <ChangeAuthMode>
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </ChangeAuthMode>
      </Form>

      <SocialButton />
    </AuthWrapper>
  )
}

export default Login;
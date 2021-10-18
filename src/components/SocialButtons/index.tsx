import {FcGoogle} from "react-icons/fc"
import {FaFacebookF} from "react-icons/fa"

import { Container, Separator, ButtonGoogle, ButtonFace } from "./styles";

const SocialButton = () => {
  return (
    <Container>
      <Separator />

      <ButtonGoogle><FcGoogle /> Entrar com Google</ButtonGoogle>
      <ButtonFace><FaFacebookF /> Entrar com Facebook</ButtonFace>
    </Container>
  )
}

export default SocialButton;
import { GiHamburgerMenu } from "react-icons/gi"
import { FiSearch, FiUser } from "react-icons/fi"

import { Logo, Container, SearchWrapper, Input, MenuContainer, IconsContainer } from "./styles";

const Header = () => {
  return (
    <Container>
      <MenuContainer>
        <GiHamburgerMenu className="button-menu" />
        <Logo>logo</Logo>
      </MenuContainer>

      <IconsContainer>
        <SearchWrapper>
          <Input placeholder="O que você está procurando?" />
          <FiSearch />
        </SearchWrapper>
        <div className="auth-navs">
          <FiUser />
          <span>Entre</span>
          <span>Cadastre-se</span>
        </div>
      </IconsContainer>
    </Container>
  )
}

export default Header;
import styled from "styled-components";
import darkLogo from "../assets/images/logo-dark.svg";
import lightLogo from "../assets/images/logo-light.svg";

const Header = () => {
    return (
        <Container>
            <Logo src={ darkLogo } />
        </Container>
    )
};

export default Header;

const Container = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: var(--global-header-width);
    height: 100%;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1;
`;

const Logo = styled.img`
    width: 50px;
    height: 50px;
    padding: 5px;
    margin: 10px 0;
    cursor: pointer;
`;
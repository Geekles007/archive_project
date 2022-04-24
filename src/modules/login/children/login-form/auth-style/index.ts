import {Button, Form} from "carbon-components-react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const AuthContainer = styled.div`
  max-width: 400px;
  height: 100vh;
  padding: 0 0 0 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  background-color: ${({theme}) => theme.bgColor};

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const LoginPanel = styled.div`
  width: 400px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding-top: 3em;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const TopRightLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
`;

const LoginButton = styled(Button)`
  width: 100%;
  max-width: 100%;
`;

export {
    AuthContainer,
    LoginPanel,
    CustomForm,
    LoginButton,
    TopRightLink
}

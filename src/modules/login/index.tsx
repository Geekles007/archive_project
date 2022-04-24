import React, {memo, useEffect, useState} from "react";
import {Column, Grid, Row} from "carbon-components-react";
import LoginModule from "./children/login-form";
import {ACCESS_TOKEN} from "../../constants";
import {useHistory} from "react-router-dom";
import SignInIllustration from "./../../assets/images/spot-file-sharing.png";
import styled from "styled-components";

const SignInWrapper = styled.div`
  height: 100vh;
  
  img{
    height: calc(70vh);
  }
  
  .bx--grid {
    height: 100vh;
    
    .bx--row{
      height: 100%;
    }
  }
  
  .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LoginUI = () => {
    const [isSignIn, setIsSignIn] = useState<boolean>(!!localStorage.getItem(ACCESS_TOKEN));
    const history = useHistory();

    useEffect(() => {
        if (isSignIn) {
            history.push("/main");
        }
    }, []);

    return (
        <SignInWrapper>
            <Grid condensed>
                <Row condensed>
                    <Column lg={4}>
                        <LoginModule />
                    </Column>
                    <Column className={"image-wrapper"} lg={8}>
                        <img src={SignInIllustration}/>
                    </Column>
                </Row>
            </Grid>
        </SignInWrapper>
    );

}

export default memo(LoginUI);

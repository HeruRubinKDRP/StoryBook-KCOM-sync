import {useResizeDetector} from "react-resize-detector";

import React, { useState } from 'react';
import styled from 'styled-components';
import {BackButton, Button, LoginContainer} from "./login-styled";
import {Container} from "postcss";



enum LoginOption {
    MAIN,
    GOOGLE,
    APPLE,
    FACEBOOK,
    EMAIL,
}

export const LoginFlyout: React.FC = () => {
    const [option, setOption] = useState<LoginOption>(LoginOption.MAIN);

    const renderMainOptions = () => (
        <>
            <h2>Login</h2>
            <Button onClick={() => setOption(LoginOption.GOOGLE)}>Continue with Google</Button>
            <Button onClick={() => setOption(LoginOption.APPLE)}>Continue with Apple</Button>
            <Button onClick={() => setOption(LoginOption.FACEBOOK)}>Continue with Facebook</Button>
            <Button onClick={() => setOption(LoginOption.EMAIL)}>Continue with Email</Button>
        </>
    );

    const renderSecondaryOption = (title: string) => (
        <>
            <h2>{title}</h2>
            {/* Implement your API calls here */}
            <BackButton onClick={() => setOption(LoginOption.MAIN)}>Back</BackButton>
        </>
    );

    return (
        <LoginContainer>
            {option === LoginOption.MAIN && renderMainOptions()}
            {option === LoginOption.GOOGLE && renderSecondaryOption('Google Login')}
            {option === LoginOption.APPLE && renderSecondaryOption('Apple Login')}
            {option === LoginOption.FACEBOOK && renderSecondaryOption('Facebook Login')}
            {option === LoginOption.EMAIL && renderSecondaryOption('Email Login')}
        </LoginContainer>
    );
};

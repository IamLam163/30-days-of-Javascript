import React from 'react';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      clientId="YOUR_CLIENT_ID_HERE"
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

const LoginPage = () => {
  const handleGoogleLoginSuccess = (response) => {
    console.log('Login success:', response);
  };

  const handleGoogleLoginFailure = (response) => {
    console.log('Login failure:', response);
  };

  return (
    <Container>
      <Logo src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" />
      <Title>Sign in with Google</Title>
      <GoogleLoginButton onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} />
    </Container>
  );
};

export default LoginPage;


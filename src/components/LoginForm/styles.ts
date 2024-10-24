import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const Form = styled.form`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px #cccccc;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  text-align: center;
`;

export const Input = styled.input`
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #0070f3;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 16px;
  text-align: center;
`;
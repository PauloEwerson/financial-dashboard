'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Form, Input, Button, Title, ErrorMessage } from './styles';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      if (typeof window !== 'undefined') {
        localStorage.setItem('loggedIn', 'true');
      }
      router.push('/dashboard');
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;

import { Button, Container, Title, Text } from '@mantine/core';
import { jwtDecode } from 'jwt-decode';

const Dashboard = () => {
  const token = localStorage.getItem('token');
const decoded = token ? jwtDecode(token) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <Container>
      <Title mt="xl">Welcome to Dashboard</Title>
      <Text mt="sm">Logged in as: {decoded?.email}</Text>
      <Button mt="xl" color="red" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;

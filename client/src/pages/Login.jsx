import { TextInput, PasswordInput, Button, Paper, Title } from "@mantine/core";
import { useForm } from '@mantine/form';
import axios from "axios";
import { Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "pjangale88@gmail.com",
      password: "12345678",
    },
  });

  const handleLogin = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        values
      );
      localStorage.setItem("token", res, data, token);
      alert("Login successful!");
    } catch (err) {
      alert(err.response.data.msg || "Login failed");
    }
  };

  return (
    <Paper
      p="md"
      shadow="md"
      radius="md"
      withBorder
      style={{ maxWidth: 400, margin: "auto", marginTop: 100 }}
    >
      <Title align="center" mb="md">
        Login
      </Title>
      <form onSubmit={form.onSubmit(handleLogin)}>
        <TextInput label="Email" {...form.getInputProps("email")} required />
        <PasswordInput
          label="Password"
          {...form.getInputProps("password")}
          required
          mt="sm"
        />
        <Button type="submit" fullWidth mt="lg">
          Login
        </Button>
        <Anchor component={Link} to="/signup" mt="sm" size="sm">
  Don’t have an account? Signup here
</Anchor>
      </form>
    </Paper>
  );
};

export default Login;

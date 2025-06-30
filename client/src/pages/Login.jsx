import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = async (values) => {
    try {
      console.log('Sending values:', values);
      const res = await axios.post('http://localhost:5000/api/auth/login', values);
      console.log("Login form values:", values);
      localStorage.setItem('token', res.data.token);
      window.location.href = '/dashboard';
      alert('Login successful!');
    } catch (err) {
      alert(err?.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1501785888041-af3ef285b470)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        shadow="xl"
        p="xl"
        radius="md"
        style={{
          width: 400,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <Title align="center" order={2} style={{ color: '#fff' }} mb="lg">
          Login Form
        </Title>

        <form onSubmit={form.onSubmit(handleLogin)}>
          <TextInput
            label="Enter your email"
            {...form.getInputProps('email')}
            required
            styles={{ input: { backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' } }}
          />

          <PasswordInput
            label="Enter your password"
            {...form.getInputProps('password')}
            required
            mt="md"
            styles={{ input: { backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' } }}
          />

          <Group position="apart" mt="sm">
            {/* <Checkbox label="Remember me"  styles={{ label: { color: '#fff' } } } /> */}
            <Anchor href="#" size="sm" style={{ color: '#fff' }}>
              Forgot password?
            </Anchor>
          </Group>

          <Button type="submit" fullWidth mt="xl" variant="white" color="dark">
            Log In
          </Button>

          <Text align="center" size="sm" mt="md" style={{ color: '#fff' }}>
            Don’t have an account?{' '}
            <Anchor component={Link} to="/signup" style={{ color: '#fff', textDecoration: 'underline' }}>
              Register
            </Anchor>
          </Text>
        </form>
      </Paper>
    </div>
  );
};

export default Login;

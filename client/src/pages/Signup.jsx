import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Text,
  Anchor,
  Grid,
  // Col,
  Divider,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link} from "react-router-dom";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const Navigate = useNavigate();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

const handleSignup = async (values) => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/register", values);
    alert("Signup successful! Now login please.");
    Navigate("/login");
  } catch (err) {
    console.error("Signup error:", err);
    const msg = err?.response?.data?.msg || "Signup failed. Please try again.";
    alert(msg);
  }
};
  return (
    <Paper
      style={{
        width: "80%",
        maxWidth: 1000,
        margin: "auto",
        marginTop: 60,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
      }}
    >
      <Grid grow style={{ minHeight: "500px" }}>
        <Grid.Col
          span={6}
          style={{ backgroundColor: "#1e90ff", color: "white", padding: "40px 30px" }}
        >
          <Title order={2} style={{ fontWeight: 700, marginBottom: 20 }}>
            Come join us!
          </Title>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            We are so excited to have you here. If you haven't already, create an account to get
            access to exclusive offers, rewards, and discounts.
          </Text>
          <Button
            component={Link}
            to="/login"
            variant="white"
            color="blue"
            radius="xl"
            mt="xl"
            size="sm"
          >
            Already have an account? Signin.
          </Button>
        </Grid.Col>

        <Grid.Col span={6} style={{ padding: "40px 30px" }}>
      <Title order={2} align="center" mb="lg">
        SignUp
      </Title>

      <form onSubmit={form.onSubmit(handleSignup)}>
        <TextInput label="Name"
        placeholder="Enter your name" {...form.getInputProps("name")} required   mb="sm" />
        <TextInput
          label="Email"
            placeholder="Enter your email"
          {...form.getInputProps("email")}
          required
           mb="sm"
        />
        <PasswordInput
          placeholder="Enter your password"
          {...form.getInputProps("password")}
          required
        mb="sm"
        />
        <PasswordInput
              placeholder="Confirm your password"
              required
              mb="md"
            />
        <Button type="submit" fullWidth color="blue" size="md">
          Sign Up
        </Button>
      </form>
      <Divider my="md" label="or signup with" labelPosition="center" />
      <Group position="center" spacing="md">
            <FaFacebookF size={18} color="#3b5998" />
            <FaGoogle size={18} color="#dd4b39" />
            <FaLinkedinIn size={18} color="#0077b5" />
          </Group>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
export default Signup;

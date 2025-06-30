import { TextInput, PasswordInput, Button, Paper, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";

const Signup = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSignup  = async (values) => {
    // console.log("form values:", values)
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        values
      );
      alert("Signup successful! Now login Please");
    } catch (err) {
        // console.error(err);
      alert(err.response.data.msg || "Signup failed");
    }
  };

  return (
    <Paper
      p="md"
      shadow="md"
      radius="md"
      withBorder style={{ maxwidth: 400, margin: "auto", marginTop: "100" }}
    >
      <Title align="center" mb="md">
        SignUp
      </Title>
     <form onSubmit={form.onSubmit(handleSignup)}>
        <TextInput label="Name" {...form.getInputProps("name")} required />
        <TextInput
          label="Email"
          {...form.getInputProps("email")}
          required
          mt="sm"
        />
        <PasswordInput
          label="Password"
          {...form.getInputProps("password")}
          required
          mt="sm"
        />
        <Button type="submit" fullWidth mt="lg">
          Sign Up
        </Button>
      </form>
    </Paper>
  );
};
export default Signup;

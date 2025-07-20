import { Button } from '@mantine/core';

const CustomButton = ({ children, ...props }) => (
  <Button radius="md" color="blue" {...props}>
    {children}
  </Button>
);

export default CustomButton;

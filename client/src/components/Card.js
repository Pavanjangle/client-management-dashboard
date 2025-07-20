import { Card } from "@mantine/core";

const CustomCard = ({ children, ...props }) => (
  <Card shadow="sm" padding="lg" radius="md" {...props}>
    {children}
  </Card>
);

export default CustomCard;

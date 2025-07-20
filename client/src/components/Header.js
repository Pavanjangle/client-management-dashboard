import {Header} from "@mantine/core";

const CustomHeader = ({ children, ...props }) => (
  <Header height={60} p="md" {...props}>
    {children}
  </Header>
);

export default CustomHeader;

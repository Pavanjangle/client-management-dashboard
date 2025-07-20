import {Sidebar} from "@mantine/core";

const CustomSidebar = ({ children, ...props }) => (
  <Sidebar width={{ base: 250 }} p="md" {...props}>
    {children}
  </Sidebar>
);

export default CustomSidebar;

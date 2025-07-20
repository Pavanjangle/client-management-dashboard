import { Container, Grid } from '@mantine/core';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children }) => (
  <Grid>
    <Grid.Col span={2}>
      <Sidebar />
    </Grid.Col>
    <Grid.Col span={10}>
      <Header />
      <Container>{children}</Container>
    </Grid.Col>
  </Grid>
);

export default DashboardLayout;

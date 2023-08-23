import { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import TaskArea from '../../components/task-area/task-area.tsx';
import Sidebar from '../../components/sidebar/sidebar.tsx';

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container spacing={2} minHeight='100vh' p={0} m={0}>
      <TaskArea />
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;

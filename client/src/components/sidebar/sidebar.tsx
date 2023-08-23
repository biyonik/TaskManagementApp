import { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import Profile from '../profile/profile.tsx';
import CreateTaskForm from '../create-task-form/create-task-form.tsx';

const Sidebar: FC = (): ReactElement => {
  return (
    <Grid item md={4} sx={{
      height: '100vh',
      position: 'fixed',
      top: 0,
      right: 0,
      width: '100%',
      backgroundColor: 'background.paper',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Profile />
      <CreateTaskForm />
    </Grid>
  )
}

export default Sidebar;

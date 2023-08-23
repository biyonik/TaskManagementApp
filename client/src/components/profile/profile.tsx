import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface IProfile {
  name?: string;
}

const Profile: FC<IProfile> = (props): ReactElement => {
  const { name = '' } = props;
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant='h4' color='text.primary'>
          {`${name?.substring(0, 1).toUpperCase()}`}
        </Typography>
      </Avatar>

      <Typography variant='h6' color='text.primary'>{`Welcome ${name}`}</Typography>

      <Typography variant='body1' color='text.secondary'>
        This is your personal task manager. You can add, edit and delete tasks.
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
};

export default Profile;

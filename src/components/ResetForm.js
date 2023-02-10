import React, { useState } from 'react';
import { Button, Card, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../actions/auth';

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetPasswordToken, setResetPasswordToken] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(email, newPassword, resetPasswordToken, navigate));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card sx={{
        width: {
          sx: '95%',
          md: '45%',
          lg: '45%'
        },
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <TextField
          sx={{
            width: '90%',
            margin: '1em'
          }}
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          sx={{
            width: '90%',
            margin: '1em'
          }}
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <TextField
          sx={{
            width: '90%',
            margin: '1em'
          }}
          type="text"
          placeholder="Enter reset password token"
          value={resetPasswordToken}
          onChange={(e) => setResetPasswordToken(e.target.value)}
          required
        />
        <Button type="submit">Reset Password</Button>
      </Card>

    </form>
  );
};

export default ResetPasswordForm;

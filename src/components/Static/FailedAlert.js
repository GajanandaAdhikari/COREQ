import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function FailedAlert({ message }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='flex justify-end'>
        <Stack sx={{ width: '30%' }} spacing={2}>
      {open && (
        <Alert severity="error">{message}</Alert>
      )}
    </Stack>
    </div>
  );
}

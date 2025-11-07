import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react'
import './css/Contact.css'
const Contact = () => {
  return (
    <div
      className="contact"
      style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}
    >
      <Box className="form" sx={{ flex: 1 }}>
        <TextField id="outlined-name" label="Name" variant="outlined" />
        <br />
        <TextField id="outlined-email" label="Email" variant="outlined" />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
        />
        <br />
        <button
          className="submit-btn"
          style={{
            padding: '10px 18px',
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          Submit
        </button>
      </Box>
      <Box className="video" sx={{ width: 360 }}>
       
      </Box>
    </div>
  )
}   

export default Contact;
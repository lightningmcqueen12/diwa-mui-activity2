/* eslint-disable prettier/prettier */
'use client'

import React, { useState } from 'react'
import { Grid, Typography, Button, TextField, Box } from '@mui/material'

export default function TwoColumnLayout() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = {
      firstName: values.firstName.trim() === '',
      lastName: values.lastName.trim() === '',
      email: values.email.trim() === '',
      password: values.password.trim() === '',
    }
    setErrors(newErrors)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    if (value.trim() !== '') setErrors({ ...errors, [name]: false })
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url("/bg-intro-desktop.png")`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundColor: '#FF7A7A',
        p: 4,
      }}
    >
      <Grid
        container
        spacing={6}
        sx={{
          width: '100%',
          maxWidth: 1100,
          alignItems: 'center',
          color: 'black',
        }}
      >
        {/* LEFT COLUMN */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              lineHeight: 1.3,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Learn to code by
            <br /> watching others
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.7,
              maxWidth: 400,
              mx: { xs: 'auto', md: 0 },
            }}
          >
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </Typography>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/*  Banner */}
          <Box
            sx={{
              backgroundColor: '#500f82d4',
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '0.95rem',
              borderRadius: 2,
              p: 1.5,
              width: '100%',
              maxWidth: 400,
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            Try it free 7 days <Box component="span" sx={{ fontWeight: 400 }}>then $50/month</Box>
          </Box>

          {/* White Form Card */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              backgroundColor: 'white',
              p: 4,
              borderRadius: 2,
              boxShadow: '0 10px 20px rgba(36, 14, 14, 0.87)',
              color: 'black',
              width: '300%',
              maxWidth: 400,
            }}
          >
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              error={errors.firstName}
              helperText={errors.firstName ? 'First Name is required' : ''}
              margin="normal"
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              error={errors.lastName}
              helperText={errors.lastName ? 'Last Name is required' : ''}
              margin="normal"
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email ? 'Email Address is required' : ''}
              margin="normal"
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              helperText={errors.password ? 'Password is required' : ''}
              margin="normal"
              variant="outlined"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#38CC8C',
                '&:hover': { backgroundColor: '#2BB374' },
                textTransform: 'uppercase',
                fontWeight: 'bold',
                py: 1.5,
                borderRadius: 1.5,
                fontSize: '0.95rem',
                boxShadow: '0 4px 6px rgba(50, 201, 115, 0.4)',
              }}
            >
              Claim your free trial
            </Button>

            <Typography
              variant="body2"
              sx={{
                fontSize: '0.75rem',
                textAlign: 'center',
                color: '#000000c4',
                mt: 2,
              }}
            >
              By clicking the button, you are agreeing to our{' '}
              <Box component="span" sx={{ color: '#f70606e5', fontWeight: 'bold' }}>
                Terms and Services
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
/* eslint-disable prettier/prettier */

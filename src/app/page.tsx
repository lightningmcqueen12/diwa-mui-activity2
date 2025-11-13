/* eslint-disable prettier/prettier */
'use client';

import React, { useState } from 'react';
import { Grid, Typography, Box, Divider } from '@mui/material';

const destinations = [
  {
    name: 'MOON',
    img: '/image-moon.png',
    description:
      'See our planet as you have never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While youre there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travelTime: '3 Days',
  },
  {
    name: 'MARS',
    img: '/image-mars.png',
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. Its two and a half times the size of Everest!',
    distance: '225 Mil. km',
    travelTime: '9 Months',
  },
  {
    name: 'EUROPA',
    img: '/image-europa.png',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover dream.  With an icy surface, its perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 Mil. km',
    travelTime: '3 Years',
  },
  {
    name: 'TITAN',
    img: '/image-titan.png',
    description:
      'Venture to Saturn’s largest moon, Titan. Its dense atmosphere and methane lakes make it truly unique.',
    distance: '1.6 Bil. km',
    travelTime: '7 Years',
  },
];

export default function MarsLanding() {
  const [selected, setSelected] = useState(destinations[1]); // Default to MARS

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("/background-destination-desktop.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: 1300,
          alignItems: 'center',
          justifyContent: 'center',
          mt: { xs: 2, sm: 4, md: 6 },
          px: { xs: 1, sm: 2 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {/* LEFT SIDE */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 3, sm: 5 },
          }}
        >
          <Typography
            sx={{
              letterSpacing: '3px',
              color: '#D0D6F9',
              textTransform: 'uppercase',
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            <Box component="span" sx={{ color: '#616476', fontWeight: 'bold', mr: 1 }}>
              01
            </Box>
            PICK YOUR DESTINATION
          </Typography>

          <Box
            component="img"
            src={selected.img}
            alt={`${selected.name} planet`}
            sx={{
              width: { xs: '65%', sm: '75%', md: '90%' },
              maxWidth: 400,
              height: 'auto',
              mt: { xs: 2, md: 4 },
              transition: 'transform 0.6s ease',
              '&:hover': {
                transform: { md: 'scale(1.05)' },
              },
            }}
          />
        </Grid>

        {/* RIGHT SIDE */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'flex-start' },
            mt: { xs: 4, md: 0 },
          }}
        >
          {/* Destination Menu */}
          <Box sx={{ mb: { xs: 2, md: 3 } }}>
            {destinations.map((item) => (
              <Typography
                key={item.name}
                component="span"
                onClick={() => setSelected(item)}
                sx={{
                  mx: { xs: 1, sm: 2 },
                  fontSize: { xs: '0.85rem', sm: '1rem' },
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  position: 'relative',
                  pb: '4px',
                  color: item.name === selected.name ? '#fff' : '#D0D6F9',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: item.name === selected.name ? '#fff' : 'transparent',
                  },
                  '&:hover': {
                    color: '#fff',
                  },
                  '&:hover::after': {
                    backgroundColor: '#fff',
                  },
                }}
              >
                {item.name}
              </Typography>
            ))}
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '6rem' },
              fontWeight: 400,
              mb: 2,
              textTransform: 'uppercase',
            }}
          >
            {selected.name}
          </Typography>

          <Typography
            sx={{
              color: '#D0D6F9',
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: { xs: 3, md: 4 },
              maxWidth: 420,
            }}
          >
            {selected.description}
          </Typography>

          <Divider
            sx={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              my: { xs: 2, sm: 3 },
              width: { xs: '80%', md: '100%' },
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 3, sm: 6 },
              justifyContent: { xs: 'center', md: 'flex-start' },
              textTransform: 'uppercase',
              alignItems: { xs: 'center', sm: 'flex-start' },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: '#D0D6F9',
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  letterSpacing: '1px',
                }}
              >
                Avg. Distance
              </Typography>
              <Typography sx={{ fontSize: { xs: '1.4rem', sm: '1.8rem' }, mt: 1 }}>
                {selected.distance}
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  color: '#D0D6F9',
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  letterSpacing: '1px',
                }}
              >
                Est. Travel Time
              </Typography>
              <Typography sx={{ fontSize: { xs: '1.4rem', sm: '1.8rem' }, mt: 1 }}>
                {selected.travelTime}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

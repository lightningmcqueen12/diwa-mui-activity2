/* eslint-disable prettier/prettier */
'use client'

import React from 'react'
import { Grid, Typography, Box, Divider } from '@mui/material'

export default function MarsLanding() {
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

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-end' },
          alignItems: 'center',
          px: { xs: 1, sm: 3, md: 8 },
          py: { xs: 1.5, md: 2 },
          position: 'relative',
          overflowX: 'auto',
        }}
      >
     
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(255,255,255,0.05)',
            px: { xs: 3, sm: 5, md: 6 },
            py: 1.5,
            borderRadius: 2,
            gap: { xs: 3, sm: 5 },
            whiteSpace: 'nowrap',
          }}
        >
          {[
            { num: '00', label: 'HOME' },
            { num: '01', label: 'DESTINATION' },
            { num: '02', label: 'CREW' },
            { num: '03', label: 'TECHNOLOGY' },
          ].map((item) => (
            <Box
              key={item.label}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                textTransform: 'uppercase',
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                letterSpacing: '2px',
                color:
                  item.label === 'DESTINATION' ? '#fff' : 'rgba(255,255,255,0.7)',
                transition: 'color 0.3s ease',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor:
                    item.label === 'DESTINATION'
                      ? '#fff'
                      : 'rgba(255,255,255,0)',
                  transition: 'all 0.3s ease',
                },
                '&:hover': {
                  color: '#fff',
                },
                '&:hover::after': {
                  backgroundColor: '#fff',
                },
              }}
            >
              <Typography component="span" sx={{ fontWeight: 600, mr: 1 }}>
                {item.num}
              </Typography>
              {item.label}
            </Box>
          ))}
        </Box>
      </Box>

 
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
        {/* LEFT SIDE  */}
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
          {/* TITLE */}
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

          {/* MARS IMAGE */}
          <Box
            component="img"
            src="/image-mars.png"
            alt="Mars planet"
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

        {/* RIGHT SIDE  */}
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
     
          <Box sx={{ mb: { xs: 2, md: 3 } }}>
            {['MOON', 'MARS', 'EUROPA', 'TITAN'].map((item) => (
              <Typography
                key={item}
                component="span"
                sx={{
                  mx: { xs: 1, sm: 2 },
                  fontSize: { xs: '0.85rem', sm: '1rem' },
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  position: 'relative',
                  pb: '4px',
                  color: item === 'MARS' ? '#fff' : '#D0D6F9',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: item === 'MARS' ? '#fff' : 'transparent',
                  },
                  '&:hover': {
                    color: '#fff',
                  },
                  '&:hover::after': {
                    backgroundColor: '#fff',
                  },
                }}
              >
                {item}
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
            MARS
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
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
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
                225 Mil. km
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
                9 Months
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

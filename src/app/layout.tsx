/* eslint-disable prettier/prettier */
'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ThemeProvider from '@/context/theme/provider';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // State for active navigation item
  const [activeNav, setActiveNav] = useState('DESTINATION');

  const navItems = [
    { num: '00', label: 'HOME' },
    { num: '01', label: 'DESTINATION' },
    { num: '02', label: 'CREW' },
    { num: '03', label: 'TECHNOLOGY' },
  ];

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Box
            sx={{
              minHeight: '100vh',
              width: '100%',
              backgroundImage: 'url("/background-destination-desktop.jpg")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Navigation Bar */}
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
                {navItems.map((item) => (
                  <Box
                    key={item.label}
                    onClick={() => setActiveNav(item.label)} // make it clickable
                    sx={{
                      position: 'relative',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      letterSpacing: '2px',
                      color:
                        item.label === activeNav ? '#fff' : 'rgba(255,255,255,0.7)',
                      transition: 'all 0.3s ease',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-6px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor:
                          item.label === activeNav ? '#fff' : 'rgba(255,255,255,0)',
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

            {/* Main App Content */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <ThemeProvider>{children}</ThemeProvider>
            </Box>
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}


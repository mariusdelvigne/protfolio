import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { profile } from '../data';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/projets', label: 'Projets' },
  { to: '/cv', label: 'CV' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout({ mode, onToggleMode }) {
  const [anchor, setAnchor] = useState(null);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Toolbar>
          <Typography variant="h6" component={NavLink} to="/" sx={{ flexGrow: 1, color: 'primary.main', textDecoration: 'none', fontWeight: 700 }}>
            {profile.name}
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 0.5 }}>
            {links.map((l) => (
              <Button
                key={l.to}
                component={NavLink}
                to={l.to}
                end={l.to === '/'}
                color="inherit"
                sx={{ '&.active': { color: 'primary.main', bgcolor: 'action.selected' } }}
              >
                {l.label}
              </Button>
            ))}
          </Box>

          <IconButton onClick={onToggleMode} aria-label="Changer de thème" color="inherit">
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton sx={{ display: { sm: 'none' } }} onClick={(e) => setAnchor(e.currentTarget)} aria-label="Ouvrir le menu" color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
            {links.map((l) => (
              <MenuItem key={l.to} component={NavLink} to={l.to} end={l.to === '/'} onClick={() => setAnchor(null)}>
                {l.label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="md" sx={{ flexGrow: 1, py: { xs: 4, md: 8 } }}>
        <Outlet />
      </Container>

      <Box component="footer" sx={{ py: 3, textAlign: 'center', color: 'text.secondary' }}>
        <Typography variant="body2">© {new Date().getFullYear()} {profile.name}</Typography>
      </Box>
    </Box>
  );
}

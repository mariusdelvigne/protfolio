import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NotFound() {
  return (
    <>
      <Typography variant="h3" component="h1">Page introuvable</Typography>
      <Typography color="text.secondary" sx={{ my: 2 }}>Cette adresse n’existe pas ou a été déplacée.</Typography>
      <Button variant="contained" component={Link} to="/">Retour à l’accueil</Button>
    </>
  );
}

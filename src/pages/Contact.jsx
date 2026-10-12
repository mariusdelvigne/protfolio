import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { profile } from '../data';

export default function Contact() {
  return (
    <>
      <Typography variant="h3" component="h1" sx={{ mb: 2 }}>Contact</Typography>
      <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 520 }}>
        Je suis à la recherche d’un poste de développeur. Écris-moi, je réponds rapidement.
      </Typography>
      <Stack spacing={2} alignItems="flex-start">
        <Button variant="contained" size="large" startIcon={<EmailIcon />} href={`mailto:${profile.email}`}>{profile.email}</Button>
        <Button variant="outlined" startIcon={<LinkedInIcon />} href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</Button>
        <Button variant="outlined" startIcon={<GitHubIcon />} href={profile.github} target="_blank" rel="noreferrer">GitHub</Button>
      </Stack>
    </>
  );
}

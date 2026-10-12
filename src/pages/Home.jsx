import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/Download';
import { profile, skills, projects } from '../data';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <>
      <Typography variant="h2" component="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
        Bonjour, je suis {profile.name.split(' ')[0]}.
      </Typography>
      <Typography variant="h5" color="primary" sx={{ mt: 1 }}>{profile.title}</Typography>
      <Typography sx={{ mt: 3, maxWidth: 560, fontSize: '1.1rem' }} color="text.secondary">{profile.intro}</Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
        <Button variant="contained" size="large" component={Link} to="/projets">Voir mes projets</Button>
        <Button variant="outlined" size="large" startIcon={<DownloadIcon />} href={profile.cvFile} download>
          Télécharger mon CV
        </Button>
      </Stack>

      <Typography variant="h4" sx={{ mt: 8, mb: 2 }}>Technologies</Typography>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {Object.values(skills).flat().map((s) => <Chip key={s} label={s} />)}
      </Stack>

      <Typography variant="h4" sx={{ mt: 8, mb: 2 }}>Projet à la une</Typography>
      <Box sx={{ maxWidth: 480 }}><ProjectCard project={projects[0]} /></Box>
    </>
  );
}

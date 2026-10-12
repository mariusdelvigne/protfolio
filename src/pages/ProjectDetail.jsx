import { Link, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { projects } from '../data';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) return <NotFound />;

  return (
    <>
      <Button component={Link} to="/projets" startIcon={<ArrowBackIcon />} sx={{ mb: 3 }}>Tous les projets</Button>
      <Typography color="text.secondary">{project.context}</Typography>
      <Typography variant="h3" component="h1" sx={{ my: 1 }}>{project.title}</Typography>
      <Typography sx={{ my: 3, maxWidth: 640, fontSize: '1.1rem' }}>{project.description}</Typography>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 4 }}>
        {project.stack.map((s) => <Chip key={s} label={s} color="primary" variant="outlined" />)}
      </Stack>
      <Stack direction="row" spacing={2}>
        {project.github && <Button variant="outlined" startIcon={<GitHubIcon />} href={project.github} target="_blank" rel="noreferrer">Code source</Button>}
        {project.demo && <Button variant="contained" endIcon={<OpenInNewIcon />} href={project.demo} target="_blank" rel="noreferrer">Voir la démo</Button>}
      </Stack>
    </>
  );
}

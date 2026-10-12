import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { projects } from '../data';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <>
      <Typography variant="h3" component="h1" sx={{ mb: 4 }}>Projets</Typography>
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' } }}>
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </Box>
    </>
  );
}

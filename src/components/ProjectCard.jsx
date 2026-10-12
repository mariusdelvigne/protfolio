import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ProjectCard({ project }) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardActionArea component={Link} to={`/projets/${project.id}`} sx={{ height: '100%', alignItems: 'flex-start' }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">{project.context}</Typography>
          <Typography variant="h6" sx={{ my: 1 }}>{project.title}</Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>{project.summary}</Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {project.stack.map((s) => <Chip key={s} label={s} size="small" color="primary" variant="outlined" />)}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

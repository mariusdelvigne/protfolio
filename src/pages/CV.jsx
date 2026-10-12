import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DownloadIcon from '@mui/icons-material/Download';
import { profile, skills, languages, education, experience } from '../data';

function Section({ title, children }) {
  return (
    <Paper variant="outlined" sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" color="primary" sx={{ mb: 2 }}>{title}</Typography>
      {children}
    </Paper>
  );
}

function Entry({ title, place, period, text }) {
  return (
    <Stack sx={{ mb: 2 }}>
      <Typography fontWeight={500}>{title}</Typography>
      <Typography variant="body2" color="text.secondary">{[place, period].filter(Boolean).join(' – ')}</Typography>
      {text && <Typography sx={{ mt: 0.5 }}>{text}</Typography>}
    </Stack>
  );
}

export default function CV() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" sx={{ mb: 4, gap: 2 }}>
        <Typography variant="h3" component="h1">Curriculum vitae</Typography>
        <Button variant="contained" startIcon={<DownloadIcon />} href={profile.cvFile} download>Télécharger le PDF</Button>
      </Stack>

      <Section title="Expérience">{experience.map((e) => <Entry key={e.title} {...e} />)}</Section>
      <Section title="Formation">{education.map((e) => <Entry key={e.title} {...e} />)}</Section>
      <Section title="Compétences">
        {Object.entries(skills).map(([group, items]) => (
          <Stack key={group} sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{group}</Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {items.map((s) => <Chip key={s} label={s} />)}
            </Stack>
          </Stack>
        ))}
      </Section>
      <Section title="Langues">
        {languages.map((l) => <Typography key={l.name}>{l.name} : <Typography component="span" color="text.secondary">{l.level}</Typography></Typography>)}
      </Section>
    </>
  );
}

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useTheme }from "@mui/material";


export default function FooterView() {
	const theme = useTheme();

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Portfolio
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          paragraph
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis elit, finibus et fermentum vitae, feugiat quis dolor. Mauris efficitur interdum iaculis. Nam suscipit ultrices vehicula. In pulvinar neque non justo condimentum, eu maximus ligula iaculis.
        </Typography>
        
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="/">
            Giulio Lelis
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: theme.spacing(3) }}>
          <IconButton href="https://github.com/GiulioCastro">
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/giuliocastro/">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

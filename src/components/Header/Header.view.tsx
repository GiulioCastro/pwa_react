import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import CodeIcon from "@mui/icons-material/Code";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import OnVisibleAnimation from "components/OnVisibleAnimation/OnVisibleAnimation";

import { useTheme } from "@mui/material";

const pages = ["Home", "Skills", "Projects"];

export default function HeaderView() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  function handleOpenNavMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorElNav(event.currentTarget);
  }

  function handleCloseNavMenu() {
    setAnchorElNav(null);
  }

  return (
    <Box component="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                fontWeight="700"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              <Box
                sx={{
                  justifyContent: "flex-end",
                  flexGrow: 1,
                  mr: theme.spacing(1),
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <b>{page}</b>
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                <Button
                  variant="outlined"
                  onClick={() => {}}
                  sx={{ borderRadius: 0 }}
                >
                  Let's Connect
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <IconButton>
                  <ArrowCircleRightOutlinedIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      <Box
        sx={{
          marginTop: "200px",
          padding: theme.spacing(3),
        }}
      >
        <Grid container>
          <Grid item xs={12} md={7}>
            <motion.linearGradient
              style={{ width: 50, height: 50 }}
              animate={{
                gradientTransform: `rotate(${-90})`
              }}
            >
              <stop offset="5%" stop-color="#A6EA99" />
              <stop offset="95%" stop-color="#E1F8DD" />
            </motion.linearGradient>
            <Box
              component={motion.div}
              whileHover={{ 
                background: [`linear-gradient(90deg, ${theme.palette.secondary.dark} -5%, ${theme.palette.secondary.light} 100%)`, `linear-gradient(90deg, ${theme.palette.secondary.light} -5%, ${theme.palette.secondary.dark} 100%)`],
                transition: { repeat: Infinity, repeatType: 'reverse', duration: 1 }  
              }}
              sx={{
                /* background: `linear-gradient(90deg, ${theme.palette.secondary.dark} -5%, ${theme.palette.secondary.light} 100%)`, */
                border: "1px solid rgba(255, 255, 255, 0.5)",
                p: theme.spacing(1),
                mb: theme.spacing(3),
                display: "inline-block",
              }}
            >
              <Typography fontWeight="700" variant="body1" textAlign="center">
                Welcome to my Portfolio
              </Typography>
            </Box>
            <OnVisibleAnimation
              initial={{ x: "-50%" }}
              animate={{ x: 0, transition: { ease: "easeIn", duration: 1 } }}
            >			
              <Typography variant="h2" gutterBottom>
                Hi! I'm Giulio, Front End Developer
              </Typography>
            </OnVisibleAnimation>
            <OnVisibleAnimation
              initial={{ y: "50%" }}
              animate={{ y: 0, transition: { ease: "easeIn", duration: 1 } }}
            >			
              <Typography variant="subtitle1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                turpis elit, finibus et fermentum vitae, feugiat quis dolor.
                Mauris efficitur interdum iaculis. Nam suscipit ultrices vehicula.
                In pulvinar neque non justo condimentum, eu maximus ligula
                iaculis.
              </Typography>
            </OnVisibleAnimation>
            <OnVisibleAnimation
              initial={{ y: "-10%" }}
              animate={{ 
                y: "10%", 
                transition: { 
                  ease: 'easeInOut',                  
                  duration: 0.5,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: 'mirror',
                } 
              }}
            >			
              <Button endIcon={<ArrowCircleRightOutlinedIcon />}>
                Let's connect
              </Button>
            </OnVisibleAnimation>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={5}
            justifyContent="center"
            alignItems="center"
          >
            <CodeIcon sx={{ height: 150, width: 150 }} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

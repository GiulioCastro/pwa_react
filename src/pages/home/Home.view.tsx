import { motion } from "framer-motion";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SendIcon from "@mui/icons-material/Send";

import { Wrapper, Section } from "./Home.style";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Parallax from "components/Parallax/Parallax";
import CircularProgressWithLabel from "components/CircularProgressWithLabel/CircularProgressWithLabel";
import OnVisibleAnimation from "components/OnVisibleAnimation/OnVisibleAnimation";

import banner from "assets/images/banner.jpg";
import { Button, useTheme } from "@mui/material";

import { EnumTabs, IHomeViewProps } from "./Home.model";
import { skillsMock, projectsMock } from "./Home.mock";

export default function HomeView(props: IHomeViewProps) {
  const theme = useTheme();

  return (
    <Wrapper>
      <Parallax backgroundImage={`url(${banner})`} height="auto">
        <Header />

        <Section>
          <Container maxWidth="xl">
            <Card sx={{ borderRadius: theme.spacing(5) }}>
              <CardContent>
                <Typography variant="h3" textAlign="center" gutterBottom>
                  Skills
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  textAlign="center"
                  paragraph
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  turpis elit, finibus et fermentum vitae, feugiat quis dolor.
                  Mauris efficitur interdum iaculis. Nam suscipit ultrices
                  vehicula. In pulvinar neque non justo condimentum, eu maximus
                  ligula iaculis.
                </Typography>
              </CardContent>
              <CardContent>
                <Grid container>
                  {skillsMock.map((item) => (
                    <Grid
                      container
                      item
                      xs={12}
                      sm={3}
                      flexDirection="column"
                      alignItems="center"
                    >
                      <CircularProgressWithLabel
                        progress={item.skill}
                        color="secondary"
                        size={80}
                        thickness={6}
                        textVariant="subtitle1"
                      />
                      <Typography
                        variant="h6"
                        textAlign="center"
                        color="text.secondary"
                        gutterBottom
                      >
                        {item.name}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Section>
      </Parallax>

      <Section>
        <Container maxWidth="md">
          <Typography variant="h3" textAlign="center" gutterBottom>
            Projects
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            textAlign="center"
            paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis
            elit, finibus et fermentum vitae, feugiat quis dolor. Mauris
            efficitur interdum iaculis. Nam suscipit ultrices vehicula. In
            pulvinar neque non justo condimentum, eu maximus ligula iaculis.
          </Typography>
          <Tabs
            value={props.currentTab}
            onChange={props.handleTabChange}
            sx={{ marginBottom: theme.spacing(3) }}
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab value={EnumTabs.tab1} label="Tab 1" />
            <Tab value={EnumTabs.tab2} label="Tab 2" />
            <Tab value={EnumTabs.tab3} label="Tab 3" />
          </Tabs>

          <Grid container spacing={3}>
            {projectsMock.map((item) => (
              <Grid item xs={4}>
                <OnVisibleAnimation								
									initial={{ scale: "50%" }}
									animate={{ scale: "100%" }}			
                >
                  <Card sx={{ borderRadius: theme.spacing(3) }}>
                    <CardMedia
                      component="img"
                      alt="placeholder"
                      height="150"
                      image={item.image}
                    />
                  </Card>
                </OnVisibleAnimation>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
      <Parallax
        backgroundImage={`linear-gradient(90deg, ${theme.palette.secondary.dark} -5%, ${theme.palette.secondary.light} 100%)`}
        height="auto"
      >
        <Section>
          <Container maxWidth="xl">
            <Grid container spacing={3} justifyContent="center" alignItems="center">
              <Grid
                item
								style={{ height: "100%", width: '100%' }}
                xs={12}
                md={6}
              >
								<OnVisibleAnimation
									initial={{ x: "-200%" }}
									animate={{ x: 0, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 } }}
								>			
									<Box sx={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
										<ConnectWithoutContactIcon
											sx={{ height: "175px", width: "auto" }}
										/>
									</Box>
								</OnVisibleAnimation>
              </Grid>
              <Grid item xs={12} md={6}>								
								<OnVisibleAnimation 
									initial={{ x: "200%" }}
									animate={{ x: 0, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 } }}
								>			
									<Box sx={{ display: 'flex', flexDirection: 'column' }}>
										<Typography variant="h3" paragraph>
											Get in touch!
										</Typography>
										<TextField
											required
											variant="outlined"
											margin="normal"
											label="Name"
										/>
										<TextField
											required
											variant="outlined"
											margin="normal"
											label="Email"
											type="email"
										/>
										<TextField
											required
											multiline
											minRows={5}
											maxRows={5}
											variant="outlined"
											margin="normal"
											label="Message"
										/>
										<Button
											sx={{ marginTop: theme.spacing(2), boxShadow: "none" }}
											component={motion.div}
											whileHover={{
												scale: 1.05,
												transition: { duration: 0.3 }
											}}
											whileTap={{ scale: 0.95 }}
											endIcon={<SendIcon fontSize="small" />}
											variant="contained"
											color="primary"
										>
											Send
										</Button>
									</Box>						
                </OnVisibleAnimation>
              </Grid>
            </Grid>
          </Container>
        </Section>
      </Parallax>
      <Footer />
    </Wrapper>
  );
}

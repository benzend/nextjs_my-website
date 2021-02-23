import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { ServiceContainer } from "./ServiceContainer";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "1rem 0",
  },
  secondaryContainer: {
    padding: "1.3rem 0",
  },
  mainTitle: {
    padding: ".3rem 0",
    marginTop: "1rem",
  },
  secondaryTitle: {
    background: theme.palette.secondary.main,
    borderRadius: ".1rem",
    padding: "0 .5rem",
    color: theme.palette.secondary.contrastText,
  },
}));

export const HomeServices = () => {
  const {
    mainTitle,
    secondaryTitle,
    mainContainer,
    secondaryContainer,
  } = useStyles();
  return (
    <Container>
      <Typography className={mainTitle} variant="h2">
        Services
      </Typography>
      <Grid className={mainContainer} container>
        <Grid item>
          <Box className={secondaryContainer}>
            <Typography className={secondaryTitle} variant="h4" component="h3">
              Websites
            </Typography>
            <ServiceContainer title="Next.js" link="/next-pricing">
              If you want an extremely customizable site where you can add
              detail to every little pixle and light speed performance with SEO
              in mind then using Next.js is what will get you there.
            </ServiceContainer>
            <ServiceContainer title="Wordpress" link="/wordpress-pricing">
              Wordpress allows for very quick production and easy editability.
              Speed is not it's number one priority nor is no touch maintenance
              but it is one of the most used website builders out there.
            </ServiceContainer>
          </Box>
        </Grid>
        <Grid item>
          <Box className={secondaryContainer}>
            <Typography className={secondaryTitle} variant="h4" component="h3">
              Apps
            </Typography>
            <ServiceContainer title="React.js" link="/react-pricing">
              If you're not worried about SEO and being listed as a website then
              React.js is the perfect framework.
            </ServiceContainer>
            <ServiceContainer
              title="React Native (Mobile)"
              link="/react-native-pricing"
            >
              Do you need an app that just runs on Android or IPhone? React
              Native is an amazing framework built just for that!
            </ServiceContainer>
          </Box>
        </Grid>
        <Grid item>
          <Box className={secondaryContainer}>
            <Typography className={secondaryTitle} variant="h4" component="h3">
              Mentoring
            </Typography>
            <ServiceContainer
              title="Web Development"
              link="/mentorship-pricing"
            >
              Since working with HTML, CSS, JavaScript and React is what I do
              for a living, I also offer mentorship services in any of these
              areas!
            </ServiceContainer>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

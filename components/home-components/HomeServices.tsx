import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  Code,
  DesktopMac,
  FlashOn,
  School,
  StayCurrentPortrait,
  Web,
} from "@material-ui/icons";
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
    marginTop: "2rem",
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
            <ServiceContainer
              title="Next.js"
              link="/next-pricing"
              Icon={FlashOn}
            >
              If you want an extremely customizable site where you can add
              detail to every little pixle and light speed performance with SEO
              in mind then using Next.js is what will get you there.
            </ServiceContainer>
            <ServiceContainer
              title="Wordpress"
              link="/wordpress-pricing"
              Icon={Web}
            >
              Wordpress allows for very quick production and easy editability.
              It is one of the most used website builders out there with
              thousands of plugins and themes to work with.
            </ServiceContainer>
          </Box>
        </Grid>
        <Grid item>
          <Box className={secondaryContainer}>
            <Typography className={secondaryTitle} variant="h4" component="h3">
              Apps
            </Typography>
            <ServiceContainer
              title="React.js"
              link="/react-pricing"
              Icon={Code}
            >
              React.js is the perfect framework to develop highly dynamic sites
              and applications. It goes hand and hand with efficiency and
              flexibility, making it the most popular framework to date!
            </ServiceContainer>
            <ServiceContainer
              title="React Native (Mobile)"
              link="/react-native-pricing"
              Icon={StayCurrentPortrait}
            >
              Do you need an app that just runs on Android or IPhone? React
              Native is an amazing framework built just for that! React Native
              uses React as its backbone making it very powerful and gives your
              app the options to do whatever it wants.
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
              Icon={School}
            >
              Since working with HTML, CSS, JavaScript and React is what I do
              for a living, I also offer mentorship services in any of these
              areas! I provide high quality instructoring making sure that you
              know exactly what you are doing.
            </ServiceContainer>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

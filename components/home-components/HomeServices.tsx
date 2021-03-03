import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  Code,
  FlashOn,
  School,
  StayCurrentPortrait,
  Web,
} from "@material-ui/icons";
import { AnimationProps, motion } from "framer-motion";
import { ServicesContainer } from "./ServicesContainer";

const useStyles = makeStyles((theme) => ({
  root: {},
  mainContainer: {
    padding: "1rem 0",
  },
  secondaryContainer: {
    padding: "1.3rem 0",
  },
  mainTitle: {
    padding: ".3rem 0",
    marginTop: "1rem",
    textShadow: "0 10px 3px #0007",
    textAlign: "center",
    color: theme.palette.secondary.contrastText,
  },
  secondaryTitle: {
    textAlign: "center",
    borderRadius: ".1rem",
    padding: "0 .5rem",
    margin: "2rem 0 3rem",
    textShadow: "0 10px 3px #0007",
    color: theme.palette.secondary.contrastText,
  },
  serviceGrid: {
    flexDirection: "row",
  },
  listItem: {
    "&::before": {
      content: '"- "',
    },
  },
}));

interface IHomeServicesProps {
  animateTitle: boolean;
  animateWebsites: boolean;
  animateApps: boolean;
  animateMentoring: boolean;
  variants: AnimationProps["variants"];
}

export const HomeServices = ({
  animateTitle,
  animateWebsites,
  animateApps,
  animateMentoring,
  variants,
}: IHomeServicesProps) => {
  const {
    mainTitle,
    secondaryTitle,
    mainContainer,
    secondaryContainer,
    root,
    serviceGrid,
    listItem,
  } = useStyles();
  return (
    <Container className={root}>
      <Box overflow="hidden">
        <motion.div
          variants={variants}
          animate={animateTitle ? "visibleByX" : "yBottomHidden"}
        >
          <Typography className={mainTitle} variant="h2">
            Services
          </Typography>
        </motion.div>
      </Box>
      <Grid className={mainContainer} container>
        <Grid item>
          <ServicesContainer
            mainTitle="Websites"
            mainTitleStyle={secondaryTitle}
            animate={animateWebsites}
            rootStyle={secondaryContainer}
            variants={variants}
            listItemStyle={listItem}
            serviceGridStyle={serviceGrid}
            services={[
              {
                title: "Next.js",
                icon: FlashOn,
                link: "next-pricing",
                descs: [
                  "Extremely Fast Performance",
                  "Fully Customizable",
                  "Low Maintenance",
                  "Easily Scaleable",
                ],
              },
              {
                title: "Wordpress",
                icon: Web,
                link: "wordpress-pricing",
                descs: [
                  "Quick Building / Prototyping",
                  "Easy Customizability",
                  "Thousands of Plugins",
                ],
              },
            ]}
          />
        </Grid>
        <Grid item>
          <ServicesContainer
            mainTitle="Apps"
            mainTitleStyle={secondaryTitle}
            animate={animateApps}
            rootStyle={secondaryContainer}
            variants={variants}
            listItemStyle={listItem}
            serviceGridStyle={serviceGrid}
            services={[
              {
                title: "React.js",
                icon: Code,
                link: "react-pricing",
                descs: [
                  "Lightning Fast Performance",
                  "Fully Customizable",
                  "Most Popular Framework (Library)",
                  "Easily Scaleable",
                ],
              },
              {
                title: "React Native (Mobile)",
                icon: StayCurrentPortrait,
                link: "react-native-pricing",
                descs: [
                  "Specifically Mobile",
                  "Easy Prototyping",
                  "React Based",
                ],
              },
            ]}
          />
        </Grid>
        <Grid item>
          <ServicesContainer
            mainTitle="Web Development"
            mainTitleStyle={secondaryTitle}
            animate={animateMentoring}
            rootStyle={secondaryContainer}
            variants={variants}
            listItemStyle={listItem}
            serviceGridStyle={serviceGrid}
            services={[
              {
                title: "HTML/CSS",
                icon: School,
                link: "mentorship-pricing",
                descs: [
                  "Lightning Fast Performance",
                  "Fully Customizable",
                  "Most Popular Framework (Library)",
                  "Easily Scaleable",
                ],
              },
              {
                title: "JavaScript",
                icon: School,
                link: "mentorship-pricing",
                descs: [
                  "Specifically Mobile",
                  "Easy Prototyping",
                  "React Based",
                ],
              },
              {
                title: "React",
                icon: School,
                link: "mentorship-pricing",
                descs: [
                  "Specifically Mobile",
                  "Easy Prototyping",
                  "React Based",
                ],
              },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

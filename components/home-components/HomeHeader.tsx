import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  Button,
} from "@material-ui/core";

import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    background:
      "url('https://images.pexels.com/photos/34153/pexels-photo.jpg') no-repeat center/cover",
  },
  title: {
    color: theme.palette.secondary.main,
    fontSize: "2.5rem",
    textAlign: "center",
  },
  subtitle: {
    color: theme.palette.primary.contrastText,
    fontSize: "1.3rem",
    textAlign: "center",
  },
  textContainer: {
    height: "100vh",
    padding: "6rem 0",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ctaText: {
    color: theme.palette.primary.contrastText,
    textAlign: "center",
  },
}));

export default function HomeHeader() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid className={classes.textContainer} container>
          <Grid item>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Typography className={classes.title} variant="h1">
                MadeUnlinked
              </Typography>
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Typography className={classes.subtitle} variant="h2">
                Web Development Made Easy
              </Typography>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Typography className={classes.ctaText} variant="body1">
                Do You Need An App Or Website?
              </Typography>
            </motion.div>
            <br />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <Button fullWidth variant="contained" color="secondary">
                <Link href="/contact">Click Here</Link>
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

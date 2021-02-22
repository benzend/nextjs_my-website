import Link from "next/link";
import { Box, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  links: {
    color: theme.palette.primary.contrastText,
  },
}));

export default function PortfolioNav() {
  const classes = useStyles();
  return (
    <Box zIndex={10} component="nav" position="absolute">
      <Grid spacing={3} container>
        <Grid item>
          <Box className={classes.links}>
            <Link href="/portfolio">Home</Link>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.links}>
            <Link href="#projects">Projects</Link>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.links}>
            <Link href="#about">About</Link>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.links}>
            <Link href="#contact">Contact</Link>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.links}>
            <Link href="/">Home</Link>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.links}>
            <Link href="/services">Services</Link>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.links}>
            <Link href="/blog">Blog</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

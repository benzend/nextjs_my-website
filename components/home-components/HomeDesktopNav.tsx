import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "100vw",
    height: "50px",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.contrastText,
  },
  link: {
    padding: "3px 5px",
    cursor: "pointer",
    ["&.current"]: {
      background:
        "linear-gradient(0deg, #FF2727 0%, rgba(235, 81, 81, 0) 100%)",
    },
    ["&:hover"]: {
      transform: "scale(1.06)",
    },
  },
}));

export const HomeDesktopNav = () => {
  const { root, link } = useStyles();
  return (
    <Box className={root} component="nav">
      <Container>
        <Grid spacing={5} justify="flex-end" alignItems="center" container>
          <Grid item>
            <Link href="/">
              <Box className={link + " current"}>Home</Box>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/#services">
              <Box className={link}>Services</Box>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/portfolio#contact">
              <Box className={link}>Contact</Box>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/portfolio">
              <Box className={link}>Portfolio</Box>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/blog">
              <Box className={link}>Blog</Box>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

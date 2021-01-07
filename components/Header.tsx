import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
  header: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    color: "#de094c",
  },
  subTitle: {
    color: "#ddf",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.header}>
      <div>
        <Typography className={classes.title} variant="h1" component="h1">
          Benjamin Scott
        </Typography>
        <Typography className={classes.subTitle} variant="h2" component="h2">
          React Web Developer
        </Typography>
      </div>
    </Box>
  );
}

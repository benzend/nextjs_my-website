import { GitHub, Language } from "@material-ui/icons";
import { IconButton, makeStyles, Box, Typography } from "@material-ui/core";

interface Props {
  imgSource: string;
  title: string;
  imgAlt: string;
  tech: string;
  gitHubUrl: string;
  liveUrl: string;
  description: string;
}

const useStyles = makeStyles({
  root: {
    height: "530px",
    width: "394px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "2rem",
    marginTop: "1rem",
  },
  tech: {
    fontSize: "1.4rem",
  },
  media: {
    borderRadius: "20px",
    height: "220px",
    width: "394px",
  },
  desc: {
    color: "#ccc",
    padding: ".5rem 0",
  },
  links: {
    marginLeft: "-13px",
  },
});

export default function Project({
  imgSource,
  title,
  imgAlt,
  tech,
  gitHubUrl,
  liveUrl,
  description,
}: Props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img className={classes.media} src={imgSource} alt={imgAlt} />
      <Box marginTop="2.3rem">
        <Typography
          className={classes.title + " white"}
          variant="h3"
          component="h4"
        >
          {title}
        </Typography>
        <Typography
          color="primary"
          className={classes.tech}
          variant="h4"
          component="h5"
        >
          {tech}
        </Typography>
        <Typography className={classes.desc} variant="body1">
          {description}
        </Typography>
        <Box className={classes.links}>
          <a href={liveUrl}>
            <IconButton>
              <Language className="white" />
            </IconButton>
          </a>
          <a href={gitHubUrl}>
            <IconButton>
              <GitHub className="white" />
            </IconButton>
          </a>
        </Box>
      </Box>
    </Box>
  );
}

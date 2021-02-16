import { Grid, IconButton, Link, Typography } from "@material-ui/core";
import { GitHub, LinkedIn, Twitter, Home } from "@material-ui/icons";

export default function Footer() {
  return (
    <Grid
      justify="center"
      alignItems="center"
      spacing={3}
      direction="row"
      container
    >
      <Grid item>
        <Typography>
          <Link href="https://madeunlinked.com/portfolio">
            <IconButton color="primary">
              <Home />
            </IconButton>
          </Link>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Link
            rel="noreferrer"
            href="https://twitter.com/TheBenzend"
            target="_blank"
          >
            <IconButton color="primary">
              <Twitter />
            </IconButton>
          </Link>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Link
            rel="noreferrer"
            href="https://github.com/benzend"
            target="_blank"
          >
            <IconButton color="primary">
              <GitHub />
            </IconButton>
          </Link>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Link
            rel="noreferrer"
            href="https://www.linkedin.com/in/benjamin-scott-62a3741b1/"
            target="_blank"
          >
            <IconButton color="primary">
              <LinkedIn />
            </IconButton>
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

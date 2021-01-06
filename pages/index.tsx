import { Box, Grid, IconButton, Link, Typography } from "@material-ui/core";
import { GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import Head from "next/head";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Benjamin Scott | A React.js Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Box component="nav">
        <Link href="#projects">Projects</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Get In Touch</Link>
      </Box>
      <Box component="header" className={styles.header}>
        <Typography color="textPrimary" variant="h1" component="h1">
          Benjamin Scott
        </Typography>
        <Typography color="textSecondary" variant="h2" component="h2">
          React Web Developer
        </Typography>
      </Box>
      <Projects />
      <Box component="section">
        <h2>About</h2>
        <p>
          As a passionate developer, my goals are to keep progressing in all
          areas of web development. From front-end to back, my skills will keep
          moving forward by building and learning everything that I can.
        </p>
        <p>
          The one thing that has always pushed me forward in life is the ability
          to learn. Ever since highschool, I've always taken another step in the
          pursuit of knowledge, whether it be for something new, something that
          I was generally interested in, or something that I saw was useful.
        </p>
        <p>
          I always find myself trying to find something meaningful. Right now,
          this is following through with a career, specializing in a field that
          I see as valuable. Web development is an occupation where I see so
          many of its positives and benefits.
        </p>
        <p>
          When it comes to the tech, I am currently placing my time into
          React.js. I like to integrate Material UI, building anything with an
          implication towards scalable apps (sometimes websites).
        </p>
        <p>
          I am currently being mentored by a lead front-end developer for the
          last month, partaking in building my skills in all the intricacies
          that web development comes with.
        </p>

        <p>
          I have collaborated on projects with friends and have been
          persistently building all sorts of projects, whether it be websites,
          games or applications. I am constantly working on my skills every
          single day, treating this as a full time job.
        </p>
        <p>
          I never obtain my knowledge from one source. I have used Free Code
          Camp, YouTube videos from people like Dev Ed, Brad Traversy, The Net
          Ninja, Free Code Camp, Tony Alicia, Chris Sean, Programming with Mosh
          and others that have created web development content. I have also
          learned from Udemy courses and from the Head First series. LOTS of my
          learning comes from the actual experience (and Google). And some of it
          comes from working with other developers.
        </p>
      </Box>
      <Grid
        justify="center"
        alignItems="center"
        spacing={3}
        direction="row"
        container
      >
        <Grid item>
          <Typography>
            <Link href="https://madeunlinked.com">@madeunlinked</Link>
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
    </div>
  );
}

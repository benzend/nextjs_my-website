import { Container, Divider, makeStyles, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

interface Props {
  animate: boolean;
  variants: any;
}

const useStyles = makeStyles({
  title: {
    padding: "10rem 0",
  },
  breaks: {
    marginBottom: ".3rem",
  },
  text: {
    padding: ".5rem 0",
  },
});

export default function PortfolioAboutSection({ animate, variants }: Props) {
  const classes = useStyles();
  return (
    <>
      <Container id="about" maxWidth="sm">
        <motion.div
          variants={variants}
          animate={animate ? "visibleByY" : "yBottomHidden"}
        >
          <Typography
            variant="h2"
            className={classes.title + " white txt-center"}
          >
            About
          </Typography>
        </motion.div>
        <motion.div
          variants={variants}
          animate={animate ? "xVisibleGrid" : "xLeftHidden"}
        >
          <motion.div variants={variants}>
            <Typography variant="h4" className="white">
              Introduction
            </Typography>
          </motion.div>
          <motion.div variants={variants}>
            <Divider
              className={classes.breaks}
              style={{ background: "white" }}
            />
          </motion.div>
          <motion.div variants={variants}>
            <Typography variant="body1" className={classes.text + " white"}>
              As a passionate developer, my goals are to keep progressing in all
              areas of web development. From front-end to back, my skills will
              keep moving forward by building and learning everything that I
              can.
            </Typography>
          </motion.div>
          <motion.div variants={variants}>
            <Typography variant="body1" className={classes.text + " white"}>
              The one thing that has always pushed me forward in life is the
              ability to learn. Ever since highschool, I've always taken another
              step in the pursuit of knowledge, whether it be for something new,
              something that I was generally interested in, or something that I
              saw was useful.
            </Typography>
          </motion.div>
          <motion.div variants={variants}>
            <Typography variant="body1" className={classes.text + " white"}>
              When it comes to the tech, I am currently placing my time into
              React.js. I like to integrate Material UI, building anything with
              an implication towards scalable apps and websites.
            </Typography>
          </motion.div>
          <motion.div variants={variants}>
            <Typography variant="body1" className={classes.text + " white"}>
              I am currently being mentored by a lead front-end developer for
              the last month, partaking in building my skills in all the
              intricacies that web development comes with.
            </Typography>
          </motion.div>
          <motion.div variants={variants}>
            <Typography variant="h4" className="white">
              Focus
            </Typography>
          </motion.div>
          <motion.div variants={variants}>
            <Divider
              className={classes.breaks}
              style={{ background: "white" }}
            />
          </motion.div>
          <motion.div variants={variants}>
            <Typography variant="body1" className={classes.text + " white"}>
              I have collaborated on projects with friends and have been
              persistently building all sorts of projects, whether it be
              websites, games or applications. I am constantly working on my
              skills every single day, treating this as a full time job.
            </Typography>
          </motion.div>
          <motion.div variants={variants}>
            <Typography variant="body1" className={classes.text + " white"}>
              I never obtain my knowledge from one source. I have used Free Code
              Camp, YouTube videos from people like Dev Ed, Brad Traversy, The
              Net Ninja, Free Code Camp, Tony Alicia, Chris Sean, Programming
              with Mosh and others that have created web development content. I
              have also learned from Udemy courses and from the Head First
              series. LOTS of my learning comes from the actual experience (and
              Google). And some of it comes from working with other developers.
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
}

import { Container, Typography } from "@material-ui/core";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h3" className="white txt-center">
        About
      </Typography>
      <Typography variant="body1" className="white">
        As a passionate developer, my goals are to keep progressing in all areas
        of web development. From front-end to back, my skills will keep moving
        forward by building and learning everything that I can.
      </Typography>
      <Typography variant="body1" className="white">
        The one thing that has always pushed me forward in life is the ability
        to learn. Ever since highschool, I've always taken another step in the
        pursuit of knowledge, whether it be for something new, something that I
        was generally interested in, or something that I saw was useful.
      </Typography>
      <Typography variant="body1" className="white">
        I always find myself trying to find something meaningful. Right now,
        this is following through with a career, specializing in a field that I
        see as valuable. Web development is an occupation where I see so many of
        its positives and benefits.
      </Typography>
      <Typography variant="body1" className="white">
        When it comes to the tech, I am currently placing my time into React.js.
        I like to integrate Material UI, building anything with an implication
        towards scalable apps (sometimes websites).
      </Typography>
      <Typography variant="body1" className="white">
        I am currently being mentored by a lead front-end developer for the last
        month, partaking in building my skills in all the intricacies that web
        development comes with.
      </Typography>

      <Typography variant="body1" className="white">
        I have collaborated on projects with friends and have been persistently
        building all sorts of projects, whether it be websites, games or
        applications. I am constantly working on my skills every single day,
        treating this as a full time job.
      </Typography>
      <Typography variant="body1" className="white">
        I never obtain my knowledge from one source. I have used Free Code Camp,
        YouTube videos from people like Dev Ed, Brad Traversy, The Net Ninja,
        Free Code Camp, Tony Alicia, Chris Sean, Programming with Mosh and
        others that have created web development content. I have also learned
        from Udemy courses and from the Head First series. LOTS of my learning
        comes from the actual experience (and Google). And some of it comes from
        working with other developers.
      </Typography>
    </Container>
  );
}

import { Box, Link } from "@material-ui/core";

export default function Nav() {
  return (
    <Box component="nav" position="fixed">
      <Link href="#projects">Projects</Link>
      <Link href="#about">About</Link>
      <Link href="#contact">Get In Touch</Link>
    </Box>
  );
}

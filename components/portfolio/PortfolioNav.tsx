import { Box, Link } from "@material-ui/core";

export default function PortfolioNav() {
  return (
    <Box zIndex={10} component="nav" position="fixed">
      <Link href="/portfolio">Home</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#about">About</Link>
      <Link href="#contact">Get In Touch</Link>
    </Box>
  );
}

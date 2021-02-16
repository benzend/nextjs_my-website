import { Box, Typography } from "@material-ui/core";
import PortfolioNav from "../components/portfolio/PortfolioNav";

export default function Home() {
  return (
    <>
      <Box>
        <Typography variant="h1">Home</Typography>
        <PortfolioNav />
      </Box>
    </>
  );
}

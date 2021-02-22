import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";

export const HomeServices = () => {
  return (
    <Container>
      <Typography variant="h2">Services</Typography>
      <Grid container>
        <Grid item>
          <Box>
            <Typography variant="h4" component="h3">
              Websites
            </Typography>
            <Typography variant="h5" component="h4">
              Next.js
            </Typography>
            <Divider />
            <Typography variant="body1">
              If you want an extremely customizable site where you can add
              detail to every little pixle and light speed performance with SEO
              in mind then using Next.js is what will get you there.
            </Typography>
            <Button color="secondary" fullWidth variant="outlined">
              Pricing
            </Button>
            <Typography variant="h5" component="h4">
              Wordpress
            </Typography>
            <Divider />
            <Typography variant="body1">
              Wordpress allows for very quick production and easy editability.
              Speed is not it's number one priority nor is no touch maintenance
              but it is one of the most used website builders out there.
            </Typography>
            <Button color="secondary" fullWidth variant="outlined">
              Pricing
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Typography variant="h4" component="h3">
              Apps
            </Typography>
            <Typography variant="h5" component="h4">
              React.js
            </Typography>
            <Divider />
            <Typography variant="body1">
              If you're not worried about SEO and being listed as a website then
              React.js is the perfect framework.
            </Typography>
            <Button color="secondary" fullWidth variant="outlined">
              Pricing
            </Button>
            <Typography variant="h5" component="h4">
              React Native (Mobile specific)
            </Typography>
            <Divider />
            <Typography variant="body1">
              Do you need an app that just runs on Android or IPhone? React
              Native is an amazing framework built just for that!
            </Typography>
            <Button color="secondary" fullWidth variant="outlined">
              Pricing
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Typography variant="h4" component="h3">
              Mentoring
            </Typography>
            <Typography variant="body1">
              Since working with HTML, CSS, JavaScript and React is what I do
              for a living, I also offer mentorship services in any of these
              areas!
            </Typography>
            <Button color="secondary" fullWidth variant="outlined">
              Pricing
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
